import PageLayout from '../components/layout/PageLayout.jsx'
import StudentRegistrationForm from '../components/forms/StudentRegistrationForm.jsx'

export default function Register() {
  return (
    <PageLayout eyebrow="طلب تسجيل" title="احجز مكانك" description="اكتب بيانات الطالب وولي الأمر وحدد المرحلة والموعد المناسب.">
      <StudentRegistrationForm />
    </PageLayout>
  )
}
