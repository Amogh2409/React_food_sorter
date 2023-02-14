import React from 'react'

const menuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--container">
                {menuData.map((curElem, index) => {
                    return (
                        <>
                            <div className="card-container">
                                <div className="card">
                                    <div className="class-body">
                                        <span className="card-number card-circle subtitle">
                                            {curElem.id}
                                        </span>
                                        <span className="card-author subtitle">{curElem.category}</span>
                                        <h2 className="card-title">
                                        {curElem.name}
                                        </h2>
                                        <span className="card-description subtitle">
                                            {curElem.description}
                                        </span>
                                        <div className="card-read">
                                            Read
                                        </div>
                                        {<img src={curElem.image} alt="Images" className="card-media" />}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>

        </>
    )
}

export default menuCard