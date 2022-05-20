// import React, { useState } from 'react'
import React, {useState, useEffect} from 'react'
import './Blog.css'
const NavigationMenu = (props) => {
    const menuItems = props.menuItems;
    const onMenuItemsClicked = props.onMenuItemsClicked;
    const [currentmenu, setcurrentmenu] = useState(menuItems[0]);

    const getStyle = (menuItems) => {

        if (menuItems === currentmenu) {
            return "item active violet "
        }
        else {
            return "item"
        }
    }

    const itemClickListener = (event) => {
        setcurrentmenu(event.target.text)
        onMenuItemsClicked(event.target.text);
    }
    // const refreshPage = ()=>{
    //     window.location.reload();
    //  }
   
return (
    <div>
        <div className="navgition">
            <div className="ui secondary pointing menu">
                {menuItems.map(menuItem => <a className={getStyle(menuItem)} key={menuItem}
                    onClick={itemClickListener}>{menuItem}</a>)
                }
    
            </div>
        </div>
    </div>
    )
}

export default NavigationMenu














