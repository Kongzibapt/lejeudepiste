import React from 'react';
import "../../css/Views/vestiges.css";
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
import { setUsable, setUsed, setCombinable } from '../../features/inventory/inventorySlice';
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
        setUsed: (value) => { dispatch(setUsed(value))},
        setCombinable: (value) => { dispatch(setCombinable(value))}
    }
}

class Vestiges extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            launched:false,
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onCrown:false,
            onChest:false,
            onChestOpen:false,
            onObjects:false,
            onNextPlace:false,
            tabTxt:txtVoice.txtVestiges,
            handleUseObject:this.handleUseCrown,
            notif1:false,
            notif2:false,
            disabled:true
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
                this.props.setUsed("Liste");
                this.props.setUsable("Couronne");
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

    handleUseCrown = () => {
        this.setState({onCrown:true,onChest:false,onInventory:false,handleUseObject:this.handleUseChest},()=>{
            this.props.setUsed("Couronne");
            this.props.setUsable("Coffre");
        })
    }

    handleUseChest = () => {
        this.setState({onChest:true,onInventory:false,handleUseObject:this.handleUseCrown},()=>{
            this.props.setUsed("Coffre");
            this.props.setUsable("Couronne");
        })
    }
    
    handleSuccess = () => {
        this.setState({onChestOpen:true,onCrown:false,notif1:true});
    }

    handleObjects = () => {
        this.setState({onChestOpen:false,onObjects:true});
    }

    handleNextPlace = () => {
        this.setState({onObjects:false,onNextPlace:true},()=>{
            this.props.setUsed("Couronne");
            this.props.setCombinable("Coffre avec inscription");
            this.props.setCombinable("Miroir");
        });
    }

    handleCombine = () => {
        this.setState({onMazel:true,onNextPlace:false,onInventory:false,notif2:true,notif1:false});
    }

    render() {
        return (
            <div className="vestiges">
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
                                <Choice title="Le Mazel" src="img/Mazel.png" page='/mazel'/>
                                : this.state.onCrown ?
                                <div className="crownPart">
                                    <div className="crown">
                                        {this.state.onChest ?
                                            <img className="crownImg" src="img/Inventory/Coffre.png" alt="Coffre"/>  
                                        :
                                            <img className="crownImg" src="img/Inventory/Couronne.png" alt="Couronne"/>  
                                        }
                                        </div>
                                    <div className="codeVestiges">
                                        {this.state.onChest ?
                                            <CasesToFill nbCases={10} clue={4} code="JUHV URXJH" returnResult={this.handleSuccess}/>
                                        : 
                                            <p className="clueVestiges">αB➝3</p>
                                        }
                                        </div>
                                </div>
                                : this.state.onChestOpen ?
                                    <img className="crownImg" src="img/Inventory/Coffre.png" alt="Coffre"/>  
                                : this.state.onObjects ?
                                    <Objects objects={["Coffre avec inscription","Miroir"]} onEnd={this.handleNextPlace}/>
                                : this.state.onNextPlace ?
                                    <p className="textDetails">Trouvez le prochain lieu !</p>
                                : this.state.onMazel ?
                                    <img className="crownImg" src="img/CoffreMazel.png" alt="Coffre"/>
                                :
                                    <SplittedText tabtxt={this.state.tabTxt} />
                            }
                        </div>
                    </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus />
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory useFunction={this.state.handleUseObject} combine={this.handleCombine}/>
                }
                {this.state.notif1 && <Saleugos notif={this.state.notif1} txt={txtSaleugos.txtVestiges1} onClickFirst={this.handleObjects}/>}
                {this.state.notif2 && <Saleugos notif={this.state.notif2} txt={txtSaleugos.txtVestiges2} onClickLast={this.handleChoice}/>}
                {!this.state.notif1 && !this.state.notif2 && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Vestiges)