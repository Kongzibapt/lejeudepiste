import React from 'react';
import "../../css/Components/casesToFill.css"

 class CasesToFill extends React.Component {

  // ---------------------------------- PROPS ----------------------------------
  // nbCases : nombre de cases à remplir
  // code : code à déchiffrer
  // title : titre du code à déchiffrer
  // returnResult : fonction à déclencher si le code est correct

    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount(){
        this.putMarginOnCases();
        this.handleSize();
  }

  handleSize = () => {
    if (this.props.nbCases > 9){
      let cases = document.getElementsByClassName("case");
      for (let i = 0; i < this.props.nbCases-1;i++){
        cases[i].style.cssText += "width:15px;height:23px;"
      }
    }
  }

  putMarginOnCases = () => {
    let cases = document.getElementsByClassName("case");
    for (let i = 0; i < this.props.nbCases-1;i++){
        if (window.innerWidth > 426){
          cases[i].style.cssText += "margin-right:8px;"
        }else if (this.props.nbCases > 9){
          cases[i].style.cssText += "margin-right:3px;"
        } else {
          cases[i].style.cssText += "margin-right:5px;"
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
      console.log(currentLetter);
      console.log(this.props.code[i])
      if (currentLetter === this.props.code[i]){
        answerCasesBlock.childNodes[i].className = "greenCase"
      } else if(i !== this.props.clue){
        answerCasesBlock.childNodes[i].className = "redCase"
      }
      i === this.props.clue ? word += this.props.code[i] : word += currentLetter;
    }
    if (this.codeFound(word)){
      this.props.returnResult(true);
    }
  }

  codeFound = (word) => {
    console.log(word);
    let codeGood = true;
    let i = 0;
    while (codeGood && i < this.props.code.length){
      if (this.props.code[i] !== word[i] && i !== this.props.clue){
        codeGood = false;
      }
      i++;
    }
    console.log(codeGood);
    return codeGood;
  }

  handleChange = (e) => {
    
    if (e.target.value !== ""){
      e.target.nextSibling != null && e.target.nextSibling.focus()
    }
  }
    



    render() {
        const cases = [];
        for (let i = 0; i < this.props.nbCases;i++){
            if (this.props.clue && this.props.clue === i){
              cases.push(
                <p key={i} className="clueCase">{this.props.code[i]}</p>
              )
            } else {
            cases.push(
                <input key={i} className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            )
            }
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