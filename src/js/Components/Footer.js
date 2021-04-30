import React from 'react';
import "../../css/Components/footer.css"

 class Footer extends React.Component {
    render() {
      return (
            <div id="footer">
                <div id="footerBlock">
                    <p className="footerTxt">Tous droits réservés</p>
                    <p className="footerTxt">Baptiste MARTY & David ANDREAN</p>
                    <p className="footerTxt">Copyright @</p>
                </div>
            </div>
      )
    }
  }

  export default Footer