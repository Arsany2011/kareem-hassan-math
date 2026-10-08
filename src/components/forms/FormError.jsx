export default function FormError({ message }) {
  if (!message) return null
  return <p className="form-error" role="alert">{message}</p>
}
