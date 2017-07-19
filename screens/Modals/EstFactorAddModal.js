import React, { Component } from 'react';
import FormModal from '../../lib/FormModal'
import ProjectDropdownList from '../../lib/FormElements/ProjectDropdownList'


class EstFactorAddModal extends Component {
    constructor(props) {
        super(props);
        this.state = { formData: { projectId: '', component: '', complexity: '', newOrModified: '', value:''} }
    }
    onDataChange(key, value) {
        let _formData = this.state.formData;
        _formData[key] = value;
        this.setState({ formData: _formData });
    }
    onSubmit() {console.log('proje id'+ this.state.formData.projectId);
        fetch(this.props.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _project: this.state.formData.projectId,
                component: this.state.formData.component,
                complexity: this.state.formData.complexity,
                newOrModified: this.state.formData.newOrModified,
                value:this.state.formData.value
            })
        }).then(function () {
            clearContent();
        }).catch(function () {
            console.log("errore");
        });;
    }
     clearContent(){
        console.log('clear content');
        this.setState({ formData: { projectId: '', component: '', complexity: '', newOrModified: '',value: ''} });
    }
    render() {
        const {formData} = this.state;
        return (
            <FormModal id={this.props.modalId} title="Add Estimating Factor" onSubmit={() => this.onSubmit()} onClose={()=>this.clearContent()}>
                    <ProjectDropdownList onChange={(value) => this.onDataChange("projectId", value)}/>
                    <div className="form-group">
                        <label htmlFor="component">Component</label>
                        <input className="form-control" type="textfield" value={formData.component} id="component" onChange={(e) => this.onDataChange("component", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complexity">Complexity</label>
                        <input className="form-control" type="textfield" value={formData.complexity} id="complexity" onChange={(e) => this.onDataChange("complexity", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newOrModified">New/Modified</label>
                        <input className="form-control" type="textfield" value={formData.newOrModified} id="newOrModified" onChange={(e) => this.onDataChange("newOrModified", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="value">Value</label>
                        <input className="form-control" type="textfield" value={formData.value} id="value" onChange={(e) => this.onDataChange("value", e.target.value)} />
                    </div>
            </FormModal>
        );
    }
}

export default EstFactorAddModal;