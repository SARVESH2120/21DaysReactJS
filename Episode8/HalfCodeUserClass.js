import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
            count2: 0,

        }

        console.log(this.props.name + "child constructor")

    }

    componentDidMount(){
        console.log("Child Component Did Mount child caled");
    }

    

    render(){
        console.log("child render")
        const {name, location} = this.props;
        const {count, count2} = this.state;

        return(
            <div className="user-card">
                <h1>Count: {count }</h1>
                <h2>Count2: {count2}</h2>
                <button onClick={()=>{
                    //Never update state variable directly

                    this.setState({
                        count2: this.state.count2 +1,
                        count: this.state.count +1,
                    })
                }} >Count Increase</button>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @akshaymarch01</h4>
            </div>
        )
    }
}

export default UserClass;
