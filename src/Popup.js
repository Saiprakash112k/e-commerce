export const Popup = (props)=>{
 const ClickHere= ()=>{
    props.called(props.IndexValue)
 }
    return(
        <>
        <button onClick={()=>{ClickHere()}}>Click</button>
        </>
    )
}