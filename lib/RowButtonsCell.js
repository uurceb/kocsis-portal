import React, { Component } from 'react';

class RowButtonsCell extends Component {
    constructor(props) {
        super(props);
    }
    onDelete() {
        fetch(this.props.url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.props.pId,
            })
        }).then(function () {
            console.log("oke delete");
        }).catch(function () {
            console.log("errore");
        });;
    }
    render() {
        return (<td>
            <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
            <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
            <a className="btn btn-danger btn-xs" onClick={() => this.onDelete()}><i className="fa fa-trash-o" ></i> Delete </a>
        </td>
        );
    }
}

export default RowButtonsCell;