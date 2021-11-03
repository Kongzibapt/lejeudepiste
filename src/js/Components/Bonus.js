import React from "react"
import "../../css/Components/bonus.css";

class Bonus extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }

    componentDidMount(){
    }



    render(){
        return(
            <div className="parchemin">
                <div className="parcheminBlock">
                    <div className="parcheminTitle">
                        <p className="parcheminTxt">Bonus</p>
                    </div>
                </div>      
            </div>
        )
    }

}

export default Bonus