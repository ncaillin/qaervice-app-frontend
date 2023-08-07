import './JobItem.css';

const JobItem = ({customer='CUSTOMER', employee='EMPLOYEE', date='DATE', time=0, rating='Not Recieved'}) => {
  return (
    <div className='JobItemWrapper'>
      <div className='JobItemItemFirst'>
        <p>{customer}</p>
      </div>
      <div className='JobItemItem'>
        <p>{employee}</p>
      </div>
      <div className='JobItemItem'>
        <p>{date}</p>
      </div>
      <div className='JobItemItem'>
        <p>{time} minutes</p>
      </div>
      <div className='JobItemItem'>
        <p>{rating}</p>
      </div>
      <div className='JobItemItem'>
        <button>
        Info
        <p>Detailed View</p>
        </button>
      </div>
    </div>
  );
}

export default JobItem
