import React, { Component } from 'react';
import Page from '../lib/Page'
import ProjectAddModal from './Modals/ProjectAddModal'
import DataTable from "../lib/DataTable"
import Constants from '../Constants'

const colNames = ['Proje Adı', 'Müşteri', 'Açıklama'];
const objectKeys = ['projectName', 'customer', 'description'];
const url = Constants.serviceUrl+'projects';

class ProjectsView extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
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
                _this.setState({ projects: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadDataFromServer();
        setInterval(this.loadDataFromServer, 2000);
    }
    render() {
        return (
            <Page title="Projects">
                <div className="col-md-6">
                    <span className="pull-right">
                        <a href="#projectAddModal" className="btn btn-success btn-xs" data-toggle="modal" >
                            <i className="fa fa-plus"></i> Add New
                                        </a>
                    </span>
                </div>
                <DataTable data={this.state.projects} url={url} colNames={colNames} objKeys={objectKeys} />
                <ProjectAddModal modalId="projectAddModal" title="Add Project" url={url} />
            </Page>
        );
    }
}

export default ProjectsView;