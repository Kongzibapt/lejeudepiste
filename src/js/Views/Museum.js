import React from 'react';
import "../../css/Views/museum.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import { bonus } from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import Saleugos from '../Components/Saleugos';
import Bonus from '../Components/Bonus';
import Inventory from '../Components/Inventory';
import SplittedText from '../Components/SplittedText';
import * as txtVoice from '../../utils/txtVoice';
import * as txtSaleugos from '../../utils/txtSaleugos';
import Choice from '../Components/Choice';


const mapStateToProps = (state) => {
    return {
        time: state.time.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bonus: (value) => { dispatch(bonus(value)) }
    }
}

class Museum extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            onBonus: false,
            onInventory: false,
            onHistory: false,
            onHeaderAndFooter:false,
            onInv: false,
            onSal: false,
            disabled:true,
            notif:false,
            onChoice:false,
            tabTxt1: txtVoice.txtMuseum1,
            tabTxt2: txtVoice.txtMuseum2,
            tabTxt3: txtVoice.txtMuseum3,
        }
    }

    bonus = () => {
        this.props.bonus(2);
    }

    malus = () => {
        this.props.bonus(-2);
    }

    handleInventory = () => {
        this.setState({ onInventory: !this.state.onInventory });
        if (this.state.onBonus) {
            this.setState({ onBonus: !this.state.onBonus });
        }
    }

    handleBonus = () => {
        this.setState({ onBonus: !this.state.onBonus }, () => console.log(this.state));
        if (this.state.onInventory) {
            this.setState({ onInventory: !this.state.onInventory });
        }
    }

    launchHistory = () => {
        this.setState({ onHistory: true })
        setTimeout(() => {
            this.setState({onHeaderAndFooter: true},()=>{  
                this.animateBack();
            })
        },91780);
        setTimeout(() => {
            this.setState({disabled:false,notif:true})
        },94000)
    }

    animateBack(){
        let head = document.getElementById("header");
        head.className = "animHead"
        let foot = document.getElementById("footer");
        foot.className = "animFoot"   
    }

    handleChoice = () => {
        this.setState({onChoice:true})
    }

    render() {
        return (
            <div className="museum">
                {this.state.onHeaderAndFooter &&
                    <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité", "Paramètres", "Statistiques", "Contact"]} no_escape={true} />
                }
                    <InventoryTimeBonus disabled={this.state.disabled} handleInventory={this.handleInventory} handleBonus={this.handleBonus} />
                
                {!this.state.onInventory && !this.state.onBonus &&
                    <div className="transpBlock">
                        <div className="transpBox" onClick={this.launchHistory}>
                            {!this.state.onHistory ?
                                <p className="textDetails">Appuyez pour lancer l'histoire !</p>
                                :
                                this.state.onChoice ?
                                <Choice title="Maison de Pierre" src="img/Pierre.png" page={'/pierre'}/>
                                :
                                <SplittedText tabtxt={this.state.tabTxt1.concat(this.state.tabTxt2, this.state.tabTxt3)} />
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory />
                }
                {this.state.notif && <Saleugos notif={this.state.notif} txt={txtSaleugos.txtMuseum} onClickLast={this.handleChoice}/>}
                {!this.state.notif && <Saleugos notif={this.state.notif}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Museum)