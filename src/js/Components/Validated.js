import React from "react"
import "../../css/Components/validated.css"

class Validated extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }





    render(){
        return(
            <div className="validationBlock">
                <svg className="validateSvg" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path d="M30 44L45.3308 64.6008C45.6874 65.0799 46.3818 65.1417 46.8174 64.7329L78.5 35M100 50C100 75.4051 79.4051 96 54 96C28.5949 96 8 75.4051 8 50C8 24.5949 28.5949 4 54 4C79.4051 4 100 24.5949 100 50Z" stroke={this.props.dark_theme ? "black" : "white"} strokeWidth="8"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className="validateTxtBlock">
                    <p className={this.props.dark_theme ? "validateDarkTxt" : "validateLightTxt"}>{this.props.txt}</p>
                </div>
            </div>
        )
    }

}

export default Validated