import React, { Component } from 'react';
import Constants from '../../Constants'
const url = Constants.serviceUrl + 'projects';


class ProjectDropdownList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [],selectedId:''};
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
                _this.setState({ projects: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadDataFromServer();
    }
    onDataChange(value) {
        this.props.onChange(value);
    }
    render() {
        return (<div className="form-group">
            <label htmlFor="projectName">Project</label>
            <select className="form-control" onChange={(e) => this.onDataChange(e.target.value)}>
                <option value={0}>*</option>
                {
                    this.state.projects.map((project, index) => <option value={project._id} key={index}>{project.projectName}</option>)
                }
            </select>
        </div>
        );
    }
}

export default ProjectDropdownList;