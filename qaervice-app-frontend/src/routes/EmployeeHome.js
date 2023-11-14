import './EmployeeHome.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Alert from '../components/Alert' 
import { BACKEND_URL } from '../utils/env'




const EmployeeHome = () => 
{
  const [type, setType] = useState('null')
  const [message, setMessage] = useState('null')
  const [jobId, setJobId] = useState(0)
  const [jobName, setJobName] = useState('null')
  const [custName, setCustName] = useState('null')
  useEffect(() => 
    {
      axios.get(`${BACKEND_URL}/job/id`, {withCredentials: true})
        .then(response => 
        {
          setJobId(response.data.jobId)
          setJobName(response.data.jobName)
          setCustName(response.data.customerName)
        }).catch(err => 
        {
          console.log(err)
          window.location.href = '/login'
        })
    }, [])
  return (
    <div>
      <Alert type={type} message={message}/>
      {
        jobId === 0
          ? <NoJobActive setType={setType} setMessage={setMessage}/> 
          : <JobActive jobName={jobName} jobId={jobId} custName={custName}/>
      }      
    </div>
  )
}

const finishJob = (e, jobId) => {
  e.preventDefault()
  axios(
  {
    method: 'PUT',
    url: `${BACKEND_URL}/job/finish`,
    withCredentials: true,
    data: {
      id: jobId
    }
  }).then(response => 
  {
    window.location.href = '/employeeApp/home'
  }).catch(err => 
  {
    console.log(err)
  })
}

const JobActive = ({ jobName, jobId,  custName }) => {
  const [tasks, setTasks] = useState([])
  useEffect(() => 
    {
      axios(
      {
        method: 'get',
        url: `${BACKEND_URL}/job/tasks`,
        withCredentials: true,
        params: {
          jobId
        }
      })
        .then(response => 
        {
          setTasks(response.data)
        }).catch(err => 
        {
          console.log(err)
        })
    }, [])
  return (
    <div>
      <h1>{jobName}</h1>
      <h3>For {custName}</h3>
      <button onClick={() => window.location.href = '/employeeApp/addTask'}>ADD TASK</button>
      <ul>
        {
        tasks.map(task => 
          {
            return <TaskDisplay jobName={task.name} photoId={task.photoId} key={task.id} />
          })
        }
      </ul>
      <button onClick={e => {finishJob(e, jobId)}}>FINISH JOB</button>
    </div>
  )
}

const TaskDisplay = ({ jobName, photoId }) => {
  const [photo, setPhoto] = useState(null)
  useEffect(() => 
  {
    if (photoId)
    {
      axios(
      {
        method: 'get',
        url: `${BACKEND_URL}/photo`,
        withCredentials: true,
        params: {
          id: photoId
        }
      }).then(response => 
      {
        setPhoto(response.data.data)
      }).catch(err => 
      {
        console.log(err)
      })
    }
  }, [])
  return (
    <li>
      <p>{jobName}</p>
      {
      photo
        ? <img src={photo} width="150" height="150"></img>
        : null
      }
    </li>
  )
}


const NoJobActive = ({ setType, setMessage }) => {
  const [customers, setCustomers] = useState([{id: 'null', name: 'loading...'}])
  useEffect(() => 
  {
    axios.get(`${BACKEND_URL}/customer`, {withCredentials: true})
      .then(response => 
      {
        setCustomers(response.data.customers)
      }).catch(err => 
      {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h1>Start a job</h1>
      <form onSubmit = {e => handleJobSubmit(e, setType, setMessage)}>
        <select>
          <option value='null'>Select Customer</option>
          {customers.map(cust => 
            {
              return <option value={cust.id} key={cust.id}>{cust.name}</option> 
            })}
        </select>
        <input type="text" placeholder="Job name"></input>
        <button>Start Job</button>
      </form>
    </div>
  )
}
const handleJobSubmit = (e, setType, setMessage) => 
{
  e.preventDefault()
  const custId = e.target[0].value
  const jobName = e.target[1].value
  console.log(custId)
  console.log(jobName)
  if (custId === 'null' || !custId)
  {
    setType('error')
    setMessage('Must select customer')
    setTimeout(() => 
    {
      setType('null')
    }, 1000)
    return
  }
  if (!jobName)
  {
    setType('error')
    setMessage('Must specify job name')
    setTimeout(() => 
    {
      setType('null')
    }, 1000)
    return
  }
  
  axios.post(`${BACKEND_URL}/job/create`, {customerId: custId, jobName}, {withCredentials: true})
    .then(res => 
    {
      window.location.reload()
    }).catch(err => 
    {
      console.log(err)
    })
}


export default EmployeeHome
