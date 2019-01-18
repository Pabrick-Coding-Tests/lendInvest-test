import React from 'react';
import './../styles/App.css';

import Header from './Header'
import Loan from './Loan';
import Popup from './Popup';

class App extends React.Component {

  state = {
    loans: [],
    selectedLoan: {
      id: 0,
      available: 0
    },
    popUpOpen: false
  };

  componentWillMount() {
    const data = require('./../data/current-loans.json').loans;
    const loans = data.map(loan => {
      loan.id = this.stringToFloat(loan.id);
      loan.available = this.stringToFloat(loan.available);
      loan.amount = this.stringToFloat(loan.amount);
      loan.annualised_return = this.stringToFloat(loan.annualised_return);
      loan.ltv = this.stringToFloat(loan.ltv);
      return loan;
    });
    this.setState( {loans: loans} );
  }

  stringToFloat(string) {
    return parseFloat((string).replace(',',''));
  }

  openLoan = loan => {
    this.setState({
      selectedLoan: loan,
      popUpOpen: true
    });
  };

  investLoan = loan => {
    const newInvestment = this.state.loans.map(
      iterativeLoan => {
        if(iterativeLoan.id === loan.id) {
          iterativeLoan.available = iterativeLoan.available - loan.amountInvested
        }
        return iterativeLoan
      }
    );
    this.setState({
      loans: newInvestment,
      popUpOpen: false
    });
  }

  render() {
    let listLoans = this.state.loans.map( (loan, i) => {
      return (<Loan data={loan} key={i} investLoan={this.openLoan} />);
    } );

    // this.setState({ loans: loans });

    return (
      <div className="app-wrapper">

        <Header title = "Current Loans" />

        <div className={`overlay ${this.state.popUpOpen ? 'open': 'close'}`}>
          <Popup data={this.state.selectedLoan} investLoan={this.investLoan} />
        </div>

        <section className="loans-wrapper">
        { listLoans }
        </section>

        
      </div>
    );
  }
}

export default App;
