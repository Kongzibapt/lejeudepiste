import React from "react"
import { connect } from "react-redux";
import "../../css/Components/objects.css";
import {add} from '../../features/inventory/inventorySlice';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => { dispatch(add(value)) }
    }
}


class Objects extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            obj:this.props.objects[0]
        }
    }

    componentDidMount(){
        this.animObjects();
        this.changeObjects();
    }

    animObjects = () => {
        let obj = document.getElementsByClassName("objects")[0];
        obj.id = "goToInventoryObj";
        setTimeout(() => {
            this.props.add(this.state.obj);
            obj.style.cssText = "animation:goToInventoryObj ease-out 2.5s both;";
        },2000);
    }

    changeObjects = () => {
        let obj = document.getElementsByClassName("objects")[0];
        let i = 1;
        var looper = setInterval(() => {
            this.setState({obj:this.props.objects[i]},()=>{
                obj.id = "";
                obj.style.cssText = "";
                this.animObjects();
                if (i === this.props.objects.length-1){
                    this.props.onEnd && setTimeout(()=>{this.props.onEnd()},4500);
                    clearInterval(looper);
                }
            });
            i++;
        },4500)
    }


    render(){
        return(
            <div className="objects">
                <div className="object">
                    <img className="objectImg" src={"img/Inventory/"+this.state.obj+".png"} alt={this.state.obj}/>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Objects)