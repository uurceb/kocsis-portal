import React, { Component } from 'react';


const Page = ({ children, title }) => (

    <div className="right_col" role="main">
        <div className="container">
            <div className="page-title">
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>{title}</h2>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">

                            <div className="col-md-6"></div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default Page;