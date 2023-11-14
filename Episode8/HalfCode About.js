Learn About class based component in react

import User  from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

        console.log(  "Calling parent constructor")
    }
 
    componentDidMount(){
        console.log("Component did mount parent called")
    }


    render(){
        console.log("Caliling a parent render")


        return(

            
                <div className="">
                    <h1>About</h1>
                    <h2>This is NAmaste react Web series</h2>
                    <User />
                    <UserClass name={"first"} location={"Gorakhpur"} />
                    <UserClass name={"second"} location={"Gorakhpur"} />
        
                </div>
        

        );
    }
}

export default About;


/*

- Parent Constructor
- Parent Render
    
    -First Constructor
    -First Render

    -Second Constructor
    -Second Render

    <DOM UPDATED - IN SINGLE BATCH>

    -First ComponentDidMount
    -Second ComponentDidMount

- Parent ComponentDidMount


*/
