import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="NAV">
                <div className="LOGOandFORM">
                    <div className="LOGO">
                        <img src="zagat-ar21 (1).png" alt="ZAGAT LOGO" height="42" width="42"></img>
                    </div>
                    <div className="FORM">
                        <form onSubmit={(e) => this.props.action.handleSearch(e)}>
                            <input type="text" className="search" placeholder="Find a great place near you" size="45"/>
                        </form>
                    </div>
                </div>
                <div className="LINKS">
                    <a href="#latest" className="nav-link">THE LATEST</a>
                    <a href="#citybest" className="nav-link">CITY'S BEST</a>
                    {/* <div className="DROPDOWN"> */}
                        <button className="dropbtn">DENVER <i className="fa">&#xf107;</i>
                        </button>
                        <div className="dropdown-content">
                            <div className="cityselect">- SELECT A CITY -</div>
                            <div><a href="#">Denver</a></div>
                            <div><a href="#">Phoenix/Scottsdale</a></div>
                            <div><a href="#">Las Vegas</a></div>
                            <div><a href="#">Atlanta</a></div>
                            <div><a href="#">Austin</a></div>
                            <div><a href="#">Baltimore</a></div>
                            <div><a href="#">Boston</a></div>
                            <div><a href="#">Charleston</a></div>
                            <div><a href="#">Charlotte</a></div>
                            <div><a href="#">Chicago</a></div>
                            <div><a href="#">Cincinnati</a></div>
                            <div><a href="#">Cleveland</a></div>
                            <div><a href="#">Columbus</a></div>
                            <div><a href="#">Dallas</a></div>
                            <div><a href="#">Detroit</a></div>
                            <div><a href="#">Houston</a></div>
                            <div><a href="#">Indianapolis</a></div>
                            <div><a href="#">Kansas City</a></div>
                            <div><a href="#">Los Angeles</a></div>
                            <div><a href="#">Miami</a></div>
                            <div><a href="#">Milwaukee</a></div>
                            <div><a href="#">Minneapolis</a></div>
                            <div><a href="#">Nashville</a></div>
                            <div><a href="#">New Orleans</a></div>
                            <div><a href="#">New York City</a></div>
                            <div><a href="#">Oakland/Berkely</a></div>
                            <div><a href="#">Orlando</a></div>
                            <div><a href="#">Philadelphia</a></div>
                            <div><a href="#">Portland</a></div>
                            <div><a href="#">Providence</a></div>
                            <div><a href="#">Salt Lake City</a></div>
                            <div><a href="#">San Antonio</a></div>
                            <div><a href="#">San Diego</a></div>
                            <div><a href="#">San Francisco</a></div>
                            <div><a href="#">Savannah</a></div>
                            <div><a href="#">Seattle</a></div>
                            <div><a href="#">St. Louis</a></div>
                            <div><a href="#">Washington, DC</a></div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Navbar;


// class Navbar extends React.Component {
//     render() {
//         return (
//             <div id="navbar">
//                 <nav>
//                 <div className="search-field">
//                     <form onSubmit={(e) => this.props.action.handleSearch(e)}>
//                         <input type="text" className="search" placeholder="Find a great place near you" size="45"/>
//                     </form>
//                 </div>
//                 <div className="nav-items">
//                     <a href="#latest" className="nav-link">THE LATEST</a>
//                     <a href="#citybest" className="nav-link">CITY'S BEST</a>
//                     <button className="w3-dropdown-click">DENVER <i className="fa">&#xf107;</i>
//                     </button>
//                     <div className="dropdown-content">