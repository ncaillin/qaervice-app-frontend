import './Customers.css';
import HomeWrapper from '../components/HomeWrapper';

const Customers = () => {
  return (
    <HomeWrapper pos={3} breadcrumb={'Customers'}>
      <div className='CustomerWrapper'>
        <nav className='CustomerFilterSort'>
          <button className='CustomerNewButton'><p>Add_Circle</p>New Customer</button>
          <div className='CustomerSort'>
            <p className='CustomerFilterSortHeading'>Sort By:</p>
            <div className='CustomerFilterSortSelectWrapper'>
              <div className='CustomerFilterSortBody'>
                <p>Sort:</p>
                <select>
                  <option value='DATE_DESC'>Date descending</option>
                </select>
              </div>
            </div>
          
          </div>
          <div className='CustomerFilter'>
            <p className='CustomerFilterSortHeading'>Filter By:</p>
            <div className='CustomerFilterSortBody'>
              <p>Date:</p>
              <select>
                <option value='LAST_MONTH'>Last Month</option>
              </select>
            </div>
          </div>
        </nav>
        <Table headings={['Name', 'Jobs Done', 'Average Rating', 'Last Serviced']}>
          <TableItem>
            <p>John Smith</p>
            <p>12</p>
            <p>9.8</p>
            <p>11/08/23</p>
          </TableItem> 
          <TableItem>
            <p>Amy Taylor</p>
            <p>15</p>
            <p>9.6</p>
            <p>11/08/23</p>
          </TableItem> 
          <TableItem>
            <p>Sian Lambert</p>
            <p>19</p>
            <p>7.5</p>
            <p>10/08/23</p>
          </TableItem> 
          <TableItem> 
            <p>Vivian Medina</p>
            <p>22</p>
            <p>9.6</p>
            <p>09/08/23</p>
          </TableItem> 
          <TableItem>
            <p>Ashton Dale</p>
            <p>2</p>
            <p>4.5</p>
            <p>03/08/23</p>
          </TableItem> 
          <TableItem>
            <p>Emilio Horne</p>
            <p>1</p>
            <p>2.1</p>
            <p>25/07/23</p>
          </TableItem> 
          <TableItem>
            <p>Willow Hayden</p>
            <p>12</p>
            <p>9.1</p>
            <p>23/07/23</p>
          </TableItem> 
          <TableItem>
            <p>Ned Duran</p>
            <p>32</p>
            <p>8.7</p>
            <p>23/07/23</p>
          </TableItem> 
          <TableItem>
            <p>Marcus Anderson</p>
            <p>34</p>
            <p>9.2</p>
            <p>21/07/23</p>
          </TableItem> 
          <TableItem>
            <p>Olivia Tanner</p>
            <p>1</p>
            <p>2.1</p>
            <p>15/07/23</p>
          </TableItem> 
        </Table>
      </div>
    </HomeWrapper>
  );
};

export default Customers;


  // table to display 10 items at a time

const Table = ({children, offset=0, max=100, headings=[1,2,3,4,5]}) => {
  const MAX_ITEMS = 10
  
  return (
    <section className='TableWrapper'>
      <nav className='TableNav'>
        <button className='TableNavButtonActive'>Chevron_Left</button>
        <p>Displaying {offset + 1} to {offset + MAX_ITEMS} of {max}</p>
        <button className='TableNavButtonActive'>Chevron_Right</button>
      </nav>
        <div className='BigTableBodyWrapper'>
        <section className='TableBodyWrapper'>
          <article className='TableHeading'> 
            {headings.map((item, index) => {
              return (
                <p className='TableHeadingItem' key={index}>{item}</p>
              )
            })}
          </article>
          {children}  
        </section>
        </div>
    </section>
  ) 
}

const TableItem = ({children=[0,1,2]}) => {
  return (
    <article className='TableItemWrapper'>
      {children.map((item, index) => {
        return (
          <div key={index} className={index != 0 ? 'TableItemItem' : 'TableItemItemFirst'}>
            {item}
          </div>
        )
      })}
    </article>
  )
}
