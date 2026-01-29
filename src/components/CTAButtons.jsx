import { LogIn, CalendarCheck } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';



const CTAButtons = () => {

  return (
    <div className='flex gap-6 flex-col sm:flex-row items-center'>
      <Button navigateTo="/input" className='flex gap-2 items-center'>
        Join Now
        <LogIn size={24} />
      </Button>
      <Button navigateTo="/input-freesession" className='flex gap-2'>
        Book a Free Session
        <CalendarCheck size={24} />
      </Button>
    </div>
  )
}

export default CTAButtons