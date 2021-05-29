import React from "react"
import "../../css/Components/time.css"

class Time extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            time:{
                minutes:"00",
                secondes:"00",
                heures:"0"
            },
            once:false
        }
    }

    componentDidUpdate(){
        if (this.props.launchTime && !this.state.once){
            this.setState({once:true},()=>{
                this.incrementTime()
            })
            
            
        }
    }

    incrementTime() {
            setInterval(() =>{
                this.setState(prevState => {
                    let time = {...prevState.time};
                    parseInt(time.secondes);
                    time.secondes++;
                    time.secondes.toString();
                    if(time.secondes < 10){
                        time.secondes = "0" + time.secondes;
                    }
                    if (time.secondes > 59){
                        time.secondes = "00"
                        parseInt(time.minutes);
                        time.minutes++;
                        time.minutes.toString();
                        if (time.minutes < 10){
                            time.minutes = "0" + time.minutes;
                        }
                        if (time.minutes > 59){
                            time.minutes = "00";
                            time.heures++;
                        }
                    }
                    return{time};
                })
            },1000)
    }


    render(){
        return(
            <div id="time">
                <div id="timeBlock">
                    <div id="hourglassBlock">
                        <img id="hourglassImg" src="img/Hourglass.png" alt="hourglass"/>
                    </div>
                    <div id="timeTxtBlock">
                        <p id="timeTxt">{this.state.time.heures > 0 && this.state.time.heures+ " : "} {this.state.time.minutes} : {this.state.time.secondes}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Time