import React from "react";

class Details extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state ===undefined){
            history.push("/");
            console.log(this.props);
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
        
    }
}

export default Details;