import React, { Component } from 'react';
import ViewModal from '../../lib/ViewModal'
import Constants from '../../Constants'
import DataTable from "../../lib/DataTable"
const url = Constants.serviceUrl;

class ProjectViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = { _id: props.id, projectData: {}, projectPhase: {}, estFactors: [] }
        this.loadDataFromServer.bind(this);
        this.loadPhaseData.bind(this);
        this.loadEstFactorData.bind(this);
    }

    loadDataFromServer() {
        let _this = this;
        fetch(url + '/projects/' + _this.props.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                _this.setState({ projectData: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    loadPhaseData() {
        let _this = this;
        fetch(url + '/phases/getPhaseByProjectId/' + _this.props.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                _this.setState({ projectPhase: responseJson[0] });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    loadEstFactorData() {
        let _this = this;
        fetch(url + '/estimatingfactors/getEstFactorsByProjectId/' + _this.props.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                _this.setState({ estFactors: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.loadDataFromServer();
        //this.loadInterval = setInterval(this.loadDataFromServer, 2000);
    }
    render() {
        const { projectData, projectPhase, estFactors } = this.state;
        const colProps = [
            { colHeader: 'Component', colWidth: '25%' },
            { colHeader: 'Complexity', colWidth: '25%' },
            { colHeader: 'New/Modified', colWidth: '20%' },
            { colHeader: 'Value', colWidth: '10%' }]
        const objectKeys = ['component', 'complexity', 'newOrModified', 'value'];

        return (
            <ViewModal id={this.props.modalId} title={projectData.projectName}>
                <div className="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul id="myTab" className="nav nav-tabs bar_tabs responsive" role="tablist">
                        <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">General Info</a>
                        </li>
                        <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false" onClick={() => this.loadPhaseData()}>Project Phase</a>
                        </li>
                        <li role="presentation" className=""><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false" onClick={() => this.loadEstFactorData()}>Estimation Factors</a>
                        </li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                            <div className="project_detail" style={{ margin: '25px' }}>
                                <p className="title">Customer</p>
                                <p>{projectData.customer}</p>
                                <p className="title">Description</p>
                                <p>{projectData.description}</p>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                            <ul className="stats-overview">
                                <li>
                                    <span className="name"> Analysis % </span>
                                    <span className="value text-success"> {projectPhase.analysis} </span>
                                </li>
                                <li>
                                    <span className="name"> Design % </span>
                                    <span className="value text-success"> {projectPhase.design} </span>
                                </li>
                                <li className="hidden-phone">
                                    <span className="name"> Development % </span>
                                    <span className="value text-success"> {projectPhase.dev} </span>
                                </li>
                                <li>
                                    <span className="name"> Unit Test % </span>
                                    <span className="value text-success"> {projectPhase.unitTest} </span>
                                </li>
                                <li>
                                    <span className="name"> Int Test % </span>
                                    <span className="value text-success"> {projectPhase.intTest} </span>
                                </li>
                                <li className="hidden-phone">
                                    <span className="name"> UAT % </span>
                                    <span className="value text-success"> {projectPhase.uat} </span>
                                </li>
                            </ul>
                            <ul className="stats-overview">
                                <li>
                                    <span className="name"> Project Management % </span>
                                    <span className="value text-success"> {projectPhase.pManagement} </span>
                                </li>
                                <li>
                                    <span className="name"> Solution Architecture % </span>
                                    <span className="value text-success"> {projectPhase.solArch} </span>
                                </li>
                                <li className="hidden-phone">
                                    <span className="name"> Code Merge & Regression % </span>
                                    <span className="value text-success"> {projectPhase.codeMergeReg} </span>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                            <div style={{ marginLeft: '25px', marginRight: '25px' }}>
                                <DataTable data={estFactors} objKeys={objectKeys} colProps={colProps} disableButtons={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </ViewModal>
        );
    }
}

export default ProjectViewModal;