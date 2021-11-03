import React from "react"
import { connect } from "react-redux";
import "../../css/Components/inventoryTimeBonus.css"
import {start} from '../../features/time/timeSlice';
import Inventory from "./Inventory";

const mapStateToProps = (state) => {
    return {
        time:state.time.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        start : ()=>{dispatch(start())}
    }
}

class InventoryTimeBonus extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }

    componentDidMount(){
    }


    render(){
        return(
        <div className="inventoryTimeBonus">
            <div className="inventoryTimeBonusBlock">
                <div className="inventory">
                    <div className="inventoryBlock" onClick={this.props.handleInventory}>
                        <img className="inventoryImg" src="img/Backpack.png" alt="backpack"/>
                    </div>
                </div>
                <div className="time">
                    <div className="timeBlock">
                        <div className="hourglassBlock">
                            <img className="hourglassImg" src="img/Hourglass.png" alt="hourglass"/>
                        </div>
                        <div className="timeTxtBlock">
                            <p className="timeTxt">{this.props.time.heures > 0 && this.props.time.heures+ " : "} {this.props.time.minutes} : {this.props.time.secondes}</p>
                            <p className="timeTxtBonus"></p>
                        </div>
                    </div>
                </div>
                <div className="bonus">
                    <div className="bonusBlock" onClick={this.props.handleBonus}>
                    <img className="bonusImg" src="img/bonus.png" alt="bonus"/>
                    </div>
                </div>
            </div>
        </div> 
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(InventoryTimeBonus)