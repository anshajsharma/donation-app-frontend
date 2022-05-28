import React from 'react'
import {Icon} from "semantic-ui-react"
import './history.css'
import { useNavigate} from "react-router-dom";

export default function 
History() {
    const navigate = useNavigate();
  return (
    <div className='cont'>
        <Icon name="arrow alternate circle left outline" className='lefticon' onClick={()=>navigate(-1)}/>
        <Icon name="arrow alternate circle right outline" className='righticon' onClick={()=>navigate(+1)}/>
    </div>
  )
}
