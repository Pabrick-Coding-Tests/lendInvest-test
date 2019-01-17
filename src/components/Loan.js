import React from 'react';

class Loan extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <article id={`loan${data.id}`} className="loan">
                <p>Title: {data.id}</p>
                <p>Available Amount: {data.available}</p>
                <button>Invest</button>
            </article>
        );
    }
}

export default Loan;