import React from "react"
import "../../css/Components/saleugos.css"

class Saleugos extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            txt:this.props.txt,
            notif:true,
            index:0,
            open:false
        }
    }

    openBulle = () => {
        if (this.state.notif) {
            let saleugosBulle = document.getElementById("saleugosBulleClosed")
            saleugosBulle.id = "saleugosBulleClosed" 
            setTimeout(() => {
                saleugosBulle.className = "openBulle" 
            },100)
            this.setState({notif:false})
            setTimeout(()=>{
                this.setState({open:true})
                saleugosBulle.id = "saleugosBulleOpened" 
                console.log("open true");
            },1000)
        }
    }

    closeBulle = () => {
        let saleugosBulle = document.getElementById("saleugosBulleOpened")
        saleugosBulle.id = "saleugosBulleOpened" 
        setTimeout(() => {
            saleugosBulle.className = "closeBulle"
        },100)
        setTimeout(() => {
            saleugosBulle.id = "saleugosBulleClosed" 
            this.setState({notif:false});
            console.log("notif false");
        },2000)
        
    }

    changeContent = () => {
        if (this.state.index === this.state.txt.length-1){
            this.setState({index:this.state.index+1},()=>{
                this.closeBulle()
            })
        }else if (this.state.index < this.state.txt.length-1 && this.state.index !== 0){
            this.setState({index:this.state.index+1})
        } else if (this.state.index === 0 ){
            this.setState({index:this.state.index+1},()=>{
                // this.props.compass()
            })
        } 
    }

    render() {
        return(
            <div id="saleugos">
                <div id="saleugosBlock">
                    <div id="saleugosCircle" onClick={this.openBulle}>
                        {this.state.notif && <div id="saleugosNotif"></div>}
                    </div>
                    <div id="saleugosBulleClosed" onClick={this.changeContent}>
                        <div id="saleugosTriangleBlock">
                            <img id="saleugosTriangleImg" src="img/Triangle.png" alt="triangle"/>
                        </div>
                        <div id="saleugosBulleBox">
                            <div id="saleugosBulleTxtBlock">
                                {this.state.open && <p id="saleugosBulleTxt">{this.state.txt[this.state.index]}</p>}
                            </div>
                            <div id="saleugosTapBlock">
                                <img id="saleugosTapImg" src="img/Lecture.png" alt="tap"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Saleugos