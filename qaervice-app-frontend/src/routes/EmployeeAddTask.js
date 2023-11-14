import './EmployeeAddTask.css'
import { useEffect, useState } from 'react'
import axios from 'axios' 
import Alert from '../components/Alert'
import { BACKEND_URL } from '../utils/env'



const EmployeeAddTask = () => 
{
  const [jobId, setJobId] = useState(0)
  const [jobName, setJobName] = useState('null')
  const [custName, setCustName] = useState('null')
  const [type, setType] = useState('null')
  const [message, setMessage] = useState('') 
  useEffect(() => 
  {
      document.title = 'qaervice > Add task'
      axios.get(`${BACKEND_URL}/job/id`, {withCredentials: true})
        .then(response => 
        {
          if (response.data.jobId === 0)
          {
            window.location.href = '/employeeApp/home'
          }
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
      <h1>Add Task</h1>
      <h3>{jobName} | {custName}</h3>
      <form onSubmit={e => handleSubmit(e, jobId)}>
        <input type="text" placeholder="description" capture="camera"></input>
        <input type="file" accept="image"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

const handleSubmit = async (e, jobId) => {
  e.preventDefault()
  const name = e.target[0].value
  if (!name)
  {
    return // error handling here
  }
  const photo = e.target[1].files[0]
  let photoId
  if (photo)
  {
    const reader = new FileReader()
    reader.readAsArrayBuffer(photo)
    reader.onload = () => 
    {
      axios.post(`${BACKEND_URL}/photo/new`,reader.result, {withCredentials: true, headers: {"Content-Type": "application/octet-stream"}})
      .then(response => 
      {
        photoId = response.data.id
        console.log(photoId)
        axios.post(`${BACKEND_URL}/task/create`, {taskName: name, jobId, photoId}, {withCredentials: true})
          .then(response => 
            {
              if (response.status === 201)
              {
                window.location.href = '/employeeApp/home'
              }
            }).catch(err => 
            {
              console.log(err)
            }) 
      }).catch(err => 
      {
        console.log(err)
      })
    }
  }
  else 
  {
    axios.post(`${BACKEND_URL}/task/create`, {taskName: name, jobId, photoId}, {withCredentials: true})
      .then(response => 
      {
        console.log(response)
        if (response.status === 201)
        {
          window.location.href = '/employeeApp/home'
        }
      }).catch(err => 
      {
        console.log(err)
      }) 
 
  }
}

export default EmployeeAddTask
