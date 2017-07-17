import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import { App, Footer, Sidebar, TopNav } from '..';
import {HomeView,ProjectsView,PhasesView,EstimatingFactorsView} from '../screens';

import img from './images/volkan_kurtarici.jpg';
import logo from './images/koc_logo.png'

const mainContainer = (
<App>
    <Sidebar>
      <Sidebar.Title logo={<i className="fa fa-industry"></i>} title='Project Portal' />
      <div className="clearfix"></div>
      <Sidebar.Profile avatar={img} name="Volkan Kurtarıcı" />
      <br />

      <Sidebar.Menu>
        <Sidebar.Menu.Section title='General'>
          <Sidebar.Menu.Section.Category icon="home" title="Home">
            <li><Link to = "/">Dashboard</Link></li>
          </Sidebar.Menu.Section.Category>
          <Sidebar.Menu.Section.Category icon='bolt' title='Estimator'>
            <li><Link to = "/projects">Projects</Link></li>
            <li><Link to = "/phases">Phases</Link></li>
            <li><Link to = "/estimatingfactors">Estimating Factors</Link></li>
          </Sidebar.Menu.Section.Category>
        </Sidebar.Menu.Section>
      </Sidebar.Menu>

      <Sidebar.Footer>
        <Sidebar.Footer.Entry icon='cog' title='Settings' />
        <Sidebar.Footer.Entry icon='fullscreen' title='FullScreen' />
        <Sidebar.Footer.Entry icon='eye-close' title='Lock' />
        <Sidebar.Footer.Entry icon='off' title='Logout' />
      </Sidebar.Footer>
    </Sidebar>

    <TopNav>
      <li>
        <a href='#' className='user-profile dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>
          <img src={img} alt='' />Volkan Kurtarıcı
          <span className='fa fa-angle-down'></span>
        </a>
        <ul className='dropdown-menu dropdown-usermenu pull-right'>
          <li><a href='#'> Profile</a></li>
          <li><a href='#'> Help</a></li>
          <li><a href='#'><i className='fa fa-sign-out pull-right'></i> Log Out</a></li>
        </ul>
      </li>
    </TopNav>
    <Route exact path='/' component={HomeView}/>
    <Route path='/projects' component={ProjectsView}/>
    <Route path='/phases' component={PhasesView}/>
    <Route path='/estimatingfactors' component={EstimatingFactorsView}/>
    <Footer></Footer>
  </App>
);

ReactDOM.render(<Router><div>
  {mainContainer} </div></Router>,
  document.getElementById('content'),
);

require('../vendors/fastclick/lib/fastclick.js');
require('../vendors/nprogress/nprogress.js');
require('../src/js/helpers/smartresize.js');
require('../src/js/custom.js');
