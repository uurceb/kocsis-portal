import React, { Component } from 'react';
import Page from '../lib/Page'
import EstFactorAddModal from './Modals/EstFactorAddModal'
import DataTable from "../lib/DataTable"
import Constants from '../Constants'
import AddNewButton from '../lib/AddNewButton'

const colNames = ['Proje Adı', 'Component', 'Complexity', 'New/Modified','Value'];
const objectKeys = [{key:'_project',childKey:'projectName'}, 'component', 'complexity', 'newOrModified','value'];
const url = Constants.serviceUrl + 'estimatingfactors';

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
            <Page title="Estimating Factors">
                <div className="col-md-6">
                    <span className="pull-right">
                        <AddNewButton modalId="#estFactorAddModal" />
                    </span>
                </div>
                <DataTable data={this.state.data} url={url} colNames={colNames} objKeys={objectKeys} />
                <EstFactorAddModal modalId="estFactorAddModal" url={url} />
            </Page>
        );
    }
}

export default ProjectsView;