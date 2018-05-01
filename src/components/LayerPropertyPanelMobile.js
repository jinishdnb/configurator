import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};



export default class LayerPropertyPanelMobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        var tabStyle = {backgroundColor:"#dddddd",color:"#000000",fontFamily:"Arial",fontWeight:"bold"};
        return (
            <div className="">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    inkBarStyle={{backgroundColor:"#000000"}}
                    /* style={{height:"35px"}} */
                >
                    <Tab style={tabStyle} buttonStyle={{height:"35px"}} label="Select Material" value={0} />
                    <Tab style={tabStyle} buttonStyle={{height:"35px"}} label="Select Color" value={1} />
                    {/* <Tab label="Tab Three" value={2} /> */}
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        slide n°1
                    </div>
                    <div style={styles.slide}>
                        slide n°2
          </div>
                    <div style={styles.slide}>
                        slide n°3
          </div>
                </SwipeableViews>
            </div>
        );
    }
}
LayerPropertyPanelMobile.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};