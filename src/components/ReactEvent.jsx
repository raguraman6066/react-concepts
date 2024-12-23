function ReactEvent(){
    function shot(text,event){
        alert(event.type)
    }
    return <button onClick={(event)=>shot("goal",event)}>Take a shot!</button>
}
export default ReactEvent