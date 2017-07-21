import React, { Component } from 'react';
import Page from '../lib/Page'
import ProjectAddModal from './Modals/ProjectAddModal'
import DataTable from "../lib/DataTable"
import Constants from '../Constants'
import AddNewButton from '../lib/AddNewButton'
import {ModalManager} from 'react-dynamic-modal'

const colProps = [
    { colHeader: 'Project Name', colWidth: '25%' },
    { colHeader: 'Customer', colWidth: '25%' },
    { colHeader: 'Description', colWidth: '30%' }];

const objectKeys = ['projectName', 'customer', 'description'];
const url = Constants.serviceUrl + 'projects';

class ProjectsView extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadDataFromServer = this.loadDataFromServer.bind(this);
    }
    loadDataFromServer() {
        let _this = this;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                _this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadDataFromServer();
        this.loadInterval = setInterval(this.loadDataFromServer, 2000);
    }
    componentWillUnmount() {
        this.loadInterval && clearInterval(this.loadInterval);
        this.loadInterval = false;
    }
    openViewModal(){
            ModalManager.open(
                <ProjectAddModal  url={url} onRequestClose={() => true}/>);
    }
    render() {
        return (
            <Page title="Projects">
                
                <div className="col-md-6">
                    <span className="pull-left">
                        <AddNewButton   onClick={()=>this.openViewModal()} label="Add New Project"/>
                    </span>
                </div>
                <DataTable data={this.state.data} url={url} objKeys={objectKeys} colProps={colProps} screenName="ProjectsView"/>
            </Page>
        );
    }
}

export default ProjectsView;