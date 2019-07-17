// Main app file
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import PhotoBar from './PhotoBar.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ''
      };

      this.handleSearch = this.handleSearch.bind(this); // bind handleSearch function to App component

    }

componentDidMount() {
  axios.get('/')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}

handleSearch(dataFromSearch) { // should display what the user entered into the search bar
  this.setState({
    search: dataFromSearch
  }), () => { console.log(`This is what you entered: ${this.state.search}`); }
}

    render() {
        return (
          <div>
            <div>
              <Navbar action={this.handleSearch} />
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