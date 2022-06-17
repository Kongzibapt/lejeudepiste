import React from 'react';
import { Redirect } from 'react-router';
import "../../css/Views/tuto.css"
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SplittedText from '../Components/SplittedText';
import * as txtSaleugos from '../../utils/txtSaleugos';
import * as txtVoice from '../../utils/txtVoice';

class Tuto extends React.Component {

    constructor(props){
        super(props)
        this.state={
            saleugos:false,
            tuto:true,
            onFaille:false,
            salTxt:txtSaleugos.txtTuto1,
            index:0,
            onSal:false,
            salLittleTxt:txtSaleugos.txtTuto2,
            indexLittle:0
        }
    }

    componentDidMount(){
        !this.state.tuto && this.animateBack()
    }

    animateBack(){
        let head = document.getElementById("header");
        head.className = "animHead"
        let foot = document.getElementById("footer");
        foot.className = "animFoot"   
    }

    animFaille = () => {
        this.setState({onFaille:true,tuto:false},()=>{
            setTimeout(()=>{
                this.setState({onFaille:false,saleugos:true},()=>{
                    this.animateBack()
                })
            },7000)
        })
    }

    animBulle = () => {
        let notifPush = document.getElementById("notifPush")
        notifPush.className = "notifPushOut"
        let blackFace = document.getElementById("blackFace")
        blackFace.className = "blackfaceOut"
        this.setState({onSal:true},() =>{
            let salBlockBullet = document.getElementById("salBlockBullet")
            salBlockBullet.className = ""
            let triangleBullet = document.getElementById("triangleBullet")
            triangleBullet.className = ""
            let salBulletTxt = document.getElementById("salBulletTxt")
            salBulletTxt.className = ""
            let salBulletTap = document.getElementById("salBulletTap")
            salBulletTap.style.cssText = ""
        })
    }

    changeContent = () => {
        if (this.state.index === this.state.salTxt.length-1){
            this.setState({index:this.state.index+1})
            let tap = document.getElementById("salBulleTap")
            tap.style.cssText = 'animation:none'
            let salBulleBlock = document.getElementById("salBulleBlock")
            salBulleBlock.id = "salBulleBlockInv"
            setTimeout(()=>{
                salBulleBlock.className = "salBulleBlockInv"
            },100)
            let salTriangleBlock = document.getElementById("salTriangleBlock")
            salTriangleBlock.id = "salTriangleBlockInv"
            setTimeout(()=>{
                salTriangleBlock.className = "salTriangleBlockInv"
            },100)
            let salTriangle = document.getElementById("salTriangle")
            salTriangle.className = "salTriangleDisappear"
            let salBulleTxt = document.getElementById("salBulleTxt")
            salBulleTxt.id = "salBulleTxtInv"
            setTimeout(()=>{
                salBulleTxt.className = "salBulleTxtInv"
            },100)
            let salBulleTapBlock = document.getElementById("salBulleTapBlock")
            salBulleTapBlock.id = "salBulleTapBlockInv"
            setTimeout(()=>{
                salBulleTapBlock.className = "salBulleTapBlockInv"
            },100)
            let salBox = document.getElementById("salBox")
            salBox.style.cssText = "animation: shrink 1s 2.9s both"
            let salBlock = document.getElementById("salBlock")
            salBlock.id = "salBlockMigrate"
            setTimeout(()=>{
                salBlock.className = "salBlockMigrate"
            },3000)
            let blackFace = document.getElementById("blackFace")
            blackFace.className = "blackFaceIn"
            let notifPush = document.getElementById("notifPush")
            notifPush.className = "notifPushIn"
        }else if (this.state.index < this.state.salTxt.length-1){
            this.setState({index:this.state.index+1})
        }
    }

    changeContentLittle = () => {
        if (this.state.indexLittle === this.state.salLittleTxt.length-1){
            this.setState({indexLittle:this.state.indexLittle+1})
            let salBulletTriangle = document.getElementById('salBulletTriangle')
            salBulletTriangle.id = "salBulletTriangleInv"
            setTimeout(()=>{
                salBulletTriangle.className = "salBulletTriangleInv"
            },100)
            let salBulletBox = document.getElementById("salBulletBox")
            salBulletBox.id = "salBulletBoxInv"
            setTimeout(()=>{
                salBulletBox.className = "salBulletBoxInv"
            },100)
            let salBulletTapBlock = document.getElementById("salBulletTapBlock")
            salBulletTapBlock.id = "salBulletTapBlockInv"
            setTimeout(()=>{
                salBulletTapBlock.className = "salBulletTapBlockInv"
            },100)
            setTimeout(()=>{
                this.setState({redirect: true})
            },2000)
        }else if (this.state.indexLittle < this.state.salLittleTxt.length-1){
            this.setState({indexLittle:this.state.indexLittle+1})
        }
    }

