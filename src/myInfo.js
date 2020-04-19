import React from 'react';

class myInfo extends React.Component {
  
    render(){
      console.log('my information page')
      return(
        <div style={styles.myInfoPageStyle}>
          my information
        </div>
      );
    }
}

const styles = {
    myInfoPageStyle : {
      marginTop : '60px',
      width : '75vw',
      height : '90vh',
      border : 'solid',
      backgroundColor : 'lightgrey'
    }
}

export default myInfo;