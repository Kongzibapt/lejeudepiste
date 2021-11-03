import React from 'react';
import "../../css/Components/casesToFill.css"

 class CasesToFill extends React.Component {


    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount(){
        this.putMarginOnCases();
  }

  putMarginOnCases = () => {
    let cases = document.getElementsByClassName("case");
    for (let i = 0; i < this.props.nbCases-1;i++){
        if (window.innerWidth > 426){
            cases[i].style.cssText = "margin-right:8px;"
        }else{
            cases[i].style.cssText = "margin-right:5px;"
        }
    }
  }

  handleKeyUp = (e) => {
    if (e.key === "Backspace"){
      e.target.previousSibling != null && e.target.previousSibling.focus()
    } else if (e.target.value !== "") {
      if  (e.target.nextSibling != null){
        e.target.nextSibling.focus()
        e.target.nextSibling.value = e.key
      }
    }
    if (e.key === "Enter"){
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    let answerCasesBlock = document.getElementsByClassName("answerCasesBlock")[0];
    let currentLetter = '';
    let word = ""
    for (let i = 0 ; i < answerCasesBlock.childElementCount; i++) {
      currentLetter = answerCasesBlock.childNodes[i].value.toUpperCase();
      if (currentLetter === this.props.code[i]){
        answerCasesBlock.childNodes[i].className = "greenCase"
      } else {
        answerCasesBlock.childNodes[i].className = "redCase"
      }
      word += currentLetter;
    }
    if (word === this.props.code){
    //   this.setState({notif:true})
        this.props.returnResult(true);
    }
  }

  handleChange = (e) => {
    
    if (e.target.value !== ""){
      e.target.nextSibling != null && e.target.nextSibling.focus()
    }
  }
    



    render() {
        const cases = [];
        for (let i = 0; i < this.props.nbCases;i++){
            cases.push(
                <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            )
            
            // i !== this.props.nbCases && (cases[i].props.set("style={{margin-right:10px}}"));
        }
        return (
            <div className="casesToFill">
                <div className="answerTitleBlock">
                    <p className="answerTitleTxt">{this.props.title}</p>
                </div>
                <form className="answerCasesBlock" method="post">
                    {cases}
                </form>
            </div>
        )
    }
  }

  export default CasesToFill