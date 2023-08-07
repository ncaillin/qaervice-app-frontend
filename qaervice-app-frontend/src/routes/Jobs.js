import './Jobs.css';
import HomeWrapper from '../components/HomeWrapper';
import JobItem from '../components/JobItem';

const Jobs = () => {
  return (
    <HomeWrapper pos={2} breadcrumb={'Jobs'}>
      <section className='JobsWrapper'>
        <nav className='JobsFilterSort'>
          <section className='JobsSort'>
            <p>Sort by:</p>
            <select>
              <option value='Date_DESC'>Date (new -{'>'} old)</option>
              <option value='Date_ASC'>Date (old -{'>'} new)</option>
              <option value='Rating_DESC'>Rating (high -{'>'} low)</option>
              <option value='Rating_ASC'>Rating (low -{'>'} high)</option>
            </select>
          </section>
          <section className='JobsFilter'>
            <p>Filter by:</p>
            <div className='JobsFilterItem'>
              <p>Date:</p>
              <select>
                <option value='Date_Any'>any</option>
              </select>
            </div>
            <div className='JobsFilterItem'>
              <p>Employee:</p>
              <select>
                <option value='Employee_Any'>any</option>
              </select>
            </div>
            <div className='JobsFilterItem'>
              <p>Customer:</p>
              <select>
                <option value='Customer_Any'>any</option>
              </select>
            </div>
            <div className='JobsFilterItem'>
              <p>Min Rating:</p>
              <select>
                <option value='MinRating_Any'>any</option>
              </select>
            </div>
            <div className='JobsFilterItem'>
              <p>Max Rating:</p>
              <select>
                <option value='MaxRating_Any'>any</option>
              </select>
            </div>
          </section>
        </nav>
        <section className='JobsList'>
          <nav className='JobsNav'>
            <button className='JobsButtonInactive'>Chevron_Left</button>
            <p>Showing 1-10 of 246</p>
            <button className='JobsButtonActive'>Chevron_Right</button>
          </nav>
          <div>
          <section className='JobsListTable'>
            <section className='JobsListHeading'>
              <p>Customer</p>
              <p>Employee</p>
              <p>Date</p>
              <p>Time spent</p>
              <p>Rating</p>
            </section>
            <JobItem customer={'Jane Smith'} employee={'Dave Schuster'} date={'07/08/23 15:42'} time={122} />
            <JobItem customer={'Jack Brown'} employee={'Elaine Marble'} date={'07/08/23 14:28'} time={125} />
            <JobItem customer={'Sally Jane'} employee={'Jane March'} date={'07/08/23 13:30'} time={128} />
            <JobItem customer={'Barry Blue'} employee={'Dave Schuster'} date={'07/08/23 12:50'} time={119} rating={10} />
            <JobItem customer={'Michael North'} employee={'John Wood'} date={'06/08/23 16:40'} time={117} rating={10} />
            <JobItem customer={'Jenny Woods'} employee={'Mark Smith'} date={'06/08/23 16:30'} time={52} rating={2} />
            <JobItem customer={'Gerome White'} employee={'Dave Schuster'} date={'06/08/23 12:50'} time={101} rating={7.2} />
            <JobItem customer={'Mitch Michaels'} employee={'Mark Smith'} date={'06/08/23 11:30'} time={54} />
            <JobItem customer={'Jerry Dove'} employee={'Jane March'} date={'05/08/23 16:59'} time={122} rating={9} />
            <JobItem customer={'Dave Trellis'} employee={'Elaine Marble'} date={'05/08/23 15:32'} time={129}/>
          </section>
          </div>
        </section>
      </section>
    </HomeWrapper>
  );
};

export default Jobs;
