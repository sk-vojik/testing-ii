import React from 'react';

class Dashboard extends React.Component {


  render() {
    return(
      <>
        

        <div className="display">
          <p data-testid="ball-count">Balls: {this.props.balls}</p>
          <p data-testid="strike-count">Strikes: {this.props.strikes}</p>
        </div>

       
      </>
    )
  }
}

export default Dashboard;