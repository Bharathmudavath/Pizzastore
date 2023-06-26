import React from 'react'
import { Menulist } from '../helper/Menulist';
import MenuItem from '../components/MenuItem';
import  "../style/Menu.css";
function Menu() {
  return (
    <div className="menu">
        <h1 className='menutitle'> OUR MENU</h1>
        <div className='menulist'>
            {Menulist.map((menuItem,key)=>{
                return (
                <MenuItem
                    key={key} 
                    image={menuItem.image }
                    name={menuItem.name}
                    price={menuItem.price}
                />
                )
                })}
        </div>
    </div>
  )
}

export default Menu