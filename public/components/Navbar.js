// This will be the main app file
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.js';
import PhotoBar from './PhotoBar.js';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (
          <div>
            <div>
              {/*  */}
              <nav>
                <div class="nav-fixed">
                  <a href="#" class="brand-logo">Logo</a>
                  <Search />
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                  </ul>
                </div>
              </nav>
              {/*  */}
            </div>
            <div>
              <PhotoBar />
            </div>
          </div>
        );
    }
}

ReactDOM.render(<Navbar />, document.getElementById('app'));

export default Navbar;