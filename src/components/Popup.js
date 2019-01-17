import React from 'react';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.refInputAmount = React.createRef();
    }

    investLoan = (e) => {
        e.preventDefault();

        const infoAuto = {
            brand: this.refBrand.current.value,
            year: this.refYear.current.value,
            plan: this.refRadioBasic.current.checked ? this.refRadioBasic.current.value : this.refRadioComplete.current.value
        };

        this.props.data(infoAuto);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form className="popup" onSubmit={this.investLoan}>
                <div className="campo">
                    <label>Invested amount (£)</label>
                    <input
                        type="text"
                        name="invest"
                        value="0"
                        ref={this.refInputAmount} />
                </div>

                <button type="submit" className="boton">Invest Now</button>
            </form>
        );
    }
}

export default Popup;