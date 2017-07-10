import React, { Component } from 'react';


const Page = ({ children, title }) => (

    <div className="right_col" role="main">
        <div className="">
            <div className="page-title">
                <div className="title_left">
                    <h3>{title}</h3>
                </div>
            </div>

            <div className="clearfix"></div>
            {children}
        </div>
    </div>
);


export default Page;