import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeSkeleton from '../../Skeleton/HomeSkeleton'

function Profile() {
  const navigate = useNavigate()
  return (
    <div>
        <HomeSkeleton/>
        <div className='profile'>heelo world</div>
    </div>
  )
}

export default Profile
