import React from 'react';

class Loan extends React.Component {

    openPopup = (event) => {
        event.preventDefault();
        this.props.investLoan({
            id: this.props.data.id,
            available: this.props.data.available
        });
    }

    render() {
        const data = this.props.data;
        return (
            <article id={`loan${data.id}`} className="loan" onClick={this.openPopup}>
                <p>Title: {data.id}</p>
                <p>Available Amount: {data.available}</p>
                <button>Invest</button>
            </article>
        );
    }
}

export default Loan;