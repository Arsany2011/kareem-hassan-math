import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MathScene from '../components/3d/MathScene.jsx'

const grades = ['أولى إعدادي', 'تانية إعدادي', 'تالتة إعدادي', 'أولى ثانوي']

export default function Home() {
  return (
    <>
      <section className="hero">
        <MathScene />
        <div className="hero-content">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            منصة تعليمية للرياضيات
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            الرياضيات مش صعبة...
            <span>لما تفهمها صح</span>
          </motion.h1>
          <p>شرح بسيط، تدريب مستمر، وخطوة بخطوة لحد ما المسألة تبقى سهلة.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/register">احجز مكانك الآن <span>←</span></Link>
            <Link className="button button-glass" to="/about">اعرف عن المستر</Link>
          </div>
          <div className="hero-proof"><span>✦</span> من أول خطوة لحد ما تفهم الفكرة بنفسك</div>
        </div>
        <div className="hero-corner-note">افهم الفكرة<br />مش تحفظ الحل</div>
      </section>

      <section className="teacher-preview section-padding">
        <div className="teacher-placeholder">
          <div className="placeholder-orbit">π</div>
          <div className="placeholder-copy">
            <span>مساحة مخصصة للمستر</span>
            <strong>صورة أو فيديو كريم حسن</strong>
            <small>استبدل المساحة دي بصورة حقيقية للمستر وقت ما تكون جاهزة</small>
          </div>
        </div>
        <div className="teacher-intro">
          <span className="eyebrow">عن المدرس</span>
          <h2>خلّي الرياضيات مفهومة</h2>
          <p>المكان ده مخصص لتعريف الطلاب بالمستر وطريقة الشرح والخبرة. نقدر نضيف هنا نبذة حقيقية بعد ما توفر التفاصيل.</p>
          <Link className="text-link" to="/about">اعرف المزيد <span>←</span></Link>
        </div>
      </section>

      <section className="section-padding grades-section">
        <div className="section-heading">
          <span className="eyebrow">اختار مرحلتك</span>
          <h2>خطوتك الجاية تبدأ هنا</h2>
          <p>المحتوى والمواعيد هتتظبط حسب المرحلة الدراسية.</p>
        </div>
        <div className="grade-grid">
          {grades.map((grade, index) => (
            <Link className="grade-card" to="/schedule" key={grade}>
              <span className="grade-number">0{index + 1}</span>
              <span className="grade-symbol">{['+', '−', '×', '='][index]}</span>
              <h3>{grade}</h3>
              <p>شوف المواعيد المتاحة</p>
              <span className="card-arrow">↙</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="closing-cta section-padding">
        <div><span className="eyebrow">جاهز تبدأ؟</span><h2>احجز طلبك وابدأ خطوة جديدة</h2></div>
        <Link className="button button-gold" to="/register">طلب تسجيل <span>←</span></Link>
      </section>
    </>
  )
}
