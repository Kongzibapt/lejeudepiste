import React from 'react';
import "../../css/Views/direction.css"
import Compass from '../Components/Compass';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Direction extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div id="direction">
                <Header/>
                <div id="directionCompassBlock">
                    <Compass/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Direction