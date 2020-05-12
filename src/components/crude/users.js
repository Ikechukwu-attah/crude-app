import React, {Component} from 'react';

class UserProfile extends Component {

    state = {
        userData: []

    }
 
    
    componentDidMount(){
        const users = [
            
            {id:1, firstName: 'Ikechukwu', lastName:'Attah', handle:'@attah'},
            {id:2, firstName: 'chima', lastName:'ugwu', handle:'@chima'},
            {id:3, firstName: 'chioma', lastName:'eze', handle:'@eze'},
            {id:4, firstName: 'chidi', lastName:'amuka', handle:'@chidi'}
        
        
        ]

        this.setState({
            userData:users,
        })
      
    }

    onhandleDelete = (id)=>{
      const userData = [...this.state.userData];
      const result = userData.filter(data=>data.id !== id)
         this.setState({userData:result}) 
      
    }


    onHandleEdit = (id, update)=>{
        const {userData} = [...this.state]
        userData.forEach(data=>{
            if(data.id === id){
                data = update
            }
        })
        

    }
    
    
    render(){
        return(
          <div className='container'>
            <h1>user profile</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.userData.map((user)=>(
                              
                            <tr key = {user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.handle}</td>
                            <td><button className='btn btn-small btn-danger' onClick={()=>this.onhandleDelete(user.id)}>Delete</button></td>
                            <td><button className='btn btn-small btn-primary'>Edit</button></td>
                            
                            </tr>


                        ))
                    }
                    
                    
                   
                </tbody>
                </table> 
          </div>
        )
    }

}

export default UserProfile