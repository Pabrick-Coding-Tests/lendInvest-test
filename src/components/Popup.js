import React from 'react';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.refInputAmount = React.createRef();
    }

    investLoan = (e) => {
        e.preventDefault();
        this.props.investLoan({
            id: this.props.data.id,
            amountInvested: this.refInputAmount.current.value
        });
        e.currentTarget.reset();
    };

    onChangeValue = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <form className="popup" onSubmit={this.investLoan}>
                <div className="campo">
                    <p>Title: {this.props.data.id}</p>
                    <p>Available Amount: {this.props.data.available}</p>

                    <label>Invested amount (£)</label>
                    <input
                        type="text"
                        name="invest"
                        placeholder="0"
                        onChange={this.onChangeValue}
                        ref={this.refInputAmount} />
                </div>

                <button type="submit" className="boton">Invest Now</button>
            </form>
        );
    }
}

export default Popup;