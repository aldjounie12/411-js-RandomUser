import React, {Component} from 'react'
import App from '../App';

class User extends Component {
    render() {
        
        return( 
            <div>
                
                <h1>Random User</h1>
                <p>{this.props.user.name.first}-
                   {this.props.user.name.last}
                   <img src= {this.props.user.picture.large}/>
                </p>
                
            </div>
            
        )
    }
}

export default User;



