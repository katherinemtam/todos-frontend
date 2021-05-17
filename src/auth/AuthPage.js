import React, { Component } from 'react';
import './AuthPage.css';

class AuthPage extends Component {
  state = {
    isSignUp: true
  }

   handleSwitch = () => {
     this.setState({ isSignup: !this.state.isSignUp });
   }

   handSubmit = e => {
     e.preventDefault();
   }

   render() { 
     const { isSignUp } = this.state;
    
     return ( 
       <div className="AuthPage">

         <h2>Sign {isSignUp ? 'Up' : 'In'}</h2>

         <form className="AuthPage" onSubmit={this.handleSubmit}>
           {
             isSignUp && <p>
               <label>
                 <input name="name" placeholder="Name"/>
               </label>
             </p>
           }

           <p>
             <label>
               <input name="email" placeholder="Email"/>
             </label>
           </p>

           <p>
             <label>
               <input name="email" type="password" placeholder="Password"/>
             </label>
           </p>

           <p>
             <button>
             Sign {isSignUp ? 'Up' : 'In'}
             </button>
           </p>

           <p>
             <button onClick={this.handleSwitch}>
               {
                 isSignUp
                   ? 'Already have an account?'
                   : 'Need to create an account?'
               }
             </button>
           </p>
         </form>
       </div>

     );
   }
}
 
export default AuthPage;


