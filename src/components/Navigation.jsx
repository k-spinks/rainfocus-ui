import MobileHeader from '../components/MobileHeader'
import TabletNavBar from '../components/navigation/TabletNavBar'
import DesktopNavBar from './navigation/DesktopNavBar'


export default function Navigation() {
  return (
    <>
      <div className="mobile-navigation">
        <MobileHeader />
      </div>

      <div className="tablet-navigation">
        <TabletNavBar />
      </div>

      <div className="desktop-navigation">
        <DesktopNavBar />
      </div>
    </>
  )
}