    render() {
        if (this.state.redirect){
            return(
                <Redirect to="kiosqueenigma"/>
            )
        }
        return (
            <div className="enigma">
                {this.state.tuto ?
                <>
                <div className="backTuto" style={{background:"url(../../img/Kiosque.png)","backgroundRepeat":"no-repeat","backgroundPositionX":"center","backgroundSize": "cover"}}></div>            
                    <div className="tutoContainer">
                        <div className="transpBlock">
                            <div className="transpBox">
                                <SplittedText tabtxt={txtVoice.txtTuto}/>
                            </div>
                        </div>
                        <Button text="En avant Guinguamp" color="green" onClick={this.animFaille}/>
                    </div>
                </>
                : this.state.onFaille ?
                <>
                <div id="backTutoFaille" style={{background:"url(../../img/Kiosque.png)","backgroundRepeat":"no-repeat","backgroundPositionX":"center","backgroundSize": "cover"}}></div>
                <div id="backTutoBlack"></div>
                    <div id="kio">
                        <div id="leftKioBlock">
                            {/* <img id="leftKio" src="img/KioGau.png" alt="kiogau"/> */}
                        </div>
                        <div id="rightKioBlock">
                            {/* <img id="rightKio" src="img/KioDroi.png" alt="kiodroi"/> */}
                        </div>
                    </div>
                    <div id="failleBlock">
                        <svg id="faille" viewBox="0 0 116 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i)">
                                <path d="M62.3189 0L62.3862 0.0646813L46.0589 84.561L48.4323 113.676L43.5371 129.567V135.715L62.376 151.491L72.3146 224.684L50.509 317.945V328.964L52.5116 337.664V348.567L66.9003 378.726L66.8261 386.962L46.0589 410.156L48.5 457.031L62.5 470.312L66.5 478.125L54.9591 512.818L66.8261 519.313L56.0717 546.804L69.5704 563.624L46.0589 585.199L51.2507 605.15L37.307 627.885L47.9873 641.109L34.0435 666.28L33.2277 683.679L39.2353 731.702L73.6497 798.979L66.0103 824.266L96.9387 875.073L91.5243 957.778L116 1000H2L45.5397 891.312L19.4323 842.826L34.711 809.071L12.5346 754.716V684.607L0.0742188 666.86L23.5857 643.545L11.1995 628.929L34.711 600.742L30.4093 578.123L52.3632 563.972L40.0512 550.748L52.4374 528.361L42.2763 522.677L57.4809 476.395L39.0128 465.375V404.825L56.0717 386.962L42.2021 352.511V336.272L37.8261 324.556L62.1535 228.396L51.6215 159.842L31.9668 138.499L42.9438 107.528L40.0512 87.3448L62.3189 0Z" fill="url(#pattern2)"/>
                            </g>
                            <defs>
                                <filter id="filter0_i" x="0.0742188" y="0" width="119.926" height="1004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="14" dy="19"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                                </filter>
                                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#image2" transform="translate(-1.92612) scale(0.0134784 0.0015625)"/>
                                </pattern>
                                <image id="image2" width="360" height="640" href="img/Fond.png"/>
                            </defs>
                        </svg>
                    </div>
                    
                </>
            : this.state.saleugos ?
            <>
                <div id="blackFace"></div>
                <div className="home">
                <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité","Paramètres","Statistiques","Contact"]} no_escape={true}/>
                    {this.state.onSal ?
                        <div id="salBlockBottom">
                            <div id="salBoxBullet">

                            </div>
                            <div id="salBlockBullet">
                                <div id="salBulletTriangle">
                                    <img id="triangleBullet" src="img/Triangle.png" alt="triangle"/>
                                </div>
                                <div id="salBulletBox" onClick={this.changeContentLittle}>
                                    <p id="salBulletTxt">{this.state.salLittleTxt[this.state.indexLittle]}</p>
                                    <div id="salBulletTapBlock">
                                        <img id="salBulletTap" src="img/Lecture.png" alt="tap"/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        : 
                        <div id="salBlock">
                            <div id="salBox" onClick={this.animBulle}>
                                <div id="notifPush"></div>
                            </div>
                            <div id="salBulleBlock">
                                <div id="salTriangleBlock">
                                    <img id="salTriangle" src="img/Triangle.png" alt="triangle"/>
                                </div>
                                <div id="salBulleBox" onClick={this.changeContent}>
                                    <p id="salBulleTxt">{this.state.salTxt[this.state.index]}</p>
                                    <div id="salBulleTapBlock">
                                        <img id="salBulleTap" src='img\Lecture.png' alt='tap'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    <Footer/>
                </div>
            </>
            : null}
        </div>
        
        )
    }
}

export default Tuto