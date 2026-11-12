
import { useEffect, useRef, useState } from 'react'
import {
  IoBookOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoStorefrontOutline,
  IoSearch,
  IoClose,
} from 'react-icons/io5'

import rainfocusLogo from '../../assets/rainfocus_logo.svg'
import avatar from '../../assets/avatar.svg'
import defaultCircle from '../../assets/default_circle.svg'
import selectedCircle from '../../assets/selected_circle.svg'


export default function TabletNavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIcon, setActiveIcon] = useState(null)

  const navRef = useRef(null)
  const triggerRef = useRef(null)

  const navItems = [
    { label: 'Guide', icon: IoBookOutline },
    { label: 'Attendees', icon: IoPeopleOutline },
    { label: 'Content', icon: IoDocumentTextOutline },
    { label: 'Exhibitors', icon: IoStorefrontOutline },
  ]

  const submenuItems = [
    'Attendees',
    'Attendee Types',
    'Packages',
    'Reg Codes',
    'Discounts',
  ]

  function closeNavigation() {
    triggerRef.current?.focus()
    setIsOpen(false)
    setActiveIcon(null)
  }

  function handleIconClick(label, event) {
    if (isOpen && activeIcon === label) {
      closeNavigation()
    } else {
      triggerRef.current = event.currentTarget
      setIsOpen(true)
      setActiveIcon(label)
    }
  }

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        if (navRef.current.contains(document.activeElement)) {
          triggerRef.current?.focus()
        }

        setIsOpen(false)
        setActiveIcon(null)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeNavigation()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <nav
      ref={navRef}
      className="tablet-navbar"
      aria-label="Tablet navigation"
    >
      {/* Icon rail */}
      <div className="tablet-navbar-rail">
        <div className="tablet-navbar-top">
          <img
            src={rainfocusLogo}
            alt="RainFocus"
            className="tablet-navbar-logo"
          />

          <div className="tablet-navbar-links">
            {navItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`tablet-nav-item ${
                  label === 'Attendees' ? 'selected' : ''
                }`}
                aria-label={label}
                title={label}
                aria-expanded={isOpen && activeIcon === label}
                aria-controls="tablet-nav-panel"
                onClick={(event) => handleIconClick(label, event)}
              >
                <Icon aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* Profile avatar */}
        <div className="tablet-navbar-profile">
          <img src={avatar} alt="User profile" />
        </div>
      </div>

      {/* Expandable navigation panel */}
      <div
        id="tablet-nav-panel"
        className={`tablet-nav-panel ${isOpen ? 'open' : ''}`}
        inert={!isOpen}
      >
        {/* Panel header */}
        <div className="tablet-panel-header">
          <div className="tablet-event-details">
            <h2>RainFocus Summit</h2>
            <p>Lehi, UT · December 15th</p>
          </div>

          <button
            type="button"
            className="tablet-panel-close"
            aria-label="Close navigation"
            onClick={closeNavigation}
          >
            <IoClose aria-hidden="true" />
          </button>
        </div>

        {/* Search bar */}
        <div className="tablet-nav-search">
          <IoSearch aria-hidden="true" />

          <input
            type="search"
            placeholder="Search..."
            aria-label="Search navigation"
          />
        </div>

        {/* Navigation items */}
        <ul className="tablet-panel-nav-list">
          {navItems.map(({ label }) => (
            <li key={label}>
              <button
                type="button"
                className={`tablet-panel-nav-item ${
                  label === 'Attendees' ? 'selected' : ''
                }`}
                aria-current={label === 'Attendees' ? 'page' : undefined}
              >
                <img
                  src={
                    label === 'Attendees'
                      ? selectedCircle
                      : defaultCircle
                  }
                  alt=""
                />

                <span>{label}</span>
              </button>

              {/* Attendees submenu */}
              {label === 'Attendees' && (
                <ul className="tablet-panel-submenu">
                  {submenuItems.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="tablet-panel-submenu-item"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
