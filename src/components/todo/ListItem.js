import React from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

 const ListItem = (props) => {
     
   

    const data = props.items
    const displayItem = data.map((item)=>(
        <div className='list' key={item.key}>
          <p>
             <input type='text' 
               id={item.key}
               value={item.text}
               onChange = {(e)=>props.onHandleEdit(item.key, e.target.value)}
             />
           <span>
            <FontAwesomeIcon  className='faicons' icon='trash' onClick={()=> props.onDeleteItem(item.key)} />
            <FontAwesomeIcon  className='faicons' icon='edit'   />
           </span>
          </p>
        </div>
    ))
    console.log('data', data)
    return (
        <div>
          <FlipMove duration={300} easing='ease-in-out'>
             {displayItem}
          </FlipMove>
       
        </div>
    )
}

export default ListItem