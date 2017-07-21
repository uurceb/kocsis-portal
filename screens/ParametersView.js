import React, { Component } from 'react';
import Page from '../lib/Page'
import Constants from '../Constants'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import ComponentsParamBox from './Containers/ComponentsParamBox'
import ComplexityParamBox from './Containers/ComplexityParamBox'
const url = Constants.serviceUrl;


class ParametersView extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { projectCount: 0, phaseCount: 0, estFactCount: 0, projectCostProfitData: [] } };
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
        const { data } = this.state;
        return (
            <Page title="Parameters">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <ComponentsParamBox url={url} />
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <ComplexityParamBox url={url} />
                    </div>
                </div>
            </Page>
        );
    }
}


export default ParametersView;