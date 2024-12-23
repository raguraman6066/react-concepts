import { useState } from "react"

function FormReact(){
    const [name,setName]=useState("")
function handleSubmit(event){
    event.preventDefault()
    alert(`the value ${name}`)
}



    return <form onSubmit={handleSubmit}>
        <label>enter name</label><br />
        <input type="text" value={name} onChange={ setName(event.target.value)}/> <br /> <br />
        <button>Submit</button>
    </form>
}

export default FormReact