
import { IoSearch } from 'react-icons/io5'

import rainfocusLogo from '../../assets/rainfocus_logo.svg'
import summitLogo from '../../assets/rainfocus_summit_logo.svg'
import Avatar from '../../assets/avatar.svg'
import defaultCircle from '../../assets/default_circle.svg'
import selectedCircle from '../../assets/selected_circle.svg'

export default function DesktopNavBar() {
  const submenuItems = [
    'Attendees',
    'Attendee Types',
    'Packages',
    'Reg Codes',
    'Discounts',
  ]

  return (
    <nav className="desktop-navbar" aria-label="Desktop navigation">
      {/* Branding rail */}
      <div className="desktop-brand-rail">
        <div className="desktop-brand-top">
          <img
            src={rainfocusLogo}
            alt="RainFocus"
            className="desktop-brand-logo"
          />

          <img
            src={summitLogo}
            alt="RainFocus Summit"
            className="desktop-event-logo"
          />
        </div>

        <img
          src={Avatar}
          alt="User profile"
          className="desktop-profile-avatar"
        />
      </div>

      {/* Navigation panel */}
      <div className="desktop-nav-panel">
        <div className="desktop-event-details">
          <h2>RainFocus Summit</h2>
          <p>Lehi, UT · December 15th</p>
        </div>

        <div className="desktop-nav-search">
          <IoSearch aria-hidden="true" />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search navigation"
          />
        </div>

        <ul className="desktop-nav-list">
          <li>
            <button type="button" className="desktop-nav-item">
              <img src={defaultCircle} alt=""/>
              <span>Guide</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="desktop-nav-item selected"
              aria-current="page"
            >
              <img src={selectedCircle} alt=""/>
              <span>Attendees</span>
            </button>

            <ul className="desktop-submenu">
              {submenuItems.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="desktop-submenu-item"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <button type="button" className="desktop-nav-item">
              <img src={defaultCircle} alt=""/>
              <span>Content</span>
            </button>
          </li>

          <li>
            <button type="button" className="desktop-nav-item">
              <img src={defaultCircle} alt=""/>
              <span>Exhibitors</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
