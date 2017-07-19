import React, { Component } from 'react';
import FormModal from '../../lib/FormModal'

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
    clearContent(){
        console.log('clear content');
        this.setState({ formData: { projectName: '', customer: '', projectPhase: '', description: '' } });
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
        }).then(() => {
            this.clearContent();
        }).catch((e) => {
            console.log(e);
        });;
    }
    render() {
        const { formData } = this.state;

        return (
            <FormModal id={this.props.modalId} title="Add Project" onSubmit={() => this.onSubmit()} onClose={()=>this.clearContent()}>
                    <div className="form-group">
                        <label htmlFor="projectName">Project Name</label>
                        <input className="form-control" type="textfield" value={formData.projectName} id="projectName" onChange={(e) => this.onDataChange("projectName", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customer">Customer</label>
                        <input className="form-control" type="textfield" id="customer" value={formData.customer} onChange={(e) => this.onDataChange("customer", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="3" value={formData.description} onChange={(e) => this.onDataChange("description", e.target.value)}></textarea>
                    </div>
            </FormModal>
        );
    }
}

export default ProjectAddModal;