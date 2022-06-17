import React from 'react';
import "../../css/Views/mazel.css";
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
import { Draggable } from 'drag-react';
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

class Mazel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            launched:false,
            onBonus: false,
            onInventory: false,
            onEnigma: false,
            onImage:false,
            onKey:false,
            onObjects:false,
            tabTxt:txtVoice.txtMazel,
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
            this.setState({onHeaderAndFooter:true,disabled:false,launched:true,onImage:true},()=>{  
                this.animateBack();
            })
        },6000);
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

    handleOnKey = () => {
        this.setState({onKey:true,onImage:false,notif1:true});
    }

    handleObjects = () => {
        this.setState({onObjects:true,onKey:false})
    }

    handleAfterObjects = () => {
        this.setState({onAfterObjects:true,onObjects:false},()=>{
            this.props.setUsable("bonus");
        });
    }

    handleUseScroll = () => {
        this.setState({onScroll:true,onAfterObjects:false,onInventory:false,notif2:true})
    }

    render() {
        return (
            <div className="mazel">
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
                                : this.state.onImage ?
                                <div className="mazelGamePart">
                                    <img src="img/MazelGame.png" className="mazelImg" alt="Mazel"/>
                                    <Draggable style={{position:"absolute",top:"65px",left:"67px"}} className="statue">
                                        <img src="img/Statue.png" alt="Statue"/>
                                    </Draggable>
                                    <div className="keyMazel" onClick={this.handleOnKey}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_787_1208)" filter="url(#filter0_i_787_1208)">
                                        <path d="M11.4805 3.7635C11.6107 3.29229 11.4933 2.77004 11.1265 2.40321C10.5808 1.85753 9.69038 1.86301 9.13772 2.41567C8.96165 2.59077 8.83464 2.80904 8.76942 3.04864C8.70419 3.28824 8.70304 3.54077 8.76607 3.78095C8.46677 3.70093 8.15166 3.70127 7.85254 3.78193C7.55342 3.86259 7.28086 4.02072 7.06237 4.24037C6.37475 4.928 6.36793 6.03548 7.04675 6.7143C7.72557 7.39312 8.83305 7.3863 9.52068 6.69867C9.57952 6.63983 9.63304 6.578 9.68207 6.51335L9.67991 6.86323L9.30892 7.24685L9.67493 7.62582L9.6736 7.84056L9.61592 7.84073C9.53384 7.84173 9.4554 7.87478 9.39736 7.93283C9.33932 7.99087 9.30627 8.0693 9.30527 8.15138L9.30493 8.18995C9.30471 8.2303 9.31249 8.27031 9.32782 8.30763C9.34316 8.34496 9.36576 8.37888 9.39429 8.40742C9.42283 8.43595 9.45675 8.45855 9.49408 8.47389C9.53141 8.48922 9.57141 8.497 9.61176 8.49678L9.66977 8.49628L9.61193 17.6789L9.79211 17.6776L9.79045 17.9209C9.59996 17.9898 9.46766 18.1344 9.46649 18.3014C9.465 18.5333 9.71731 18.7198 10.0296 18.7179C10.3423 18.7161 10.5967 18.5265 10.5982 18.2946C10.5994 18.1272 10.4688 17.9846 10.2791 17.918L10.2804 17.6746L10.4606 17.6736L10.4684 16.4046L10.9958 16.4014L10.9869 17.782L11.5701 17.7782L11.5724 17.4181L12.0953 17.4148L12.093 17.7748L12.3849 17.7728L12.4103 17.773L13.4824 17.766L13.4884 16.7717L12.4168 16.7786L12.4213 16.0839L13.4673 16.0775L13.4718 15.34L12.4258 15.3465L12.4301 14.652L13.5276 14.6452L13.5338 13.6507L12.4362 13.6576L12.1193 13.6594L12.1166 14.0197L11.5939 14.0229L11.5962 13.6629L11.0129 13.6667L11.0043 15.0469L10.4772 15.0504L10.5185 8.49096L10.5763 8.49096C10.6584 8.48996 10.7368 8.45691 10.7949 8.39886C10.8529 8.34082 10.886 8.26239 10.887 8.18031L10.8873 8.14174C10.8875 8.10139 10.8797 8.06138 10.8644 8.02406C10.8491 7.98673 10.8265 7.95281 10.7979 7.92427C10.7694 7.89574 10.7355 7.87314 10.6981 7.8578C10.6608 7.84247 10.6208 7.83468 10.5805 7.83491L10.5223 7.83525L10.5238 7.62066L10.8948 7.23704L10.5284 6.85841L10.5308 6.50803C10.5793 6.57299 10.6325 6.63437 10.6898 6.69169C11.3686 7.37051 12.4765 7.36336 13.1636 6.67624C13.8507 5.98911 13.8577 4.88112 13.1789 4.20231C12.7208 3.74422 12.0684 3.59878 11.4805 3.7635ZM12.755 6.26469C12.646 6.37374 12.5166 6.46024 12.3742 6.51925C12.2317 6.57826 12.079 6.60863 11.9248 6.60861C11.7707 6.6086 11.618 6.5782 11.4756 6.51916C11.3331 6.46012 11.2037 6.37359 11.0947 6.26452C10.9239 6.09365 10.8105 5.87382 10.7703 5.63557L10.3562 5.63707L10.3572 5.46653C10.5474 5.39772 10.68 5.25311 10.6812 5.08607C10.6825 4.85436 10.4305 4.66721 10.1181 4.66953C9.80557 4.6712 9.55126 4.86101 9.5496 5.09305C9.54827 5.25993 9.67908 5.40304 9.86873 5.46936L9.86773 5.63989L9.45286 5.64056C9.41781 5.89016 9.3028 6.12168 9.12509 6.30043C8.96101 6.46451 8.75198 6.57628 8.52441 6.62162C8.29684 6.66696 8.06093 6.64384 7.84649 6.55518C7.63205 6.46652 7.4487 6.3163 7.31959 6.12348C7.19049 5.93067 7.12142 5.70392 7.12112 5.47188C7.12082 5.23983 7.1893 5.0129 7.3179 4.81975C7.4465 4.62661 7.62946 4.4759 7.84367 4.38669C8.05788 4.29747 8.29372 4.27374 8.52141 4.31849C8.7491 4.36324 8.95842 4.47447 9.12293 4.63812L9.63653 4.12452C9.59525 4.09615 9.55644 4.06434 9.52051 4.02944C9.39329 3.90233 9.30845 3.73901 9.27758 3.56184C9.24671 3.38466 9.27133 3.20227 9.34807 3.03962C9.42481 2.87697 9.54992 2.742 9.7063 2.65317C9.86267 2.56433 10.0427 2.52597 10.2217 2.54333C10.4007 2.56069 10.5699 2.63293 10.7063 2.75016C10.8427 2.86739 10.9396 3.02389 10.9836 3.19825C11.0277 3.37262 11.0168 3.55633 10.9524 3.72428C10.8881 3.89222 10.7735 4.03619 10.6242 4.13649L11.0936 4.60587L11.0947 4.60438C11.2037 4.49534 11.3331 4.40885 11.4755 4.34984C11.618 4.29083 11.7706 4.26045 11.9248 4.26045C12.079 4.26045 12.2316 4.29083 12.374 4.34984C12.5165 4.40885 12.6459 4.49534 12.7549 4.60438C12.864 4.71335 12.9505 4.84275 13.0096 4.98518C13.0686 5.12762 13.099 5.2803 13.0991 5.4345C13.0991 5.5887 13.0687 5.74138 13.0097 5.88383C12.9506 6.02628 12.8641 6.1557 12.755 6.26469Z" fill="url(#paint0_linear_787_1208)"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_i_787_1208" x="0" y="0" width="21.2754" height="21.3981" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="0.332464"/>
                                        <feGaussianBlur stdDeviation="0.0623369"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_787_1208"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_787_1208" x1="5.65186" y1="5.65088" x2="15.6247" y2="15.6237" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFE925"/>
                                        <stop offset="1" stop-color="#A69923"/>
                                        </linearGradient>
                                        <clipPath id="clip0_787_1208">
                                        <rect width="15.044" height="15.044" fill="white" transform="translate(0 10.6367) rotate(-45)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                : this.state.onKey ?
                                    <img src="img/Inventory/Coffre avec inscription.png" alt="Coffre" className="chestMazelImg"/>
                                : this.state.onObjects ?
                                    <Objects objects={["bonus","Cactus"]} onEnd={this.handleAfterObjects}/>
                                : this.state.onAfterObjects ?
                                    <p className="textDetails">Dépliez le parchemin !</p>
                                : this.state.onScroll ?
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
                    <Inventory useFunction={this.handleUseScroll}/>
                }
                {this.state.notif1 && <Saleugos notif={this.state.notif1} txt={txtSaleugos.txtMazel1} onClickFirst={this.handleObjects}/>}
                {this.state.notif2 && <Saleugos notif={this.state.notif2} txt={txtSaleugos.txtMazel2} onClickLast={this.handleChoice}/>}
                {!this.state.notif1 && !this.state.notif2 && <Saleugos notif={false}/>}
                {this.state.onHeaderAndFooter &&
                    <Footer />
                }

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Mazel)