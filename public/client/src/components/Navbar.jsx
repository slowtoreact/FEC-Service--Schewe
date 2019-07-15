import React from 'react';
import Search from './Search.jsx';
import Dropdown from './Dropdown.jsx';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <Search />
                    <li href="#latest">THE LATEST</li>
                    <li href="#citybest">CITY'S BEST</li>
                    <Dropdown />
            </div>
        );
    }
}

export default Navbar;