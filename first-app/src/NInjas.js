import { Component } from "react";

function Ninjas({ ninjas }){

    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ ninja.id } >
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
            </div>
        )
    })

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
    
}

export default Ninjas