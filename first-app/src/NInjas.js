import React from "react";

const Ninjas = ({ ninjas }) => {

    const ninjaList = ninjas.map(ninja => {

        if (ninja.age > 21) {
            return (
                <div className="ninja" key={ ninja.id } >
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                </div>
            )
        }
    })

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
    
}

export default Ninjas