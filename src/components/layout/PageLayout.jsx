export default function PageLayout({ eyebrow, title, description, children }) {
  return (
    <section className="page-wrap">
      <div className="section-heading">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  )
}
