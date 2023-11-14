import './Alert.css'

const Alert = ({type='null', message='test message'}) => 
{
  if (type === 'null')
  {
    return
  }
  return type === 'error' ? AlertError(message) : AlertSuccess(message)
}

const AlertError = (message) => {
  return (
    <article className='alertErrorWrapper'>
      <div className='alertIcon'>error</div>
      <p className= 'alertP'>error: {message}</p>
    </article>
  )
}

const AlertSuccess = (message) => {
  return (
    <article className='alertSuccessWrapper'>
      <div className='alertIcon'>check_circle</div>
      <p className='alertP'>{message}</p>
    </article>
  )
}
export default Alert
