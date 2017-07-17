import React, { Component } from 'react';
import Page from '../lib/Page'
import styled from 'styled-components'
import Constants from '../Constants'


const url = Constants.serviceUrl+'statistics';

class HomeView extends Component {
    constructor(props){
        super(props);
        this.state={data:{projectCount:0,phaseCount:0,estFactCount:0}};
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
                _this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        debugger
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
                        <span className="count_top"><i className="fa fa-user"></i> Total Projects</span>
                        <div className="count">{data.projectCount}</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-clock-o"></i> Total phases</span>
                        <div className="count">{data.phaseCount}</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Estimation Factors</span>
                        <div className="count green">{data.estFactCount}</div>
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