# qaervice-app-frontend

The frontend for the qaervice app

## Components

### Alert

#### Alert component for displaying message of error or success at top of screen

##### Props
- type, can be 'error', 'success' or 'null' to either display a success message, error message or no message.
- message

##### Usage:
Reference in root element of specific page, and use setTimeout to display message for a time
    
    import { useState } from react

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

