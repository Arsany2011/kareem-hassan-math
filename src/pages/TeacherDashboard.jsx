import PageLayout from '../components/layout/PageLayout.jsx'

export default function TeacherDashboard() {
  return (
    <PageLayout eyebrow="لوحة الإدارة" title="أهلًا يا مستر كريم" description="واجهة أولية لتجهيز إدارة المنصة.">
      <div className="dashboard-grid">
        <article className="panel"><span className="eyebrow">الطلاب</span><h2>طلبات التسجيل</h2><p>هنا هتظهر الطلبات بعد ربط قاعدة البيانات.</p></article>
        <article className="panel"><span className="eyebrow">المواعيد</span><h2>إدارة الحصص</h2><p>هنا هتقدر تعدّل المواعيد بعد تنفيذ صلاحيات الإدارة.</p></article>
        <article className="panel"><span className="eyebrow">المحتوى</span><h2>إضافة شرح</h2><p>مساحة مستقبلية لإضافة فيديوهات ومواد تعليمية.</p></article>
      </div>
      <p className="form-note">لا تفتح هذه الصفحة للإنتاج قبل إضافة حماية مسارات ومصادقة من الخادم.</p>
    </PageLayout>
  )
}
