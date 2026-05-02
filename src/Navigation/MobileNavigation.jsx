import { Menu, UserRoundCheck, UserRoundCog, UserRoundPen } from 'lucide-react'

export default function Menuicon({open, setOpen}) {
  return (
    <>
      <button className='menuIcon' onClick={() => setOpen(!open)} aria-label='menu icon'>
          <UserRoundCog size={24}/>
      </button>
    </>
  )
}
