//Functional Component
import React from 'react';
import './HeaderText.css';

function HeaderText({ Title, Description1, Description2, Break }) {
  return(
  <React.Fragment>
      <div className='hText_container'>
          <h1 className='Text_header'>{Title}</h1>
          <p className='Text_desc1'>{Description1}</p>
          <p className='Text_desc2'>{Description2}</p>
          {(Break) ? <div style={ {display: "flex", justifyContent: "center", marginBottom: "20px"}}> <hr style={ {borderBottom: "1px solid #ececec", width: "80%", marginTop: "40px"} }></hr> </div> : <div/>}
      </div>
      
  </React.Fragment>);
}

export default HeaderText;
