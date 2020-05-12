import React, { Component } from 'react'
import ListItem from './ListItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit }  from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit)

export default class TodoList extends Component {

    constructor(props){
        super(props)
       this.state = {
            item : [],
            currentItem : {
                text: '',
                key: ''
                
            }

        }
    }


    handleInput = (e)=>{
      const input = e.target.value
      this.setState(()=>({
          currentItem:{
              text: input,
              key:   Date.now(),
              
          }
          
      }))

    

      console.log(this.state.currentItem.text)
    }

    handleOnAdd = (e)=>{
        e.preventDefault()
        const newItem = this.state.currentItem
         if(newItem.text !== '' ){
             const items = [...this.state.item, newItem]
             this.setState(()=>({
                 item: items,
                 currentItem:{
                     text: '',
                     key: ''
                 }
             }))
         }

    }

     onDeleteItem = (key)=>{
        const itemdata = this.state.item
       const result = itemdata.filter((items)=>items.key !== key)

        this.setState({
            item: result
        })
      }


      onHandleEdit = (key, update)=>{
          const data = this.state.item
           // eslint-disable-next-line array-callback-return
           data.map((items)=>{
               if(items.key === key) {
                   items.text = update
               }
           })

           this.setState({
               item: data
           })
      }

    render() {
        return (
            <div className='App'>
                
                <header>
                   <form id='to-do-form'>
                      <input 
                      type='text' 
                      placeholder='Track your activites'
                      value = {this.state.currentItem.text}
                      onChange = {this.handleInput}
                    
                      />

                      
                      <button type='submit' onClick={this.handleOnAdd}>Add</button>
                     
                   </form>
                </header>
                <ListItem items={this.state.item} onDeleteItem = {this.onDeleteItem} onHandleEdit = {this.onHandleEdit} />
            </div>
        )
    }
}
