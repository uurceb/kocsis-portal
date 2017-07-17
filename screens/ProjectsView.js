import React, { Component } from 'react';
import Page from '../lib/Page'
import ProjectAddModal from './Modals/ProjectAddModal'
import DataTable from "../lib/DataTable"
import Constants from '../Constants'
import AddNewButton from '../lib/AddNewButton'

const colNames = ['Proje Adı', 'Müşteri', 'Açıklama'];
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
    render() {
        return (
            <Page title="Projects">
                <div className="col-md-6">
                    <span className="pull-right">
                        <AddNewButton modalId="#projectAddModal" />
                    </span>
                </div>
                <DataTable data={this.state.data} url={url} colNames={colNames} objKeys={objectKeys} />
                <ProjectAddModal modalId="projectAddModal" url={url} />
            </Page>
        );
    }
}

export default ProjectsView;