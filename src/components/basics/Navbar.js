import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <navbar className="navbar">
                <div className="btn-group">
                    {menuList.map((curElem) => {
                        return (
                            <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                        )
                    }
                    )}
                </div>
            </navbar>
        </>
    )
}

export default Navbar