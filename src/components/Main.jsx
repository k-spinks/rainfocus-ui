import EventInfo from './EventInfo'
import SetupGuide from './SetupGuide'
import AttendeeSetup from './AttendeeSetup'

export default function Main() {

  const eventInfo = {
    eventTitle: "RainFocus Summit",
    eventLocation: "Lehi, UT",
    eventDate: "December 15"
  }

  return (
    <main>
      <EventInfo title={eventInfo.eventTitle} location={eventInfo.eventLocation} date={eventInfo.eventDate}/>
      <SetupGuide />

      <hr className="section-divider" />

      <AttendeeSetup />
    </main>
  )
}
