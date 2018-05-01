import React, { Component } from 'react';

class CartCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.cartPanelStyle}>
                {/* <div className="">

                <button className="proceedBtn btn btn-primary">
                    Proceed
                </button>
            </div> */}


                <span className={`${this.props.cartPriceLblStyle || ''} font-weight-bold label label-success px-2`}>$ 151.00</span>
                <div className={this.props.cartBtnWrapper}>
                    <button className={this.props.cartBtnStyle}>
                        <i className="fa fa-shopping-cart cart-icon-size"></i> <span className="d-md-inline-block d-none"> Proceed</span>
                    </button>
                </div>

            </div>
        );
    }
}

export default CartCard;