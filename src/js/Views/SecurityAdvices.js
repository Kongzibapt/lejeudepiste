import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Views/securityadvices.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';

 class SecurityAdvices extends React.Component {

    constructor(props){
        super(props)
        this.state={
            tabContent:[
                "Ne tuez pas des gens dans la rue c'est pas très cool",
                "Ne mourrez pas s'il vous plaît",
                "Essayez de ne pas rire"
            ],
            index:0,
            contentEnded:false,
            checked:false
        }
    }

    componentDidMount(){
    }

    displayContent = () => {
        if (this.state.index < this.state.tabContent.length-2){
            this.setState({index:this.state.index+1},()=>{
            })
        } else if (this.state.index === this.state.tabContent.length-2){
            let tap = document.getElementById("tap")
            this.setState({index:this.state.index+1,contentEnded:true})
            tap.style.cssText = "animation:none"
        }
    }

    check = () => {
        this.setState({checked:!this.state.checked})
    }


    render() {
      return (
        <div id="home">
            <Header/>
            <div id="transpBlock">
                <div id="transpBox">
                    <div id="secuTitleBlock">
                        <p id="secuTitleTxt">Consignes de sécurité</p>
                    </div>
                    <div id="secuContentBlock" onClick={this.displayContent}>
                        <div id="secuContentBox" >
                            <div id="secuContentTxtBlock">
                                <p id="secuContentTxt">{this.state.tabContent[this.state.index]}</p>       
                            </div>
                            <div id="secuTapBlock">
                                <div id="secuTapBox">
                                    <p id="secuTapTxt">Appuyez</p>
                                    <div id="secuTap">
                                        <img id="tap" src='img\Lecture.png' alt="lecture"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="secuAcceptBlock" onClick={this.check}>
                        {this.state.contentEnded ?
                        <>
                        <div id="acceptCaseBlock" >
                            <div id="acceptCase">
                                {this.state.checked ?
                                <img id="check" src='img\Check.png' alt="check"/>
                                : null}
                            </div>
                        </div>
                        <div id="acceptTxtBlock">
                            <p id="acceptTxt">"L'équipe" approuve les consignes de sécurité</p>
                        </div>
                        </>
                        : null}
                    </div>
                    
                </div>
            </div>
            <div id="buttonBlock">
                {this.state.checked &&                    
                <Link id="link" to="rules">
                    <div id="greenButton">
                        <p id="buttonTxt">Suivant</p>
                    </div>
                </Link>
                }
            </div>
            <Footer/>
        </div>
      )
    }
  }

  export default SecurityAdvices