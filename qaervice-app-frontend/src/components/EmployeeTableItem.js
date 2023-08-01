import './EmployeeTableItem.css';
import AvgRating from './AvgRating'
import DavePortrait from '../images/dave-portrait.jpg';

const EmployeeTableItem = ({employee='Employee name', picture=DavePortrait, jobs=12, rating=0, color='hsl(var(--success-500))'}) => {
  return (
    <section className='EmployeeTableItemWrapper'>
      <div className='EmployeeTableItemEmployee'>
        <div className='EmployeeTableItemPortraitWrapper'>
          <img src={picture}></img> 
        </div> 
        <h3>{employee}</h3>
      </div>
      <article className='EmployeeTableItemJobsCompleted'>
        <p>Jobs Completed</p>
        <h2>{jobs}</h2>
      </article>
      <article className='EmployeeTableItemAvgRating'>
        <p>Average Rating</p>
        <AvgRating rating={rating} color={color}/>
      </article>
      <button className='EmployeeTableItemButton'><p>Reset Password</p>Lock_Reset</button>
      <button className='EmployeeTableItemButton'><p>Remove Employee</p>Person_Remove</button>
    </section>
  );
}

export default EmployeeTableItem;
