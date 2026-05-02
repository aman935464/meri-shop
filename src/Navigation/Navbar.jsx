import './Navigation.css';
import Logo from './Logo/Logo.jsx';
import Searchbar from './Searchbar/Searchbar.jsx'
import Rightnav from './Rightnav.jsx';
import MobileNavigation from './MobileNavigation.jsx';

function Navbar() {
  return (
    <>
      <nav className='navbar' aria-label='Main navigation' >
          <div className="left">
            <Logo />
          </div>
          <div className="center">
            <Searchbar />
          </div>
          <div className="right">
            <Rightnav/>
          </div>
        </nav>
    </>
  )
}

export default Navbar
