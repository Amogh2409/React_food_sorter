import React from 'react';
import './Resturant.css';
// import image from './images/maggi.jpg';
import Menu from './menuApi';
import MenuCard from './menuCard';

const uniqueList = new Set([ Menu.map((curElem) => {
    return curElem.category;})]);


const Resturant = () => {

    const[menuData, setMenuData] = React.useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <navbar className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() =>setMenuData(Menu)}>All</button>
                </div>
            </navbar>
          <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant