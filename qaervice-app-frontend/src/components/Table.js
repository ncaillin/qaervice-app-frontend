import './Table.css';

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
          <div key={index} className={index !== 0 ? 'TableItemItem' : 'TableItemItemFirst'}>
            {item}
          </div>
        )
      })}
    </article>
  )
}

export { Table, TableItem }
