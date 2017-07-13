import React, { Component } from 'react';
import RowButtonsCell from './RowButtonsCell'

const DataRows = (props) => (
    <tbody>{props.data.map((row) => {
        return (
            <tr key={row._id}>
                {
                    props.objKeys.map((objKey,index) => <td key={index}>{row[objKey]}</td>)
                }
                <RowButtonsCell pId={row._id} url={props.url} />
            </tr>);
    })}</tbody>
);
const DataTable = (props) => (
    <table className="table table-striped projects">
        <thead>
            <tr>{
                props.colNames.map((cName,index) => <th key={index}>{cName}</th>)
            }
                <th style={{ width: "20%" }}>#Edit</th>
            </tr>
        </thead>
        <DataRows data={props.data} url={props.url} objKeys={props.objKeys}/>
    </table>
);

export default DataTable;