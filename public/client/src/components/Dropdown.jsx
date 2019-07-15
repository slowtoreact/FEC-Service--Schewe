import React from 'react';

class Dropdown extends React.Component {
    render () {
        return (
            <div class="dropdown">
                <button className="dropbtn"><font face="Calibre-Medium">DENVER</font>
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Denver</a>
                    <a href="#">Phoenix/Scottsdale</a>
                    <a href="#">Las Vegas</a>
                    <a href="#">Atlanta</a>
                    <a href="#">Austin</a>
                    <a href="#">Baltimore</a>
                    <a href="#">Boston</a>
                    <a href="#">Charleston</a>
                    <a href="#">Charlotte</a>
                    <a href="#">Chicago</a>
                    <a href="#">Cincinnati</a>
                    <a href="#">Cleveland</a>
                    <a href="#">Columbus</a>
                    <a href="#">Dallas</a>
                    <a href="#">Detroit</a>
                    <a href="#">Houston</a>
                    <a href="#">Indianapolis</a>
                    <a href="#">Kansas City</a>
                    <a href="#">Los Angeles</a>
                    <a href="#">Miami</a>
                    <a href="#">Milwaukee</a>
                    <a href="#">Minneapolis</a>
                    <a href="#">Nashville</a>
                    <a href="#">New Orleans</a>
                    <a href="#">New York City</a>
                    <a href="#">Oakland/Berkely</a>
                    <a href="#">Orlando</a>
                    <a href="#">Philadelphia</a>
                    <a href="#">Portland</a>
                    <a href="#">Providence</a>
                    <a href="#">Salt Lake City</a>
                    <a href="#">San Antonio</a>
                    <a href="#">San Diego</a>
                    <a href="#">San Francisco</a>
                    <a href="#">Savannah</a>
                    <a href="#">Seattle</a>
                    <a href="#">St. Louis</a>
                    <a href="#">Washington, DC</a>
                </div>
            </div>
        );
    }
}

export default Dropdown;