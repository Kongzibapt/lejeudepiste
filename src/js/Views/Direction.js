import React from 'react';
import "../../css/Views/direction.css"
import Compass from '../Components/Compass';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import {bonus} from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import Button from '../Components/Button';

const mapStateToProps = (state) => {
    return {
        time:state.time.value
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        bonus : (value)=>{dispatch(bonus(value))}
    }
  }

class Direction extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    bonus = () => {
        this.props.bonus(2);
    }

    malus = () => {
        this.props.bonus(-2);
    }

    render(){
        return(
            <div id="direction">
                <Header title="L'ingrédient secret" dark_theme={false} menuItems={["Contact"]} no_escape={true}/>
                <div id="directionCompassBlock">
                    {/* <Compass/> */}
                    <Button color="green" text="Bonus" link="" onClick={this.bonus}/>
                    <InventoryTimeBonus/>
                    <Button color="red" text="Malus" link="" onClick={this.malus}/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Direction)