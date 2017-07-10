import React from 'react';

import { toggleMenu } from './custom';

const TopNav = ({children}) => (
  <div className="top_nav">
    <div className="nav_menu">
      <nav>
        <div className="nav toggle">
          <a id="menu_toggle" onClick={toggleMenu}><i className="fa fa-bars"></i></a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          {children}
        </ul>
      </nav>
    </div>
  </div>
);

export default TopNav;
