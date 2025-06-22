import React from 'react'
import Restaurent from './component/Basics/Restaurent'  
import UseState from './component/Hooks/useState' 
import UseEffect from './component/Hooks/useEffect' 
import UseReducer from './component/Hooks/useReducer' 
import Todo from './component/todoreact/todo'
import Demo from './component/Basics/demo' 

// const App = () => {                   //This is one component
//   return (
//     <div>                        
//     <h1>Hello World {3+4}</h1>
//     {/*here MyName is nested component, here we are calling MyName function*/}
//     <MyName/>   
//     </div>                              //JSX //here we can use <> </> or  section tag or React.Fragment also instead of div tag  
//   )
// }
// const MyName = () => {                       
//     return  <h2>Aanshi Vishwakarma</h2>
// }
// export default App

//rafce
//import React from 'react'

const App = () => {
  return (
    <div>
      <Restaurent/>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      {/* <Todo/> */}
      <Demo name="rishi" scale="123"/> 

    </div>
  )
}

export default App







