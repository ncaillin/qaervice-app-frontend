import './Home.css';
import JobHome from '../components/JobHome';
import Logo from '../images/logo.png';
import HomeWrapper from '../components/HomeWrapper'

import DavePortrait from '../images/dave-portrait.jpg';
import ElainePortrait from '../images/elaine-portrait.jpeg';
import JanePortrait from '../images/jane-portrait.jpeg';

const Home = () => {
  return (
        <HomeWrapper pos={0} breadcrumb={'Home'}>
          <main className="HomeGrid">
            <article className="HomeNumEmployees">
              <h3>Number of Employees:</h3>
              <h2>5</h2>
            </article> 
            <article className="HomeNumJobs">
              <h3>Number of Jobs this week:</h3>
              <h2>27</h2>
            </article> 
            <article className="HomeRating">
              <h3>Average rating:</h3>
              <h2>9.2</h2>
            </article> 
            <article className="HomeJobs">
              <h3>Jobs in progress:</h3>
              <JobHome customer='Jane Smith' time={1023} tasks={1} employee='Dave Schuster' picture={DavePortrait}/>
              <JobHome customer='Gerome White' time={2023} tasks={3} employee='Elaine Marble' picture={ElainePortrait}/>
              <JobHome customer='Dave Trellis' time={2583} tasks={6} employee='Jane Smith' picture={JanePortrait}/>
            </article> 
          </main>
    </HomeWrapper>
  );
};


export default Home;
