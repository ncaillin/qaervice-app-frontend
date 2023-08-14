import './Jobs.css';
import HomeWrapper from '../components/HomeWrapper';
import { Table, TableItem } from '../components/Table';

const Jobs = () => {
  return (
    <HomeWrapper pos={2} breadcrumb={'Jobs'}>
      <section className='JobsWrapper'>
        <nav className='JobsFilterSort'>
          <section className='JobsSort'>
            <p>Sort:</p>
            <div className='JobsSelectWrapper'>
            <div className='JobsFilterItem'>
            <p>Sort by:</p>
            <select>
              <option value='Date_DESC'>Date (new -{'>'} old)</option>
              <option value='Date_ASC'>Date (old -{'>'} new)</option>
              <option value='Rating_DESC'>Rating (high -{'>'} low)</option>
              <option value='Rating_ASC'>Rating (low -{'>'} high)</option>
            </select>
            </div>
            </div>
          </section>
          <section className='JobsFilter'>
            <p>Filter:</p>
            <div className='JobsSelectWrapper'>
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
            </div>
          </section>
        </nav>
          <Table headings={['Customer', 'Employee', 'Date', 'Time Spent', 'Rating', '']}>
          <TableItem>
            <p>Jane Smith</p>
            <p>David Schuster</p>
            <p>07/08/23 15:42</p>
            <p>122</p>
            <p>Not Recieved</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Jack Brown</p>
            <p>Elaine Marble</p>
            <p>07/08/23 14:28</p>
            <p>125</p>
            <p>Not Recieved</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Sally Jane</p>
            <p>Jane March</p>
            <p>07/08/23 13:30</p>
            <p>128</p>
            <p>Not Recieved</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Barry Blue</p>
            <p>Dave Schuster</p>
            <p>07/08/23 12:50</p>
            <p>119</p>
            <p>10</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Michael North</p>
            <p>John Wood</p>
            <p>06/08/23 16:40</p>
            <p>117</p>
            <p>10</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Jenny Woods</p>
            <p>Mark Smith</p>
            <p>06/08/23 16:30</p>
            <p>52</p>
            <p>2</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Gerome White</p>
            <p>Dave Schuster</p>
            <p>06/08/23 12:50</p>
            <p>101</p>
            <p>7.2</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Mitch Michaels</p>
            <p>Mark Smith</p>
            <p>06/08/23 11:30</p>
            <p>54</p>
            <p>Not Recieved</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Jerry Dove</p>
            <p>Jane March</p>
            <p>05/08/23 16:59</p>
            <p>122</p>
            <p>9</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          <TableItem>
            <p>Dave Trellis</p>
            <p>Elaine Marble</p>
            <p>05/08/23 15:32</p>
            <p>129</p>
            <p>Not Recieved</p>
            <button className='JobsDetailButton'><p>Info</p>Detailed View</button>
          </TableItem>
          </Table>
      </section>
    </HomeWrapper>
  );
};

export default Jobs;
