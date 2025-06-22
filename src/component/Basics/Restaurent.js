import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar.js' 

const uniqueList = [...new Set (Menu.map((currentElement) => {
  return currentElement.category;
})), "All",]

//rafce
const Restaurent = () => {
  //React Hooks, useState Hook
  //const [menu data(state variable), updated data] = useState(initial data(current data of menu data))
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList) 
  
  const filterItem = (category) => {

    if(category == "All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    })
    setMenuData(updatedList) 
  }
  return (
    <>
    <Navbar filterItem={filterItem} menuList = {menuList} />   
    <MenuCard menuData1={menuData} /> 
    </>
  )
}

export default Restaurent
