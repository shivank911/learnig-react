import React from "react";

class MyComp extends React.Component{

    state={
        someNumber:13
    }

    render =()=>{
        return (
            <div>
                <h1>{this.state.someNumber}</h1>
            </div>
        )
    }
}


export default MyComp;