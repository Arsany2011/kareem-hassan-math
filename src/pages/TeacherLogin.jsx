import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout.jsx'

export default function TeacherLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  function submit(event) {
    event.preventDefault()
    setMessage('تسجيل الدخول غير مفعّل بعد. لازم توصيل خدمة مصادقة آمنة قبل استخدام لوحة المستر.')
  }

  return (
    <PageLayout eyebrow="منطقة خاصة" title="دخول المستر" description="الصفحة مخصصة لإدارة المنصة بعد إعداد المصادقة الآمنة.">
      <form className="form-card login-card" onSubmit={submit}>
        <label className="field"><span>البريد الإلكتروني</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="teacher@example.com" /></label>
        <label className="field"><span>كلمة المرور</span><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="كلمة المرور" /></label>
        {message && <p className="form-error" role="alert">{message}</p>}
        <button className="button button-gold form-submit" type="submit">تسجيل الدخول</button>
        <button className="text-link back-link" type="button" onClick={() => navigate('/')}>العودة للرئيسية ←</button>
      </form>
    </PageLayout>
  )
}
