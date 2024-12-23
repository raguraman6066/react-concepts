import { useState } from "react"

function UseStateReact(){
    const [car,setCar]=useState(
        {
            name:"ford",
            year:2020,
            color:"red"
        }
    )


    function updateCar(){
        setCar((pre)=>({...pre,name:"tata",year:2024}))
    }

    return <>
    <h2>my fav car is {car.name} and it is {car.year} and it is {car.color}</h2>
    <button onClick={updateCar}>Update</button>
    </>

}
export default UseStateReact