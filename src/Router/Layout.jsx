import { Outlet } from 'react-router'
import Navbar from '../Navigation/Navbar'


function LayoutPage() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default LayoutPage
