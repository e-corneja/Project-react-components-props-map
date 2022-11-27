import React from 'react'

const Student = (props) => {
  return (
   
      <div className='wrapper'>
        <img src={props.img} alt="Зверек" />
        <div>
          Имя: <b>{props.name}</b>
        </div>
        <div>
          Ник: <b>{props.nickname}</b>
        </div>
      </div>
      
  )
}

export default Student;
