import React from 'react';
import Search from './Search.jsx';
import Dropdown from './Dropdown.jsx';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Search />
                    <a href="#latest"><font face="Calibre-Medium">THE LATEST</font></a>
                    <a href="#citybest"><font face="Calibre-Medium">CITY'S BEST</font></a>
                    <Dropdown />
            </div>
        );
    }
}

export default Navbar;