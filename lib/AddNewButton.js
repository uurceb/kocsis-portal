import React, { Component } from 'react';


const AddNewButton = (props)=>(
    <a href={props.modalId} className="btn btn-success btn-xs" data-toggle="modal" >
                <i className="fa fa-plus"></i> Add New
            </a>
)

export default AddNewButton;