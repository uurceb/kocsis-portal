import React, { Component } from 'react';

import AddNewButton from '../../lib/AddNewButton'

import Constants from '../../Constants'

const url = Constants.serviceUrl + 'components';

class ComponentsParamBox extends Component {
    constructor(props) {
        super(props);
        this.state = { newComp: '', components: [] };
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
                _this.setState({ components: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    onDataChange(value){
        this.setState({newComp:value});
    }
    addComponent(){
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                compName:this.state.newComp
            })
        }).then(() => {
            this.setState({newComp:''});
        }).catch((e) => {
            console.log(e);
        });;
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
            <div className="x_panel">
                <div className="x_title">
                    <h2>Components <small>screen, service etc..</small></h2>
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

                    <div className="">
                        <ul className="to_do">
                            {
                                this.state.components.map((component, index) => <li key={index}>
                                    <p> {component.compName} </p>
                                </li>)
                            }
                        </ul>
                        <div>
                            <input className="form-control" type="textfield" id="newComponent" value={this.state.newComp} onChange={(e) => this.onDataChange(e.target.value)} />
                            <span className="pull-right" style={{ marginTop: '4px' }}>
                                <AddNewButton label="Add" onClick={()=>this.addComponent()}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentsParamBox;