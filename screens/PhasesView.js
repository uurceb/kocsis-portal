import React, { Component } from 'react';
import Page from '../lib/Page'
import Constants from '../Constants'
import AddNewButton from '../lib/AddNewButton'
import DataTable from "../lib/DataTable"
import PhaseAddModal from './Modals/PhaseAddModal'


const colNames = ['Proje Adı', 'P.Yönetimi','Analiz','Tasarım','Geliştirme','Birim Testi','Int Testi','UAT','Sol Arch','Code M. & Reg'];
const objectKeys = [{key:'_project',childKey:'projectName'}, 'pManagement', 'analysis', 'design', 'dev', 'unitTest','intTest','uat', 'solArch','codeMergeReg'];
const url = Constants.serviceUrl+'phases';


class PhasesView extends Component {
    constructor(props) {
        super(props);
        this.state = { phases: [] };
        this.loadDataFromServer = this.loadDataFromServer.bind(this);
    }
    loadDataFromServer() {
        let _this = this;
        window.fetch(url, {
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
                <DataTable data={this.state.phases} url={url} colNames={colNames} objKeys={objectKeys} />
                <PhaseAddModal modalId="phaseAddModal" url={url} />
            </Page>
        );
    }
}

export default PhasesView;