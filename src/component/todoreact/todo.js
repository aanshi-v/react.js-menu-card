import React, { useEffect, useState } from 'react'
import "./style.css"

//get local storage data back
const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList")

    if(lists){
        return JSON.parse(lists)
    }else{
        return [] 
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData()) 
    const [isEditItem, setIsEditItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)

    //add the item function
    const addItem = () => {
        if(!inputData){
            alert("Pls fill the data")
        }else if(inputData && toggleButton){
            setItems(
                items.map((CurrEle) => {
                    if(CurrEle.id === isEditItem){
                        return {...CurrEle, name: inputData} 
                    }
                    return CurrEle;
                })
            )
        setInputData("")
        setIsEditItem(null)
        setToggleButton(false)
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, myNewInputData])  
            setInputData("")
        }
    }

    //edit items
    const editItem = (index) => {
        const item_todo_edited = items.find((CurrEle) => {
            return CurrEle.id === index
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        setToggleButton(true)
    } 

    //how to delete item section
    const deleteItem = (index) => {
        const updatedItem = items.filter((CurrEle) => {
            return CurrEle.id !== index
        })
        setItems(updatedItem) 
    }

    //remove all the element
    const removeAll = () =>{
        setItems([])
    }

    //adding local storage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items])


  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='./images/doc.png' alt='todologo' />
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className='addItems'>
    const [inputData, setInputData] = useState("")
    <input type='text' placeholder= "👍 Add item" className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value) } />
                {
                    toggleButton ? <i className="fa fa-edit add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>
                }
                
            </div>
            {/* Show out items */}
            <div className='showItems'>
            {
                items.map( (currentElement) => {
                    return (
                        <div className='eachItem' key={currentElement.id}> 
                <h3>{currentElement.name}</h3>
                    <div className='todo-btn'>
                    <i className="far fa-edit add-btn" onClick={() => editItem(currentElement.id)}></i> 
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currentElement.id)}></i> 
                    </div>
                </div>
                    )
                })
            }
                
            </div>
            {/* Remove all buttons */}
            <div className='showItems'><button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button></div>
        </div>
      </div>
    </>
  )
}

export default Todo
