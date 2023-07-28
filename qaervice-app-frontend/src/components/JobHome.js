import './JobHome.css';
import DavePortrait from '../images/dave-portrait.jpg';
import {useEffect, useState} from 'react';

const JobHome = ({customer='HOUSEHOLD', time=0, tasks=0, employee='Employee Name', picture=DavePortrait}) => {
  const [timeElapsed, setTimeElapsed] = useState(time);
  const [timeString, setTimeString] = useState('00:00:00');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []) 

  return (
    <summary className='JobHomeWrapper'>
      <div className='JobName'>
        <p>Nugent Household</p>
        <div className='JobNameTasks'>
          <h2>{tasks}</h2>
          <p>tasks</p>
        </div>
      </div>
      <div className='JobTime'>
        <p>time elapsed</p>
        <h3>{`${Math.floor(timeElapsed * 0.00027777).toLocaleString('en-Us', {minimumIntegerDigits: 2})}:${Math.floor(timeElapsed * 0.01666).toLocaleString('en-Us', {minimumIntegerDigits: 2})}:${(timeElapsed % 60).toLocaleString('en-Us', {minimumIntegerDigits: 2})}`}</h3>
      </div>
      <div className='JobEmployee'>
        <h3>{employee}</h3>
        <div className='JobPortraitWrapper'>
          <img src={picture}></img> 
        </div> 
      </div>
    </summary>
  );
};
export default JobHome
