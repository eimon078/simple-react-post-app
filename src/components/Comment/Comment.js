import React from 'react'
import avater_pic from '../../images/avater.png'
const Comment = ({comment}) => {
  
  const {body,name,email}=comment;   

  return (
    <div className='m-2 p-4 border'>
        <h4 className='text-capitalize'>{name}</h4>
        <div className='d-flex gap-2 pb-2'>
            <img className='rounded-circle' style={{width:"30px", height:"30px"}} src={avater_pic} alt='profile_pic'/>
            <p className='text-primary'>{email}</p>
        </div>
        <p className='fs-5'>{body[0].toUpperCase() + body.slice(1)}</p>
    </div>
  )
}

export default Comment