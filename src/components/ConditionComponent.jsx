
function ConditionComponent(){
    let x=2
    if(x<10)
        x=5
    return <p>{x%2==0?" even number":"odd number"}</p>
}
export default ConditionComponent;