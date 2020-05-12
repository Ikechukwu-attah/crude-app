import React from 'react';
import './App.css';
import UserProfile  from './components/crude/users'
import TodoList from './components/todo/TodoList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    }
    

    increment = ()=>{
      this.setState({
      count: this.state.count  +1
      })
      if(this.state.count === 10){
        this.setState({
          count: 'hello dear'
        })
      
      }
    }
    decrement = ()=>{
      this.setState({
        count: this.state.count  -1
      })
    }

    reset = ()=>{
      this.setState({
        count:  0
      })
    }
  

  render(){
    return(
      <div>
       <TodoList />
      </div>
    )
  }
}

export default App;
