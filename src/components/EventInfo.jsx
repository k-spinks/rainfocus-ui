import summitLogo from '../assets/rainfocus_summit_logo.svg'

export default function EventInfo({ title, location, date }) {
  return (
    <section className="event-info">
      <div className="event-info-main">
        <img
          src={summitLogo}
          alt="Summit event logo"
          className="event-info-logo"
        />

        <div className="event-info-details">
          <h1>{title}</h1>

          <div className="event-info-meta">
            <span className="event-location">{location}</span>
            <span className="event-date">{date}</span>
          </div>
        </div>
      </div>

      <button type="button" className="edit-btn">
        Edit Event
      </button>
    </section>
  )
}
