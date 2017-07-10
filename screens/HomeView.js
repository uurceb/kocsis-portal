import React, { Component } from 'react';
import Page from '../lib/Page'
import styled from 'styled-components'

const style = {
    width: 76
}
class HomeView extends Component {
    render() {
        return (
            <Page title="Dashboard">
                <div className="row tile_count">
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Users</span>
                        <div className="count">2500</div>
                        <span className="count_bottom"><i className="green">4% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-clock-o"></i> Average Time</span>
                        <div className="count">123.50</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Males</span>
                        <div className="count green">2,500</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Females</span>
                        <div className="count">4,567</div>
                        <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Collections</span>
                        <div className="count">2,315</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Connections</span>
                        <div className="count">7,325</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
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