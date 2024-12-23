// eslint-disable-next-line no-unused-vars
function ListTile(props){
    // eslint-disable-next-line react/prop-types
    return <li>{props.name}</li>
}
function ListReact(){
    const items=[
        {id:1,name:"ragu"},
        {id:2,name:"ram"},
        {id:3,name:"kumar"},

    ]
    return <>
    <h2>list items</h2>
    <ol>
        {items.map((item)=><ListTile key={item.key} name={item.name}/>)}
    </ol>
    </>
}

export default ListReact;