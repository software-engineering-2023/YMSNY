import ApplicationsList from "./ApplicationsList"

const BankerPage = ()=>{
    return(
        <div style={{display : "flex" , flexDirection : "column" , alignContent : "center" , marginLeft : "35%" , marginRight : "35%" , backgroundColor : "lightblue" , width : "100%"}}>
            <h1 style={{textAlign : "center"}}> <b>Credit Card Applications </b> </h1>
            <br/>
            <ApplicationsList/> 
            <h1 style={{textAlign : "center"}}> <b> Loan Applications </b></h1>
            <br/>
            <ApplicationsList/> 
            <h1 style={{textAlign : "center"}}> <b> Reports </b></h1>
            <br/>
            <ApplicationsList/>
            <h1 style={{textAlign : "center"}}> Send announcment : </h1>
            <textarea>
            </textarea>   
            <button> Send </button>
        </div>

    )
}

export default BankerPage;