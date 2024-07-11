
export const Button = (props)=>{
    const {count,setCount,variable} = props
    return (
        // <button onClick={ ()=>{
        //     props.setCount( props.count + 1 )
        //     props.variable+=1
        // } } >Encrease</button>

        <button onClick={ ()=>{
            setCount( count + 1 )
        } } >Encrease</button>
    )
}

const DecButton = ( { count, setCount } )=>{
    return(
        <button onClick={ ()=>setCount( count-1 ) } >Decrease</button>
    )
}

export default DecButton