import React from 'react';
import "../../css/Views/fabie.css";
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
import { setUsable } from '../../features/inventory/inventorySlice';
import Button from '../Components/Button';
import CasesToFill from '../Components/CasesToFill';


const mapStateToProps = (state) => {
    return {
        time: state.time.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bonus: (value) => { dispatch(bonus(value)) },
        setUsable: (value) => { dispatch(setUsable(value)) }
    }
}

class Fabie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            launched:false,
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onHeaderAndFooter:false,
            onSplittedSolo:false,
            disabled:true,
            notif1:false,
            notif2:false,
            onChoice:false,
            onUsePage:false,
            onReturn:false,
            onPageReturn:false,
            onCases:false,
            tabTxt1:txtVoice.txtFabie1,
            tabTxt2:txtVoice.txtFabie2,
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
                this.props.setUsable("Page déchirée");
            })
        },9500);
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

    handleUsePage = () => {
        this.setState({onInventory:false,onUsePage:true,onSplittedSolo:false,notif1:true})
    }

    handleReturn = () => {
        this.setState({onReturn:true})
    }

    handlePageReturn = () => {
        this.setState({onPageReturn:true,onReturn:false,onCases:true})
    }

    handleSuccess = () => {
        this.setState({notif2:true,notif1:false})
    }

    render() {
        return (
            <div className="fabie">
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
                                <Choice title="Saint-Amans" src="img/Amans_min.png" page='/amans'/>
                                : this.state.onSplittedSolo ?
                                <div className="txtAndButton">
                                    <SplittedText tabtxt={this.state.tabTxt2} />
                                </div>
                                : this.state.onUsePage ?
                                <div className="usePage">
                                    <div className="pagePart">
                                    {this.state.onPageReturn ?
                                        <img src="img/Page_Retournée.png" className="pageBigFabie" alt="Page déchirée"/>
                                    :
                                        <img src="img/Inventory/Page déchirée.png" className="pageBigFabie" alt="Page déchirée"/>
                                    }
                                    </div>
                                    <div className="buttonOrCodePart">
                                    {this.state.onReturn ?
                                        <Button text="Retourner" color="green" onClick={this.handlePageReturn}/>
                                    : this.state.onCases &&
                                        <CasesToFill nbCases={11} code="SAINT-AMANS" clue={5} returnResult={this.handleSuccess}/>
                                    }
                                    </div>
                                </div>
                                :
                                <div className="txtAndButton">
                                    <SplittedText tabtxt={this.state.tabTxt1} />
                                </div>
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory useFunction={this.handleUsePage}/>
                }
                {this.state.notif1 && <Saleugos notif={this.state.notif1} txt={txtSaleugos.txtFabie1} onClickFirst={this.handleReturn}/>}
                {this.state.notif2 && <Saleugos notif={this.state.notif2} txt={txtSaleugos.txtFabie2} onClickLast={this.handleChoice}/>}
                {!this.state.notif1 && !this.state.notif2 && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Fabie)