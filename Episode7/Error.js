import { useRouteError } from "react-router-dom";

const Error =() =>{
    const err =useRouteError();
    console.log(err);

  
    return(
        <div>
            <h1>This is or error page</h1>
            <h2>You make greater mistake to come this page </h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h6>Happy Hacking!!</h6>
        </div>
    )
}

export default Error;
