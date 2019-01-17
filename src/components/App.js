import React from 'react';
import './../styles/App.css';

import Header from './Header'
import Loan from './Loan';
import Popup from './Popup';

class App extends React.Component {

  render() {
    let data = require('./../data/current-loans.json');
    let listLoans = data.loans.map( (loan, i) => {
      return (<Loan data={loan} key={i}/>);
    } );

    return (
      <div className="app-wrapper">

        <Header title = "Current Loans" />

        <section className="loans-wrapper">         
          { listLoans }
        </section>

        <div className="overlay">
          <Popup />
        </div>

        
      </div>
    );
  }
}

export default App;
