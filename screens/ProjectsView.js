import React, { Component } from 'react';
import Page from '../lib/Page'

class ProjectsView extends Component {
    render() {
        return (
            <Page >
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Projects</h2>
                            <ul className="nav navbar-right panel_toolbox">
                                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#">Settings 1</a>
                                        </li>
                                        <li><a href="#">Settings 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a className="close-link"><i className="fa fa-close"></i></a>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <p className="text-muted font-13 m-b-30">
                                Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table.
                            </p>

                            <table id="datatable-responsive" className="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Proje Adı</th>
                                        <th>Müşteri</th>
                                        <th>Açıklama</th>
                                        <th>Proje Fazı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Akbank Face</td>
                                        <td>Akbank</td>
                                        <td>Akbank .net Frontend</td>
                                        <td>Akbank Face Fazı</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default ProjectsView;