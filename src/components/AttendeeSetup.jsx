
import CreateCard from './ui/CreateCards'
import AttendeeCard from './ui/AttendeeCard'
import person from '../assets/person.svg'
import arrow from '../assets/arrow.svg'
import plus from '../assets/plus.svg'
import laptop from '../assets/laptop.svg'
import calendar from '../assets/calendar.svg'

export default function AttendeeSetup() {
  const cardInformation = {
    attendeeTitle: 'Attendee Registration',
    attendeeDesc: 'Start by creating a general registration workflow',
    attendeeTitle2: 'Attendee Portal',
    attendeeDesc2:
      "Manage the portal that attendees will see after they've registered for your event",
    createDesc: 'Add Registration Workflow',
    attendeeTitle3: "Attendee Calender",
    attendeeDesc3: "Manage what the attendee can see on their personal event calender",
  }

  return (
    <>
      <section className="attendee-section">
        <div className="attendee-header">
          <img src={person} alt="" />
          <h3>Attendee</h3>
        </div>

        <div className="attendee-step">
          <h4>Step 1:</h4>
          <p>Base settings.</p>
        </div>

        <div className="attendee-content">
          <div className="attendee-content-item">
            <span>General</span>
            <p>Define Attendee types &amp; attributes</p>
          </div>

          <div className="attendee-content-item">
            <span>Title</span>
            <p>
              Description that explains the value goes here.
              Description that explains the value goes here.
            </p>
          </div>

          <div className="attendee-content-item">
            <span>Title</span>
            <p>
              Description that explains the value goes here.
              Description that explains the value goes here.
            </p>
          </div>

          <div className="attendee-content-item">
            <span>Title</span>
            <p>
              Description that explains the value.
            </p>
          </div>
        </div>
      </section>

      <section className="attendee-step-section">
        <div className="attendee-step">
          <h4>Step 2:</h4>
          <p>Build registration workflows.</p>
        </div>

        <div className="attendee-card-grid">
          <AttendeeCard
            icon={arrow}
            title={cardInformation.attendeeTitle}
            description={cardInformation.attendeeDesc}
          />

          <AttendeeCard
            icon={arrow}
            title={cardInformation.attendeeTitle}
            description={cardInformation.attendeeDesc}
          />

          <AttendeeCard
            icon={arrow}
            title={cardInformation.attendeeTitle}
            description={cardInformation.attendeeDesc}
          />

          <CreateCard
            icon={plus}
            description={cardInformation.createDesc}
          />
        </div>
      </section>

      <section className="attendee-step-section">
        <div className="attendee-step">
          <h4>Step 3:</h4>
          <p>Design post-registration experience.</p>
        </div>

        <div className="attendee-card-grid">
          <AttendeeCard
            icon={laptop}
            title={cardInformation.attendeeTitle2}
            description={cardInformation.attendeeDesc2}
          />

          <AttendeeCard
            icon={calendar}
            title={cardInformation.attendeeTitle3}
            description={cardInformation.attendeeDesc3}
          />

          <AttendeeCard
            icon={calendar}
            title={cardInformation.attendeeTitle3}
            description={cardInformation.attendeeDesc3}
          />

        </div>
      </section>
    </>
  )
}
