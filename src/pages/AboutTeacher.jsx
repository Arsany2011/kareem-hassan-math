import PageLayout from '../components/layout/PageLayout.jsx'

export default function AboutTeacher() {
  return (
    <PageLayout eyebrow="عن المدرس" title="كريم حسن" description="مساحة لتعريف الطلاب بالمستر وطريقة الشرح.">
      <div className="about-layout">
        <div className="teacher-placeholder teacher-placeholder-large">
          <div className="placeholder-orbit">π</div>
          <div className="placeholder-copy">
            <span>مكان صورة أو فيديو المستر</span>
            <strong>كريم حسن</strong>
            <small>أضف الصورة إلى public/images/teacher-placeholder.webp لتجهيز مكانها في التصميم.</small>
          </div>
        </div>
        <div className="panel">
          <h2>طريقة الشرح</h2>
          <p>أضف هنا نبذة حقيقية عن خبرة المستر وطريقته في تبسيط الرياضيات ومتابعة الطلاب.</p>
          <ul className="check-list">
            <li>شرح المفاهيم خطوة بخطوة</li>
            <li>تدريب على أنماط الأسئلة</li>
            <li>متابعة مستوى الطالب</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
