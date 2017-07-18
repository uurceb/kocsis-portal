import React, { Component } from 'react';
import Page from '../lib/Page'
import Constants from '../Constants'
import AddNewButton from '../lib/AddNewButton'
import DataTable from "../lib/DataTable"
import PhaseAddModal from './Modals/PhaseAddModal'

const colProps = [
    { colHeader: 'ProjectName', colWidth: '10%' },
    { colHeader: 'Analysis', colWidth: '6%' },
    { colHeader: 'Design', colWidth: '6%' },
    { colHeader: 'Dev', colWidth: '6%' },
    { colHeader: 'Unit Test', colWidth: '6%' },
    { colHeader: 'INT', colWidth: '6%' },
    { colHeader: 'UAT', colWidth: '6%' },
    { colHeader: 'Project Management', colWidth: '10%' },
    { colHeader: 'Sol. Arch.', colWidth: '10%' },
    { colHeader: 'Code M. & Regr.', colWidth: '10%' }];

const objectKeys = [{ key: '_project', childKey: 'projectName' }, 'analysis', 'design', 'dev', 'unitTest', 'intTest', 'uat', 'pManagement', 'solArch', 'codeMergeReg'];
const url = Constants.serviceUrl + 'phases';


class PhasesView extends Component {
    constructor(props) {
        super(props);
        this.state = { phases: [] };
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
                _this.setState({ phases: responseJson });
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
            <Page title="Phases">
                <div className="col-md-6">
                    <span className="pull-right">
                        <AddNewButton modalId="#phaseAddModal" />
                    </span>
                </div>
                <DataTable data={this.state.phases} url={url} colProps={colProps} objKeys={objectKeys} />
                <PhaseAddModal modalId="phaseAddModal" url={url} />
            </Page>
        );
    }
}

export default PhasesView;