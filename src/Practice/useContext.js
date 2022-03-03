import React, { useContext } from "react";

const Data={
    users:{
        userName:"Malav",
        emailId:"malav@gmail.com"
    },
    location:{
        city:"Ahmedabad",
        state:"GJ",
        country:"IN"
    }
}
const CreateContext = React.createContext();
function MainComponent() {
    return(
        <>
        <CreateContext.Provider value={Data.location}>
        <Component2 />
        </CreateContext.Provider>
        </>
    )    
}
function Component2(props) {
    return(
        <>
        <Component3 />
        </>
    )
}
function Component3() {
    const data = useContext(CreateContext)
    return (
        <>
        <span>{data.city}</span><br />
        <span>{data.state}</span><br />
        <span>{data.country}</span>
        </>
    )
}
export default MainComponent;
