import React from 'react';
import { connect } from 'react-redux';
import "../../css/Views/test.css"
import Button from '../Components/Button';
import CasesToFill from '../Components/CasesToFill';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Input from '../Components/Input';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import Validated from '../Components/Validated';
import {start} from '../../features/time/timeSlice';
import Inventory from '../Components/Inventory';
import Bonus from '../Components/Bonus';
import Choice from '../Components/Choice';
import SplittedText from '../Components/SplittedText';
import Saleugos from '../Components/Saleugos';
import Compass from '../Components/Compass';


const mapStateToProps = (state) => {
  return {
      time:state.time.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      start : ()=>{dispatch(start())}
  }
}

 class Test extends React.Component {


    constructor(props){
        super(props)
        this.state={
          onInventory:false,
          onBonus:false,
          tabtxt:[
          {"txt":"Nous sommes au centre du Kiosque du Jardin Public de Rodez. Avant de débuter le jeu de piste, nous allons appréhender le fonctionnement de l'application. Notre petit Saleugos va vous aider !",
          "sec":3},
          {"txt":"Vous sommes au centre du Kiosque du Jardin Public de Rodez. Avant de débuter le jeu de piste, nous allons appréhender le fonctionnement de l'application. Notre petit Saleugos va vous aider !",
          "sec":3},
          {"txt":"Ils sommes au centre du Kiosque du Jardin Public de Rodez. Avant de débuter le jeu de piste, nous allons appréhender le fonctionnement de l'application. Notre petit Saleugos va vous aider !",
          "sec":3},
          ],
          saleugosTxt:["Vous avez gagné une boussole ! je la range dans l'inventaire elle nous sera utile !",
          "Vous pouvez la ranger dans votre sac !",
          "Maintenant  dirigez vous vers le musée Soulages,",
          "ne vous arrêtez pas aux jeux pour enfants,",
          "vous n'avez pas le temps pour ça, en plus vous êtes trop vieux.",
          "Suivez toujours la flèche rouge de la boussole,",
          "elle vous ammènera à la clé de l'énigme.",
          "Vous pouvez aussi choisir de vous débrouiller tout seul, comme des grands,",
          "ça vous fera gagner du temps !"
          ],
        }
    }

    componentDidMount(){
      
  }

    
  resultOfCases = (result) => {

  }

  startTimer = () =>{
    setInterval(()=>
    {
        this.props.start();
    },1000)
  }

  handleInventory = () => {
    this.setState({onInventory:!this.state.onInventory});
    if (this.state.onBonus){
      this.setState({onBonus:!this.state.onBonus});
    }
  }

  handleBonus = () => {
    this.setState({onBonus:!this.state.onBonus});
    if (this.state.onInventory){
      this.setState({onInventory:!this.state.onInventory});
    }
  }


    render() {
      return (
        <div id="home">
            <Header title="L'ingrédient secret" dark_theme={false} menuItems={["Contact"]} no_escape={true}/>
            <InventoryTimeBonus handleInventory={this.handleInventory} handleBonus={this.handleBonus}/>
            {/* <Inventory display={this.state.display}/> */}
            {/* <div style={{height:"150px",zIndex:"1",display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}> */}
              {/* <Validated txt="Trouvé !" dark_theme={false}/> */}
              {/* <Input/> */}
              {/* <Button text="Ok" color="red" link="/direction" onClick={this.startTimer}/> */}
              {/* <CasesToFill nbCases={10} code="1234" title="Code" returnResult={this.resultOfCases}/> */}
              
            {/* </div> */}
            {!this.state.onInventory && !this.state.onBonus &&
            <div className = "testContent" >
              <div className="testBlock" >
                {/* <Choice title="Musée Soulages" src="img/Soulages.png"/> */}
                {/* <SplittedText tabtxt={this.state.tabtxt}/> */}
                <Compass/>
              </div>
            </div> 
            } 
            {this.state.onBonus && !this.state.onInventory &&
            <Bonus/> 
            }
            {!this.state.onBonus && this.state.onInventory &&
            <Inventory/>
            }
            <Saleugos txt={this.state.saleugosTxt}/>
            <Footer dark_theme={false}/>
        </div>
      )
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Test)