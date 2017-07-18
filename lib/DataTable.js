import React, { Component } from 'react';
import RowButtonsCell from './RowButtonsCell'

const DataRows = (props) => (
    <tbody>{props.data.map((row) => {
        return (
            <tr key={row._id}>
                {
                    props.objKeys.map((objKey, index) => {

                        if (typeof objKey === 'object')
                            return (<td key={index}>{
                                row[objKey['key']][objKey['childKey']]
                            }</td>);
                        else
                            return (<td key={index}>{
                                row[objKey]
                            }</td>);
                    })
                }
                <RowButtonsCell pId={row._id} url={props.url} />
            </tr>);
    })}</tbody>
);
const DataTable = (props) => (
    <table className="table table-striped projects">
        <thead>
            <tr>{
                props.colProps.map((colProp, index) => <th key={index} style={{width : colProp.colWidth}}>{colProp.colHeader}</th>)
            }
                <th style={{ width: "20%" }}>#Edit</th>
            </tr>
        </thead>
        <DataRows data={props.data} url={props.url} objKeys={props.objKeys} />
    </table>
);

export default DataTable;