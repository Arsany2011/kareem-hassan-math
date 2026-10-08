import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-symbol">404</span>
      <h1>المسألة دي مش موجودة!</h1>
      <p>الصفحة اللي بتدور عليها مش موجودة أو اتنقلت.</p>
      <Link className="button button-gold" to="/">ارجع للرئيسية</Link>
    </section>
  )
}
