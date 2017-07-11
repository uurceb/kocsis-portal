import React, { Component } from 'react';
import Page from '../lib/Page'
import styled from 'styled-components'

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
                <div class="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

                <div className="row x_title">
                  <div className="col-md-6">
                    <h3>Network Activities <small>Graph title sub-title</small></h3>
                  </div>
                  <div className="col-md-6">
                    <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                      <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                      <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                    </div>
                  </div>
                </div>

                <div className="col-md-9 col-sm-9 col-xs-12">
                  <div id="chart_plot_01" className="demo-placeholder"></div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                  <div className="x_title">
                    <h2>Top Campaign Performance</h2>
                    <div className="clearfix"></div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-6">
                    <div>
                      <p>Facebook Campaign</p>
                      <div className="">
                        <div className="progress progress_sm" style={{width: '76%'}}>
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Twitter Campaign</p>
                      <div className="">
                        <div className="progress progress_sm" style={{width: '76%'}}>
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-6">
                    <div>
                      <p>Conventional Media</p>
                      <div className="">
                        <div className="progress progress_sm" style={{width: '76%'}}>
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Bill boards</p>
                      <div className="">
                        <div class="progress progress_sm" style={{width: '76%'}}>
                          <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="clearfix"></div>
              </div>
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