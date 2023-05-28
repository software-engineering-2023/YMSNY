

function Application({props}){ 
    return(
        <div style={{display : "flex",flexDirection : "row",gap:"3rem" , padding : "2rem"}}>
            <div style={{width : "2rem" , textAlign : "center"}}>
                <p> {props.id}</p>
            </div>

            <div style={{width : "2rem" , textAlign : "center"}} >
                 
                 <p> {props.name} </p>
                 
            </div>

            <div style={{width : "2rem" , textAlign : "center"}}>
            <p> {props.type} </p>
            </div>
            
            <div style={{display : "flex",gap:"1rem"}}>
                <button> Accept </button>
                <button> Reject </button>
            </div>
        </div>
    )
}

export default Application