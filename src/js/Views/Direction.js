import React from 'react';
import "../../css/Views/direction.css"
import Compass from '../Components/Compass';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import { bonus } from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Saleugos from '../Components/Saleugos';
import Bonus from '../Components/Bonus';
import Inventory from '../Components/Inventory';


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

class Direction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            onBonus:false,
            onInventory:false,
        }
    }


    bonus = () => {
        this.props.bonus(2);
    }

    malus = () => {
        this.props.bonus(-2);
    }

    handleInventory = () => {
        this.setState({onInventory:!this.state.onInventory});
        if (this.state.onBonus){
          this.setState({onBonus:!this.state.onBonus});
        }
      }
    
      handleBonus = () => {
        this.setState({onBonus:!this.state.onBonus},()=>console.log(this.state));
        if (this.state.onInventory){
          this.setState({onInventory:!this.state.onInventory});
        }
      }

    render() {
        return (
            <div className="home">
                <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité", "Paramètres", "Statistiques", "Contact"]} no_escape={true} />
                <InventoryTimeBonus handleInventory={this.handleInventory} handleBonus={this.handleBonus}/>
                {!this.state.onInventory && !this.state.onBonus &&
                <div className="transpBlock">
                    <div className="transpBox">

                    <Compass/>
                    <Button text="J'y suis" color="green" link={"/"+window.location.href.split("/")[5]}/>
                    </div>


                </div>}
                {this.state.onBonus && !this.state.onInventory &&
                    <Bonus/>
                }
                {!this.state.onBonus && this.state.onInventory &&
                    <Inventory/>
                }
                <Saleugos/>
                <Footer/>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Direction)