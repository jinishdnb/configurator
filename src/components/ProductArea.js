import React, { Component } from 'react';
import LayerPropertyPanelMobile from './LayerPropertyPanelMobile';
class ProductArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product-area position-relative component">
                <div className="d-md-none d-sm-inline-block p-0 w-100">
                    <LayerPropertyPanelMobile />
                </div>
                <div className="fixed-bottom position-absolute text-center font-weight-bold py-2"><span>{this.props.productName}</span></div>
            </div>
        )
    }
}
export default ProductArea;