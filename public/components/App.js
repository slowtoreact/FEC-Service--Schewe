// This will be the main app file
import React from 'react';
import ReactDOM from 'react-dom';
import PhotoBar from './PhotoBar.js';
import Axios from 'axios';
import Bootstrap from 'bootstrap';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      $.get( "http://localhost:3000", function(results) {
        $( ".result" ).html(results);
        alert( "Load was performed." );
      })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "Error loading page" );
      });
    }

    render() {
        return (
          <div>
            <div>
              <Navbar />
            </div>
            <div>
              <PhotoBar />
            </div>
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;