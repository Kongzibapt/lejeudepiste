import React from 'react';
import "../../css/Views/pierre.css";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import { bonus } from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Saleugos from '../Components/Saleugos';
import Bonus from '../Components/Bonus';
import Inventory from '../Components/Inventory';
import SplittedText from '../Components/SplittedText';
import * as txtVoice from '../../utils/txtVoice';
import * as txtSaleugos from '../../utils/txtSaleugos';
import Choice from '../Components/Choice';
import CasesToFill from '../Components/CasesToFill';
import Objects from '../Components/Objects';


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

class Pierre extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onHeaderAndFooter:false,
            onExplore:false,
            onChest:false,
            onInv: false,
            onSal: false,
            onChestOpen:false,
            onObjects:false,
            disabled:true,
            notif1:false,
            notif2:false,
            onChoice:false,
            tabTxt1:txtVoice.txtPierre1,
            tabTxt2:txtVoice.txtPierre2,
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
        this.setState({ onEnigma: true })
        setTimeout(() => {
            this.setState({onHeaderAndFooter: true},()=>{  
                this.animateBack();
            })
        },1000);
        // setTimeout(() => {
        //     this.setState({disabled:false,notif:true})
        // },1000)
        setTimeout(() => {
            this.setState({onExplore:true})
        },11360)
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

    explore = () => {
        this.setState({onChest:true},()=>{
            setTimeout(()=>{
                this.setState({disabled:false,notif1:true});
            },2000)
        })
    }

    handlePassword = () => {
        this.setState({onPassword:true});
    }

    handleCode = () => {
        this.setState({notif1:false,onChestOpen:true,onChest:false,notif2:true})
    }

    handleObjects = () => {
        this.setState({onChestOpen:false,onObjects:true})
    }

    render() {
        return (
            <div className="pierre">
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
                                <Choice title="François Fabié" src="img/Fabié.png" page='/fabie'/>
                                : this.state.onChest ?
                                <div className="chest">
                                    <img class="chestImg" src="img/Chest.png" alt="coffre"/>
                                    {!this.state.onPassword ?
                                        <SplittedText tabtxt={this.state.tabTxt2}/>
                                    :
                                        <div className="casesPierre">
                                            <CasesToFill nbCases={8} code="24121919" title="Code" returnResult={this.handleCode}/>
                                        </div>
                                    }
                                </div>
                                : this.state.onChestOpen ?
                                    <div className="chestOpen">
                                        <img class="chestOpenImg" src="img/Chest.png" alt="coffre"/>
                                    </div>
                                : this.state.onObjects ?
                                    <Objects objects={["Page déchirée","Coffre","Cactus"]}/>
                                :
                                <div className="txtAndButton">
                                    <SplittedText tabtxt={this.state.tabTxt1} />
                                    {this.state.onExplore &&
                                    <div className="exploreButton">
                                        <Button text="Explorer" color="green" onClick={this.explore}/>
                                    </div>}
                                </div>
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory />
                }
                {this.state.notif1 && <Saleugos notif={this.state.notif1} txt={txtSaleugos.txtPierre1} onClickFirst={this.handlePassword}/>}
                {this.state.notif2 && <Saleugos notif={this.state.notif2} txt={txtSaleugos.txtPierre2} onClickFirst={this.handleObjects} onClickLast={this.handleChoice}/>}
                {!this.state.notif1 && !this.state.notif2 && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Pierre)