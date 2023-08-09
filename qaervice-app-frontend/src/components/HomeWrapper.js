import './HomeWrapper.css';
import Logo from '../images/logo.png'; 
import {useState} from 'react';

const HomeWrapper = ({children, pos=0, breadcrumb='Home'}) => {
  const [menuShown, setMenuShown] = useState(false);
  return ( 
    <div className="HomeWrapperWrapper">
      <nav className={menuShown ? "HomeWrapperMobileMenuWrapperShown" : "HomeWrapperMobileMenuWrapperHidden"}>
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/home'}
          >Home
          <p className='HomeWrapperButtonFlavorText'>Home</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/employees'}
          >Badge
          <p className='HomeWrapperButtonFlavorText'>Employees</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/jobs'}
          >Work
          <p className='HomeWrapperButtonFlavorText'>Jobs</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/customers'}
          >Person
          <p className='HomeWrapperButtonFlavorText'>Customers</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/settings'}
        >Settings
          <p className='HomeWrapperButtonFlavorText'>Settings</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/help'}
        >Help
          <p className='HomeWrapperButtonFlavorText'>Help</p>
        </button> 
        <button 
          className="HomeWrapperMobileMenuItem"
          onClick={() => window.location.href='/login'}
          >Logout
          <p className='HomeWrapperButtonFlavorText'>Logout</p>
        </button> 
      </nav>
      <nav className="HomeWrapperMenuWrapper">
        <button 
          className={pos === 0 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/home'}
        >Home
          <p className='HomeWrapperButtonFlavorText'>Home</p>
        </button>
        <button 
          className={pos === 1 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/employees'}
        >Badge
          <p className='HomeWrapperButtonFlavorText'>Employees</p>
        </button>
        <button 
          className={pos === 2 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/jobs'}
        >Work
          <p className='HomeWrapperButtonFlavorText'>Jobs</p>
        </button>
        <button 
          className={pos === 3 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/customers'}
        >Person
          <p className='HomeWrapperButtonFlavorText'>Customers</p>
        </button>
        <button 
          className={pos === 4 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/settings'}
        >Settings
          <p className='HomeWrapperButtonFlavorText'>Settings</p>
        </button>
        <button 
          className={pos === 5 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/help'}
        >Help
          <p className='HomeWrapperButtonFlavorText'>Help</p>
        </button>
        <button 
          className='HomeWrapperMenuItem'
          onClick={() => window.location.href = '/login'}
        >Logout
          <p className='HomeWrapperButtonFlavorText'>Logout</p>
        </button>
    </nav>
      <section className="HomeWrapperMain">
        <header className="HomeWrapperHeader">
          <img src={Logo}></img>
          <h3>{'>'} {breadcrumb}</h3>
          <button className="HomeWrapperMenuButton" onClick={() => setMenuShown(!menuShown)}>{menuShown ? 'Close' : 'Menu'}</button>
        </header>
          {children}
      </section>
    </div>
  );
};


export default HomeWrapper;
