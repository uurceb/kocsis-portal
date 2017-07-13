import React, { Component } from 'react';
import Modal from '../../lib/Modal'

class ProjectAddModal extends Component {
    constructor(props) {
        super(props);
        this.state = { formData: { projectName: '', customer: '', projectPhase: '', description: '' } }
    }
    onDataChange(key, value) {
        let _formData = this.state.formData;
        _formData[key] = value;
        this.setState({ formData: _formData });
    }
    onSubmit() {
        fetch(this.props.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                projectName: this.state.formData.projectName,
                customer: this.state.formData.customer,
                projectPhase: this.state.formData.projectPhase,
                description: this.state.formData.description
            })
        }).then(function () {
            console.log("oke");
        }).catch(function () {
            console.log("errore");
        });;
    }
    render() {
        return (
            <Modal id = {this.props.modalId} title="Add Project" onSubmit={() => this.onSubmit()} >
                <form>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input className="form-control" type="textfield" id="projectName" onBlur={(e) => this.onDataChange("projectName", e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="customer">Customer</label>
                    <input className="form-control" type="textfield" id="customer" onBlur={(e) => this.onDataChange("customer", e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" onBlur={(e) => this.onDataChange("description", e.target.value)}></textarea>
                </div>
                </form>
            </Modal>
        );
    }
}

export default ProjectAddModal;