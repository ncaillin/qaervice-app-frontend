import './Home.css';
import JobHome from '../components/JobHome';
import Logo from '../images/logo.png';
import HomeWrapper from '../components/HomeWrapper'

const Home = () => {
  return (
        <HomeWrapper pos={0}>
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
              <JobHome />
              <JobHome />
              <JobHome />
            </article> 
          </main>
    </HomeWrapper>
  );
};


export default Home;
