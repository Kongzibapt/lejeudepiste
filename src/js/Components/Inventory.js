import React from "react"
import { connect } from "react-redux";
import "../../css/Components/inventory.css";
import {add} from '../../features/inventory/inventorySlice';

const mapStateToProps = (state) => {
    return {
        inventory:state.inventory.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (value)=>{dispatch(add(value))}
    }
}

class Inventory extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }

    componentDidMount(){
        // setTimeout(() =>
        // {
        //     this.props.add("bonus");
        //     console.log(this.props);
        // },3000)
    }



    render(){
        const objects = [];
        for (let i = 0; i < 25; i++) {
            objects.push(
                <div className="objectCase">
                    {this.props.inventory[i].possessed ? 
                        <img className="objectImg" src={"img/"+this.props.inventory[i].name+".png"} alt={this.props.inventory[i].name}/>
                    : 
                        <img className="objectImg" src={"img/"+this.props.inventory[i].name+"Black.png"} alt={this.props.inventory[i].name}/>   
                    }   
                </div>
            )
        }
        return(
            <div className="backpack">
                <div className="backpackBlock">
                    <div className="backpackTitle">
                        <p className="backpackTxt">Inventaire</p>
                    </div>
                    <div className="objects">
                        {objects}
                    </div>
                </div>
            </div>
        )
    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(Inventory)