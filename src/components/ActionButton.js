import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContentAdd from 'material-ui/svg-icons/content/add';

class ActionButton extends Component{
    state = {
        showHideBtnPanel: 'd-none',
        showHideBtnFlag: 0
    }

    constructor(props){
        super(props);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    showHideButtons = () => {
        var flag = this.state.showHideBtnFlag;
        this.setState({
            showHideBtnPanel: !flag ? 'animated bounceInUp' : 'animated bounceOutDown',
            showHideBtnFlag: !flag
        })
    }

    render(){
        return(
            <div className="position-relative component">
                <div className="d-md-none d-sm-inline-block fixed-bottom position-absolute pr-2 text-right">
                    <div id="buttonPanel" className={this.state.showHideBtnPanel}>
                        <div className="m-2">
                            <FloatingActionButton backgroundColor={"#000000"} mini={true}><i className="fa fa-text-height"></i></FloatingActionButton>
                        </div>
                        <div className="m-2">
                            <FloatingActionButton backgroundColor={"#000000"} mini={true}><i className="fa fa-upload"></i></FloatingActionButton>
                        </div>
                        <div className="m-2">
                            <FloatingActionButton backgroundColor={"#000000"} mini={true}><i className="fa fa-lightbulb-o"></i></FloatingActionButton>
                        </div>
                        <div className="m-2">
                            <FloatingActionButton backgroundColor={"#000000"} mini={true}><i className="fa fa-floppy-o"></i> </FloatingActionButton>
                        </div>
                        <div className="m-2">
                            <FloatingActionButton backgroundColor={"#000000"} mini={true}><i className="fa fa-question-circle-o"></i></FloatingActionButton>
                        </div>
                    </div>
                    <div className="my-1">
                        <FloatingActionButton backgroundColor={"#000000"} onClick={() => { this.showHideButtons() }}>{
                            this.state.showHideBtnFlag ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>
                        }</FloatingActionButton>
                    </div>
                </div>
            </div>
        )
    }
}

ActionButton.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default ActionButton;