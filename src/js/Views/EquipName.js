import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../../css/Views/equipname.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {change} from '../../features/teamName/teamNameSlice';

const mapStateToProps = (state) => {
    return {
        teamName:state.teamName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change : (value)=>{dispatch(change(value))}
    }
}



 class EquipName extends React.Component {

    constructor(props){
        super(props)
        this.state={
            teamName:''
        }
    }

    handleTeamNameChange = e => {
        this.setState({teamName:e.target.value})
    }

    handleSubmit = (e) => {
        this.props.change(this.state.teamName)
    }


    render() {
      return (
        <div id="home">
            <Header/>
            <div id="transpBlock">
                <div id="transpBox">
                    <div id="equipNameBlock">
                        <p id="equipNameTxt">Entrez votre nom d'équipe</p>
                    </div>
                    <div id="equipNameInputBlock">
                        <form>
                            <input id="equipNameInput" onChange={this.handleTeamNameChange} type="text"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="buttonBlock">
                <Link id="link" to="/secu" onClick={this.handleSubmit}>
                    <div id="greenButton">
                        <p id="buttonTxt">Suivant</p>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
      )
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(EquipName)