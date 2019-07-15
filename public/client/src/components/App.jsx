// Main app file
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import PhotoBar from './PhotoBar.jsx';
import Axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    // componentDidMount() {
    //   Axios.get( "http://localhost:3000", function(results) {
    //     ( ".result" ).html(results);
    //     console.log( "Load was performed." );
    //   })
    //   .done(function() {
    //     console.log( "second success" );
    //   })
    //   .fail(function() {
    //     console.log( "Error loading page" );
    //   });
    // }

    render() {
      console.log('console log testing');
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