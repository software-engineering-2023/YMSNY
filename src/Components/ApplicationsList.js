import Application from "./Application"

const applications = [
    {
        id : 1,
        name : "youssef",
        type : "lol"
    },
    {
        id : 2,
        name : "khashba",
        type : "lol"
    }
]
function ApplicationsList(){
    return (
        <div style={{paddingBottom : "3rem"}}>
            <div style={{display : "flex" , justifyContent : "flex-end"}}>
                <input placeholder="Search..."/>
                <button style={{paddingLeft : "1rem"}}> Search </button>
            </div>
            <div>
            {
                applications.map((app) => 
                    //console.log(app);
                    <Application props={app}/>
                     
                )
            }   
            </div>
        </div>
    )
}

export default ApplicationsList;

