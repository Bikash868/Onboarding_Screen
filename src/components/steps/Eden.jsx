import Card from './Card';
import {useState} from 'react'

const data = [{
  id: 1,
  title: "For myself",
  description: "Write better. Think more clearly. Stay organized."
},{
  id: 2,
  title: "With my team",
  description: "Wikis, docs, tasks & projects, all in one place."
}]

export default function Eden({handleClick}) {
  const [clicked,setClicked] = useState(true);

  const handleSelect = (id) => {
    setClicked(!clicked);
  };
  return (
    <div className="flex flex-col ">
      <div className='flex justify-evenly'>
        <Card id={data[0].id} title={data[0].title} description={data[0].description} clicked={clicked} handleSelect = {handleSelect}/>
        <Card id={data[1].id} title={data[1].title} description={data[1].description} clicked={!clicked} handleSelect = {handleSelect}/>
      </div>
      <span className="mt-7" style={{width:'100%'}} onClick={()=>handleClick("next")}>
        <button style={{width:'100%', backgroundColor:'#664de5',color: 'white'}} className="h-10 w-full text-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:text-100">
          Create Workspace
        </button>
      </span>
    </div>
  );
}