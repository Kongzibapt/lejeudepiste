import React from 'react';
import "../../css/Views/armagnac.css";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import { bonus } from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import Saleugos from '../Components/Saleugos';
import Bonus from '../Components/Bonus';
import Inventory from '../Components/Inventory';
import * as txtVoice from '../../utils/txtVoice';
import * as txtSaleugos from '../../utils/txtSaleugos';
import Choice from '../Components/Choice';
import { setUsable, setUsed } from '../../features/inventory/inventorySlice';
import SplittedText from '../Components/SplittedText';
import Button from '../Components/Button';


const mapStateToProps = (state) => {
    return {
        time: state.time.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bonus: (value) => { dispatch(bonus(value)) },
        setUsable: (value) => { dispatch(setUsable(value)) },
        setUsed: (value) => { dispatch(setUsed(value))}
    }
}

class Armagnac extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            launched:false,
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onList:false,
            onLaunchGame:false,
            tabTxt:txtVoice.txtArmagnac,
            notif1:false,
            notif2:false
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
        if (!this.state.launched){
        this.setState({ onEnigma: true })
        setTimeout(() => {
            this.setState({onHeaderAndFooter:true,disabled:false,onSplittedSolo:true,launched:true},()=>{  
                this.animateBack();
                this.props.setUsed("Coffre");
                this.props.setUsable("Liste");
            })
        },3000);
        }
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

    handleUseList = () => {
        this.setState({onList:true,onInventory:false,notif1:true})
    }

    handleLauchGame = () =>  {
        this.setState({onChoice:true});
    }

    render() {
        return (
            <div className="armagnac">
                {this.state.onHeaderAndFooter &&
                    <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité", "Paramètres", "Statistiques", "Contact"]} no_escape={true} />
                }
                    <InventoryTimeBonus disabled={this.state.disabled} handleInventory={this.handleInventory} handleBonus={this.handleBonus} />
                
                {!this.state.onInventory && !this.state.onBonus &&
                    <div className="transpBlock">
                        <div className="transpBox" onClick={this.launchHistory}>
                            {!this.state.onEnigma ?
                                <p className="textDetails">Appuyez pour lancer l'énigme !</p>
                                :
                                this.state.onChoice ?
                                <Choice title="Vestiges" src="img/Vestiges.png" page='/vestiges'/>
                                : this.state.onList ?
                                <div className="listArmagnacPart">
                                    <div className="listArmagnac">
                                        <img className="listArmagnacImg" src="img/Inventory/Liste.png" alt="Liste"/>  
                                    </div>
                                    <div className="launchGame">
                                    {this.state.onLaunchGame &&
                                        <Button text="Qui est-ce ?" color="green" onClick={this.handleGame}/>
                                    }    
                                    </div>
                                </div>
                                : this.state.onGame ?
                                    null
                                :
                                <SplittedText tabtxt={this.state.tabTxt} />
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory useFunction={this.handleUseList}/>
                }
                {this.state.notif1 && <Saleugos notif={this.state.notif1} txt={txtSaleugos.txtArmagnac1} onClickLast={this.handleLauchGame}/>}
                {this.state.notif2 && <Saleugos notif={this.state.notif2} txt={txtSaleugos.txtArmagnac2} onClickFirst={this.handleObjects} onClickLast={this.handleChoice}/>}
                {!this.state.notif1 && !this.state.notif2 && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Armagnac)