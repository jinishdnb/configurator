import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import ProductArea from './components/ProductArea';
import ActionButton from './components/ActionButton';
import ProductView from './components/ProductView';
import ViewLayers from './components/ProductView/ViewLayers';
import LayerPropertyPanel from './components/LayerPropertyPanel';
import LayerPropertyPanelMobile from './components/LayerPropertyPanelMobile';
import CartCard from './components/CartCard';
import '@fortawesome/fontawesome';


const App = function () {


    return (
        <div className="design-tool mx-lg-3 row w-100 mx-auto">
            <Header />

            <div className="col-sm-9 p-0">
                <ProductArea productName="Simple Product" />
                <ActionButton />
                <ProductView />
            </div>
            {/* <ViewLayers /> */}
            <div className="col-sm-3 d-lg-block d-md-block d-none p-0">
                <LayerPropertyPanel />
                <CartCard cartPanelStyle="cart-card component" cartPriceLblStyle="d-block mt-5 text-center cart-price-lbl" cartBtnStyle="proceedBtn btn btn-success" cartBtnWrapper="d-block fixed-bottom pb-4 position-absolute text-center" />
            </div>
            <div>
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector("#designTool"))