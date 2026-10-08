import { useRef, useState } from 'react'
import FormError from './FormError.jsx'
import { useScrollToError } from '../../hooks/useScrollToError.js'

const schedules = {
  'أولى إعدادي': ['2', '4', '6'],
  'تانية إعدادي': ['2', '4', '6'],
  'تالتة إعدادي': ['12', '2', '4', '6'],
  'أولى ثانوي': ['7:30', '9:00'],
}

export default function StudentRegistrationForm() {
  const [form, setForm] = useState({
    firstName: '', secondName: '', thirdName: '', fourthName: '',
    grade: '', schedule: '', guardian: '', phone: '', gender: '',
  })
  const [error, setError] = useState('')
  const errorRef = useRef(null)
  const scrollToError = useScrollToError(errorRef)

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value, ...(name === 'grade' ? { schedule: '' } : {}) }))
  }

  function submit(event) {
    event.preventDefault()
    const required = Object.entries(form).find(([, value]) => !String(value).trim())
    if (required) {
      setError('من فضلك كمّل كل البيانات المطلوبة قبل الإرسال.')
      scrollToError()
      return
    }
    if (!/^01[0-2,5][0-9]{8}$/.test(form.phone)) {
      setError('رقم الموبايل لازم يكون رقم مصري صحيح من 11 رقم ويبدأ بـ 010 أو 011 أو 012 أو 015.')
      scrollToError()
      return
    }
    setError('تم التحقق من البيانات بنجاح. ربط إرسال الطلب وحفظه يحتاج إعداد قاعدة بيانات.')
    scrollToError()
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div ref={errorRef}><FormError message={error} /></div>
      <div className="form-grid">
        {[
          ['firstName', 'الاسم الأول'],
          ['secondName', 'الاسم الثاني'],
          ['thirdName', 'الاسم الثالث'],
          ['fourthName', 'الاسم الرابع'],
        ].map(([name, label]) => (
          <label className="field" key={name}>
            <span>{label}</span>
            <input name={name} value={form[name]} onChange={update} placeholder={label} autoComplete="off" />
          </label>
        ))}
        <label className="field">
          <span>الصف الدراسي</span>
          <select name="grade" value={form.grade} onChange={update}>
            <option value="">اختر الصف</option>
            {Object.keys(schedules).map((grade) => <option key={grade}>{grade}</option>)}
          </select>
        </label>
        <label className="field">
          <span>الموعد</span>
          <select name="schedule" value={form.schedule} onChange={update} disabled={!form.grade}>
            <option value="">اختر الموعد</option>
            {(schedules[form.grade] || []).map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
        </label>
        <label className="field field-full">
          <span>اسم ولي الأمر</span>
          <input name="guardian" value={form.guardian} onChange={update} placeholder="اكتب اسم ولي الأمر" />
        </label>
        <label className="field field-full">
          <span>رقم موبايل ولي الأمر</span>
          <input name="phone" value={form.phone} onChange={update} inputMode="numeric" maxLength={11} placeholder="01xxxxxxxxx" />
        </label>
        <fieldset className="field field-full gender-field">
          <legend>النوع</legend>
          <label><input type="radio" name="gender" value="ذكر" checked={form.gender === 'ذكر'} onChange={update} /> ذكر</label>
          <label><input type="radio" name="gender" value="أنثى" checked={form.gender === 'أنثى'} onChange={update} /> أنثى</label>
        </fieldset>
      </div>
      <button className="button button-gold form-submit" type="submit">إرسال طلب التسجيل</button>
      <p className="form-note">ده نموذج تجريبي؛ الطلبات مش بتتحفظ على سيرفر لحد توصيل قاعدة البيانات.</p>
    </form>
  )
}
