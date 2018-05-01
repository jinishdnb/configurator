import React, { Component } from 'react';
import CartCard from './CartCard';

class Header extends Component {

    state = {
        panelWidth: {
            width: "0%"
        }
    }

    constructor(props) {
        super(props);
    }

    openNav = () => {
        this.setState(
            {
                panelWidth: {
                    width: "100%"
                }
            }
        )
    }
    closeNav = () => {
        this.setState(
            {
                panelWidth: {
                    width: "0%"
                }
            }
        )
    }

    render() {
        return (
            <div id="header" className="openNav col-sm-12 p-0">
                {/*nav panel*/}
                <div id="mySidenav" style={this.state.panelWidth} className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                {/*nav panel*/}

                <div className="d-flex mb2">
                    <div className="d-inline-block d-lg-none d-md-none d-sm-block d-xl-none mr-auto">
                        <button className="btn btn-light  p-2 m-1" onClick={this.openNav}><i className="fa fa-bars my-1"></i></button>
                    </div>
                    <div className="d-none d-lg-flex d-md-flex d-sm-inline-block d-xl-flex flex-md-grow-1 flex-lg-grow-1 flex-xl-grow-1 mb-5">
                        <button className="btn btn-default p-2 m-1"><i className="fa fa-text-height"></i> <span className="d-lg-inline-block d-md-inline-block d-none d-xl-inline-block"> Edit Text</span></button>
                        <button className="btn btn-default p-2 my-1 mr-1"><i className="fa fa-upload"></i> <span className="d-lg-inline-block d-md-inline-block d-none d-xl-inline-block">Upload Image</span></button>
                        <button className="btn btn-default p-2 my-1 mr-1 mr-sm-1 mr-md-auto"><i className="fa fa-lightbulb-o"></i> <span className="d-lg-inline-block d-md-inline-block d-none d-xl-inline-block">Design Idea</span></button>
                        <button className="btn btn-default p-2 my-1 mr-1"><i className="fa fa-floppy-o"></i> <span className="d-lg-inline-block d-md-inline-block d-none d-xl-inline-block">Save</span></button>
                        <button className="btn btn-default p-2 my-1 mr-1"><i className="fa fa-question-circle-o"></i> <span className="d-lg-inline-block d-md-inline-block d-none d-xl-inline-block">Help</span></button>
                    </div>

                     <div className="d-sm-inline-block d-md-none "><CartCard cartPanelStyle="cart-header-container" cartBtnWrapper="d-inline" cartBtnStyle="btn btn-success"/></div>
                </div>

               

            </div>
        )
    }

}

export default Header;