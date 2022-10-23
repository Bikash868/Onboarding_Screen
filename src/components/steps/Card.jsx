import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Icon } from '@mui/material';

const Card = ({id,title,description,clicked,handleSelect}) => {
    console.log("props:",id,title,description,clicked)
  return (
    <div className='flex flex-col border-2 rounded p-3 cursor-pointer'  style={{width:'150px',borderColor:clicked ? "#664de5" :""}} onClick={handleSelect}>
        <Icon style={{color:clicked ? "#664de5" :"",height:'30px', width:'30px'}}>
            {id===1?<PersonIcon/>:<PeopleAltIcon/>}
        </Icon>
        <div className="mt-1 text-md font-bold text-50">
            {title}
        </div>
        <div className="text-sm mt-1">
            {description}
        </div>
    </div>
  )
}

export default Card