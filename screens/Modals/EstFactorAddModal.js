import React, { Component } from 'react';
import FormModal from '../../lib/FormModal'
import ProjectDropdownList from '../../lib/FormElements/ProjectDropdownList'
import ComponentDropdownList from '../../lib/FormElements/ComponentDropdownList'
import ComplexityDropdownList from '../../lib/FormElements/ComplexityDropdownList'

import { ModalManager } from 'react-dynamic-modal';

class EstFactorAddModal extends Component {
    constructor(props) {
        super(props);
        this.state = { formData: { projectId: '', component: '', complexity: '', newOrModified: '', value: '' } }
    }
    onDataChange(key, value) {
        let _formData = this.state.formData;
        _formData[key] = value;
        this.setState({ formData: _formData });
    }
    onSubmit() {
        console.log('proje id' + this.state.formData.projectId);
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
                value: this.state.formData.value
            })
        }).then(function () {
            ModalManager.close();
        }).catch(function () {
            console.log("errore");
        });;
    }
    render() {
        const { formData } = this.state;
        return (
            <FormModal id={this.props.modalId} title="Add Estimating Factor" onSubmit={() => this.onSubmit()} >
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                        <label htmlFor="projectName">Project</label>
                        <ProjectDropdownList onChange={(value) => this.onDataChange("projectId", value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                        <label htmlFor="projectName">Component  </label>
                        <ComponentDropdownList onChange={(value) => this.onDataChange("component", value)} />
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                        <label htmlFor="projectName">Complexity  </label>
                        <ComplexityDropdownList onChange={(value) => this.onDataChange("complexity", value)} />
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                        <label htmlFor="newOrModified">New/Modified</label>
                        <select className="form-control" onChange={(e) => this.onDataChange("newOrModified",e.target.value)}>
                            <option value={0}>*</option>
                            <option value="New" >New</option>
                            <option value="Modified" >Modified</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                        <label htmlFor="value">Value</label>
                        <input className="form-control" type="textfield" value={formData.value} id="value" onChange={(e) => this.onDataChange("value", e.target.value)} />
                    </div>
                </div>
            </FormModal>
        );
    }
}

export default EstFactorAddModal;