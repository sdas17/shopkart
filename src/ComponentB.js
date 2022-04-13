import React,{Component} from 'react'
import ComC from './ComC';
import  UserContex  from './UserContext';
class  ComponentB extends Component {
  static contextType=UserContex
   render() { 
    return (
      <>
      <div>
        Component E context {this.context}
      </div>
         <ComC/> 

      </>
    );
  }
}
// ComponentB.contextType =UserContex
export default ComponentB ;