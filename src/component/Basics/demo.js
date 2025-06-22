import React,{useState} from "react";

const Demo = (props) => {
    console.log("component rerendered")
    console.log(props)
    const [y ,setCount]=useState(0)

    const onclickHandler=()=>{
       setCount(y+1)
       console.log("conut",y)
    }

    return (
        <>
        <h1>Hello {props.name}</h1> 
        <div>Count {y}</div>
        <button onClick={()=>{onclickHandler()}}>Click me</button>
        </>
        
    )
}
export default Demo