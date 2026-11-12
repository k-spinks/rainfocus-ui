export default function AttendeeCard({ icon, title, description }) {
  return (
    <div className="attendee-card">
      <div className="attendee-card-header">
        <img src={icon} alt="" />
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </div>
  )
}
