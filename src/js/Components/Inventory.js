import React from "react"
import { connect } from "react-redux";
import "../../css/Components/inventory.css";
import {add} from '../../features/inventory/inventorySlice';
import Button from "./Button";

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
            onObject:false,
            currentObject:null,
            currentIndex:0,
            onCombination:false,
            onCombine:false,
            combinedObject:null
        }
    }

    componentDidMount(){
        // setTimeout(() =>
        // {
        //     this.props.add("bonus");
        //     console.log(this.props);
        // },3000)
        // console.log(this.props.inventory)
    }

    handleObject = (object,i) => {
        this.setState({onObject:true,currentObject:object,currentIndex:i});
        console.log(this.props.inventory)
    }

    colorBlue = () => {
        this.setState({onObject:false,onCombination:true,combinedObject:this.state.currentObject},()=>{
            var currentCase = document.getElementsByClassName("objectCase")[this.state.currentIndex];
            currentCase.style.cssText = "background-color:#091688;";
        })
        
    }

    combine = (object,i) => {
        this.setState({onCombination:false,onCombine:true,currentObject:object,currentIndex:i})
    }

    render(){
        const objects = [];
        for (let i = 0; i < 20; i++) {
            objects.push(
                <div key={i} className="objectCase" onClick={()=>{this.state.onCombination && this.props.inventory[i].possessed ? this.combine(this.props.inventory[i],i) : this.handleObject(this.props.inventory[i],i)}}>
                    {this.props.inventory[i].possessed ? 
                        <img className="objectImgInv" src={"img/Inventory/"+this.props.inventory[i].name+".png"} alt={this.props.inventory[i].name}/>
                    : 
                        <img className="objectImgInv" src={"img/Inventory/"+this.props.inventory[i].name+"Black.png"} alt={this.props.inventory[i].name}/>   
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
                    {this.state.onObject ?
                    <div className="objectBigInv">
                        <div className="crossObjectBig" onClick={()=>this.setState({onObject:false})}>
                            <img className="crossObjectBigImg" alt="close" src={"img/CrossWhite.png"}/>
                        </div>
                        <div className="objectBigCase">
                            {this.state.currentObject.possessed ? 
                            <img className="objectBigImgInv" src={"img/Inventory/"+this.state.currentObject.name+".png"} alt={this.state.currentObject.name}/>
                            : 
                            <img className="objectBigImgInv" src={"img/Inventory/"+this.state.currentObject.name+"Black.png"} alt={this.state.currentObject.name}/>   
                            }
                        </div>
                        <div className="objectBigTitle">
                            <p className="objectBigTitleTxt">{this.state.currentObject.possessed ? this.state.currentObject.name : "???"}</p>
                        </div>
                        {this.state.currentObject.possessed ?
                        <div className="buttonsInv">
                            <Button text="Utiliser" color="green" onClick={()=>{this.state.currentObject.usable && this.props.useFunction()}}/>
                            <Button text="Combiner" color="blue" onClick={()=>{this.state.currentObject.combinable && this.colorBlue()}}/>
                        </div>
                        :
                        <div className="buttonsInv">
                            <Button text="Utiliser" color="gray" disabled={true}/>
                            <Button text="Combiner" color="gray" disabled={true}/>
                        </div>
                        }
                    </div>
                    : this.state.onCombine ?
                    <div className="objectsCombine">
                        <div className="crossObjectBig" onClick={()=>this.setState({onCombine:false})}>
                            <img className="crossObjectBigImg" alt="close" src={"img/CrossWhite.png"}/>
                        </div>
                        <div className="twoObjects">
                            <div className="oneObject">
                                <div className="objectMiddleCase">
                                    <img className="objectMiddleImgInv" src={"img/Inventory/"+this.state.currentObject.name+".png"} alt={this.state.currentObject.name}/>
                                </div>
                                <div className="objectBigTitle">
                                    <p className="objectBigTitleTxt">{this.state.currentObject.possessed ? this.state.currentObject.name : "???"}</p>
                                </div>
                            </div>
                            <div className="oneObject">
                                <div className="objectMiddleCase"> 
                                    <img className="objectMiddleImgInv" src={"img/Inventory/"+this.state.combinedObject.name+".png"} alt={this.state.combinedObject.name}/>
                                </div>
                                <div className="objectBigTitle">
                                    <p className="objectBigTitleTxt">{this.state.currentObject.possessed ? this.state.combinedObject.name : "???"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="combineButton">
                            <Button text="Combiner" color="blue" onClick={()=>this.props.combine()}/>
                        </div>
                    </div>
                    :
                    <div className="objectsInv">
                        {objects}
                    </div>
                    }
                </div>
            </div>
        )
    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(Inventory)