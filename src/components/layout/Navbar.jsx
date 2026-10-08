import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [teacherTap, setTeacherTap] = useState(0)
  const navigate = useNavigate()

  function handleTeacherName() {
    const next = teacherTap + 1
    setTeacherTap(next)
    if (next >= 3) {
      setTeacherTap(0)
      navigate('/teacher-login')
    }
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="الصفحة الرئيسية">
        <span className="brand-mark">π</span>
        <span>
          <strong onClick={handleTeacherName} title="اضغط على الاسم 3 مرات لدخول المستر">
            كريم حسن
          </strong>
          <small>مدرس رياضيات</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="القائمة الرئيسية">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">عن المدرس</Link>
        <Link to="/schedule">المواعيد</Link>
      </nav>
      <Link className="button button-outline header-cta" to="/register">احجز مكانك</Link>
    </header>
  )
}
