import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';

const Wish = ({todos,remove}) => {

  return todos.map((elem, index)=>(
    <div className="todo-row">
            <p key={index}>{elem}</p>
            <RiCloseCircleLine onClick={() => {remove(elem);
            }}
          className='delete-icon'
        />
    </div> 
  ));
};

export default Wish;
