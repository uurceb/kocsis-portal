import React, { Component } from 'react';


class Modal extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.onClose()}><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={()=>this.props.onClose()}>Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.onSubmit()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;