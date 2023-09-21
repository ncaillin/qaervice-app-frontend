# qaervice-app-frontend

The frontend for the qaervice app

All coded using react js framework.

All backend requests done with axios

Authentication through session cookies

## Styling

### Colors

#### all colors done with 5 colors each with 9 css variables for lightness

color   | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
---     | --- | --- | --- | --- | --- | --- | --- | --- | ---
Brand   |hsl(var(--brand-100))|hsl(var(--brand-200))|hsl(var(--brand-300))|hsl(var(--brand-400))|hsl(var(--brand-500))|hsl(var(--brand-600))|hsl(var(--brand-700))|hsl(var(--brand-800))|hsl(var(--brand-900))|
Success |hsl(var(--success-100))|hsl(var(--success-200))|hsl(var(--success-300))|hsl(var(--success-400))|hsl(var(--success-500))|hsl(var(--success-600))|hsl(var(--success-700))|hsl(var(--success-800))|hsl(var(--success-900))|
Warn    |hsl(var(--warn-100))|hsl(var(--warn-200))|hsl(var(--warn-300))|hsl(var(--warn-400))|hsl(var(--warn-500))|hsl(var(--warn-600))|hsl(var(--warn-700))|hsl(var(--warn-800))|hsl(var(--warn-900))|
Error   |hsl(var(--error-100))|hsl(var(--error-200))|hsl(var(--error-300))|hsl(var(--error-400))|hsl(var(--error-500))|hsl(var(--error-600))|hsl(var(--error-700))|hsl(var(--error-800))|hsl(var(--error-900))|
Grey    |hsl(var(--grey-100))|hsl(var(--grey-200))|hsl(var(--grey-300))|hsl(var(--grey-400))|hsl(var(--grey-500))|hsl(var(--grey-600))|hsl(var(--grey-700))|hsl(var(--grey-800))|hsl(var(--grey-900))|

## Components

### Alert

#### Alert component for displaying message of error or success at top of screen

##### Props
- type, can be 'error', 'success' or 'null' to either display a success message, error message or no message.
- message

##### Usage:
Reference in root element of specific page, and use setTimeout to display message for a time
    
    import { useState } from react
    import Alert from '../components/Alert'

    const SamplePage = () => 
    {
        const [message, setMessage] = useState('')
        const [type, setType] = useState('null')

        const onFailure = (error) => 
        {
            setType('error')
            setMessage(error)
            setTimeout(() => 
            {
                setType('null')
            }, 3000)
        } 

        return (
            <div>
                <Alert type={type} message={message}/> 
                ... rest of page code
            </div>
        )
    }

## Pages

### Owner
#### login
- Allows user to log into app
- on successful login redirect to /home or /employeeApp/home depending on if employee or owner
- displays appropriate error message on failure
- contains link to registration page
- performs axios POST request to api.qaervice.com/v2/misc/login
#### register
#### home
#### jobs
#### customers
#### settings
#### help
### employee

