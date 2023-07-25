import './HomeWrapper.css';
import Logo from '../images/logo.png'; 

const HomeWrapper = ({children, pos=0}) => {
  const breadcrumb = ['Home', 'Employees', 'Jobs', 'Settings'];
  return ( 
    <div className="HomeWrapperWrapper">
      <nav className="HomeWrapperMenuWrapper">
        <article 
          className={pos === 0 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/home'}
        >Home</article>
        <article 
          className={pos === 1 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/employees'}
        >Employees</article>
        <article 
          className={pos === 2 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/jobs'}
        >Jobs</article>
        <article 
          className={pos === 3 ? 'HomeWrapperMenuItem HomeWrapperMenuItemSelected' : 'HomeWrapperMenuItem'}
          onClick={() => window.location.href = '/settings'}
        >Settings</article>
      </nav>
      <section className="HomeWrapperMain">
        <header className="HomeWrapperHeader">
          <img src={Logo}></img>
          <h3>{'>'} {breadcrumb[pos]}</h3>
          <button className="HomeWrapperMenuButton">Menu</button>
        </header>
          {children}
      </section>
    </div>
  );
};


export default HomeWrapper;
