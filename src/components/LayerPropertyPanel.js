import React, { Component } from 'react';

class LayerPropertyPanel extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="layer-property-panel component">
            <div id="materialCaption" className="control_label"><i className="fa fa-th" aria-hidden="true"></i> Select Material</div>
            <div id="colorCaption" className="control_label"><i className="fa fa-paint-brush" aria-hidden="true"></i> Select Color</div>
        </div>);
    }
}

export default LayerPropertyPanel;