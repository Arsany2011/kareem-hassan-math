import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout.jsx'

const rows = [
  ['أولى إعدادي', '2، 4، 6'],
  ['تانية إعدادي', '2، 4، 6'],
  ['تالتة إعدادي', '12، 2، 4، 6'],
  ['أولى ثانوي', '7:30، 9:00'],
]

export default function Schedule() {
  return (
    <PageLayout eyebrow="المواعيد" title="المواعيد المتاحة" description="اختار المرحلة المناسبة، وتأكد من الموعد عند تقديم طلب التسجيل.">
      <div className="schedule-list">
        {rows.map(([grade, times], i) => (
          <article className="schedule-row" key={grade}>
            <span className="schedule-index">0{i + 1}</span>
            <h2>{grade}</h2>
            <p>{times}</p>
            <Link className="text-link" to="/register">احجز <span>←</span></Link>
          </article>
        ))}
      </div>
      <p className="form-note">المواعيد المعروضة مبدئية حسب الإعدادات المطلوبة، وليست تأكيدًا لحجز فعلي.</p>
    </PageLayout>
  )
}
