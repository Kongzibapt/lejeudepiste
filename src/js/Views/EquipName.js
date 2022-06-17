import React from 'react';
import {Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import "../../css/Views/equipname.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {change} from '../../features/teamName/teamNameSlice';
import Button from '../Components/Button';
import Input from '../Components/Input';

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
            teamName:'',
            errors:"",
            redirect:false
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleTeamNameChange = e => {
        this.setState({teamName:e.target.value},()=>{
            console.log(this.state.teamName);
        })
    }

    handleSubmit = (e) => {
        this.props.change(this.state.teamName);
        this.setState({redirect:true})
    }

    handleKeyPress = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            this.handleSubmit();
        }
    }


    render() {
        if (this.state.redirect){
        return(<Redirect to="/secu"/>) 
        } else{
      return (
        <div className="home">
            <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité","Paramètres","Statistiques","Contact"]} no_escape={true}/>
            <div className="transpBlock">
                <div className="transpBox">
                    <p className="equipNameTxt">Première énigme...</p>
                    <div className="equipInputContainer" onKeyPress={this.handleKeyPress}>
                        <Input enter={this.handleSubmit} change={this.handleTeamNameChange} size="20" title="Quel est le nom de votre équipe ?" errors={this.state.errors} submit={this.handleSubmit}/>
                    </div>
                </div>
            </div>
            <Button onClick={this.handleSubmit} text="Let's Go !" color="green"/>
            <Footer/>
        </div>
      )
        }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(EquipName)