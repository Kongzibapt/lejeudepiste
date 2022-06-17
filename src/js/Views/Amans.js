import React from 'react';
import "../../css/Views/amans.css";
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
import CasesToFill from '../Components/CasesToFill';
import Objects from '../Components/Objects';


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

class Amans extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            launched:false,
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onChest:false,
            onChestOpen: false,
            onHeaderAndFooter:false,
            tabTxt:txtVoice.txtAmans,
            notif:false,
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
                this.props.setUsed("Page déchirée");
                this.props.setUsable("Coffre");
            })
        },7000);
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

    handleUseChest = () => {
        this.setState({onChest:true,onInventory:false})
    }

    handleSuccess = () => {
        this.setState({notif:true,onChestOpen:true})
    }

    handleObjects = () => {
        this.setState({onObjects:true,onChest:false})
    }

    render() {
        return (
            <div className="amans">
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
                                <Choice title="Armagnac" src="img/Armagnac.png" page='/armagnac'/>
                                : this.state.onChest ?
                                <div className="chestAmans">
                                    {this.state.onChestOpen ?
                                    <img className="chestAmansImg" src="img/Inventory/Coffre.png" alt="Coffre"/>      
                                    :
                                    <img className="chestAmansImg" src="img/Inventory/Coffre.png" alt="Coffre"/>      
                                    }
                                    <CasesToFill nbCases={4} code="1758" returnResult={this.handleSuccess}/>
                                </div>
                                : this.state.onObjects ?
                                <Objects objects={["Blason","Coffre","Liste"]}/>
                                :
                                <SplittedText tabtxt={this.state.tabTxt} />
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory useFunction={this.handleUseChest}/>
                }
                {this.state.notif && <Saleugos notif={this.state.notif} txt={txtSaleugos.txtAmans} onClickFirst={this.handleObjects} onClickLast={this.handleChoice}/>}
                {!this.state.notif && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Amans)