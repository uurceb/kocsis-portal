import React, { Component } from 'react';
import Page from '../lib/Page'
import styled from 'styled-components'
import Constants from '../Constants'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const url = Constants.serviceUrl+'statistics';
const data = [
      {name: 'Akbank Face', cost: 4000, profit: 6000, amt: 2400},
      {name: 'Akbank BSA', cost: 3000, profit: 1398, amt: 2210},
      {name: 'Yapı Kredi Cobol', cost: 2000, profit: 9800, amt: 2290}
];
const SimpleBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis name="USD"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="cost" fill="#8884d8" />
       <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
    );
  }
})


class HomeView extends Component {
    constructor(props){
        super(props);
        this.state={data:{projectCount:0,phaseCount:0,estFactCount:0, projectCostProfitData:[]}};
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
        const {data} = this.state;
        return (
            <Page title="Dashboard">
                <div className="row tile_count">
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-folder"></i> Total Projects</span>
                        <div className="count">{data.projectCount}</div>
                    </div>
                    
                    <div className="col-md-2">
                        <SimpleBarChart/>
                    </div>
                </div>
                

            </Page>
        );
    }
}

const MyDiv = styled.div`
width: 76
`

export default HomeView;