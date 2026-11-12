import Avatar from '../assets/avatar.svg'
import rainfocusLogo from '../assets/rainfocus_logo.svg'
import MobileNavBar from '../components/navigation/MobileNavBar'

export default function MobileHeader() {
  return (
    <header className="mobile-header">
      <MobileNavBar />
      <img
        src={rainfocusLogo}
        alt="RainFocus Logo"
        className="mobile-header-logo"
      />
      <img
        src={Avatar}
        alt="User Avatar"
        className="mobile-header-avatar"
      />
    </header>
  )
}