
import { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  IoClose,
  IoSearch,
  IoBookOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoStorefrontOutline,
} from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

import summitLogo from '../../assets/rainfocus_summit_logo.svg'
import Avatar from '../../assets/avatar.svg'

export default function MobileNavBar() {
  const [navOpen, setNavOpen] = useState(false)
  const [attendeesOpen, setAttendeesOpen] = useState(false)

  const openButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  const submenuItems = [
    'Attendees',
    'Attendee Types',
    'Packages',
    'Reg Codes',
    'Discounts',
  ]

  function openNavigation() {
    setNavOpen(true)
  }

  function closeNavigation() {
    setNavOpen(false)
    openButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!navOpen) return

    closeButtonRef.current?.focus()

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setNavOpen(false)
        openButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [navOpen])

  return (
    <nav className="mobile-navbar" aria-label="Main navigation">
      {/* Hamburger button */}
      <button
        ref={openButtonRef}
        type="button"
        className="menu-btn"
        onClick={openNavigation}
        aria-label="Open navigation"
        aria-expanded={navOpen}
        aria-controls="mobile-navigation-drawer"
      >
        <RxHamburgerMenu aria-hidden="true" />
      </button>

      {/* Drawer overlay */}
      <div className={`drawer-overlay ${navOpen ? 'open' : ''}`}>
        <div
          className="drawer-backdrop"
          onClick={closeNavigation}
          aria-hidden="true"
        />

        <div
          id="mobile-navigation-drawer"
          className="drawer"
          aria-hidden={!navOpen}
          inert={!navOpen}
        >
          {/* Event header */}
          <div className="drawer-header">
            <div className="drawer-event-info">
              <img
                src={summitLogo}
                alt=""
                className="event-avatar"
              />

              <div className="event-details">
                <h2>RainFocus Summit</h2>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              className="menu-btn"
              onClick={closeNavigation}
              aria-label="Close navigation"
            >
              <IoClose aria-hidden="true" />
            </button>
          </div>

          {/* Search bar */}
          <div className="nav-search">
            <IoSearch aria-hidden="true" />

            <input
              type="search"
              aria-label="Search navigation"
              placeholder="Search..."
            />
          </div>

          {/* Navigation items */}
          <ul className="nav-list">
            <li>
              <button type="button" className="nav-item">
                <IoBookOutline aria-hidden="true" />
                <span>Guide</span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="submenu-btn selected"
                onClick={() => setAttendeesOpen(!attendeesOpen)}
                aria-expanded={attendeesOpen}
                aria-controls="mobile-attendees-submenu"
              >
                <IoPeopleOutline aria-hidden="true" />
                <span>Attendees</span>

                <IoIosArrowDown
                  className={`submenu-arrow ${
                    attendeesOpen ? 'rotated' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <ul
                id="mobile-attendees-submenu"
                className={`submenu ${attendeesOpen ? 'open' : ''}`}
                hidden={!attendeesOpen}
              >
                {submenuItems.map((item) => (
                  <li key={item}>
                    <button type="button" className="nav-item">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <button type="button" className="nav-item">
                <IoDocumentTextOutline aria-hidden="true" />
                <span>Content</span>
              </button>
            </li>

            <li>
              <button type="button" className="nav-item">
                <IoStorefrontOutline aria-hidden="true" />
                <span>Exhibitors</span>
              </button>
            </li>
          </ul>

          {/* Profile footer */}
          <div className="drawer-footer">
            <img
              src={Avatar}
              alt="User profile picture"
              className="profile-avatar"
            />
            <span>Your profile</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
