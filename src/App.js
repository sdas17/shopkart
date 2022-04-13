// import React, { createContext, useState } from 'react'

// import Count from './Count';
// import Display from './Display';
// export const store = createContext();
// const App = () => {
//   const [data, setData] = useState([
//     {
//       brandname: "Nokia"
//     },
//     {
//       brandname: "Realme"
//     },
//     {
//       brandname: "Mi"
//     }
//   ])
//   return (
//     <store.Provider value={[data, setData]}>

//       <center>
//         <Count />
//         <Display />
//         {/* <button onClick={() => setData(data + 1)}>Increment</button> */}
//       </center>
//     </store.Provider>

//   );
// }
// context api class component 
import React, { Component } from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";
class App extends Component {
  render() {
    return (
      <UserProvider value="subham" LAST ="DAS">
<ComponentA/>
      </UserProvider>
    );
  }
}


export default App;
