import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <form onSubmit={(e) => this.props.action.handleSearch(e)}>
                    <input type="text" className="search" placeholder="Find a great place near you" size="45"/>
                </form>
                <a href="#latest" className="nav-link">THE LATEST</a>
                <a href="#citybest" className="nav-link">CITY'S BEST</a>
                <div className="dropdown">
                    <button className="dropbtn"><font face="Calibre-Medium">DENVER </font>
                        <i className="fa">&#xf107;</i>
                    </button>
                <div className="dropdown-content">
                    <div className="cityselect">- SELECT A CITY -</div>
                    <div><a href="#">Denver</a></div>
                    <br></br>
                    <div><a href="#">Phoenix/Scottsdale</a></div>
                    <br></br>
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
//                         <a href="#" className="dropdown-items">Denver</a>
//                         <div href="#" className="dropdown-items">Phoenix/Scottsdale</div>
//                         <div href="#" className="dropdown-items">Las Vegas</div>
//                         <div href="#" className="dropdown-items">Atlanta</div>
//                         <div href="#" className="dropdown-items">Austin</div>
//                         <div href="#" className="dropdown-items">Baltimore</div>
//                         <div href="#" className="dropdown-items">Boston</div>
//                         <div href="#" className="dropdown-items">Charleston</div>
//                         <div href="#" className="dropdown-items">Charlotte</div>
//                         <div href="#" className="dropdown-items">Chicago</div>
//                         <div href="#" className="dropdown-items">Cincinnati</div>
//                         <div href="#" className="dropdown-items">Cleveland</div>
//                         <div href="#" className="dropdown-items">Columbus</div>
//                         <div href="#" className="dropdown-items">Dallas</div>
//                         <div href="#" className="dropdown-items">Detroit</div>
//                         <div href="#" className="dropdown-items">Houston</div>
//                         <div href="#" className="dropdown-items">Indianapolis</div>
//                         <div href="#" className="dropdown-items">Kansas City</div>
//                         <div href="#" className="dropdown-items">Los Angeles</div>
//                         <div href="#" className="dropdown-items">Miami</div>
//                         <div href="#" className="dropdown-items">Milwaukee</div>
//                         <div href="#" className="dropdown-items">Minneapolis</div>
//                         <div href="#" className="dropdown-items">Nashville</div>
//                         <div href="#" className="dropdown-items">New Orleans</div>
//                         <div href="#" className="dropdown-items">New York City</div>
//                         <div href="#" className="dropdown-items">Oakland/Berkely</div>
//                         <div href="#" className="dropdown-items">Orlando</div>
//                         <div href="#" className="dropdown-items">Philadelphia</div>
//                         <div href="#" className="dropdown-items">Portland</div>
//                         <div href="#" className="dropdown-items">Providence</div>
//                         <div href="#" className="dropdown-items">Salt Lake City</div>
//                         <div href="#" className="dropdown-items">San Antonio</div>
//                         <div href="#" className="dropdown-items">San Diego</div>
//                         <div href="#" className="dropdown-items">San Francisco</div>
//                         <div href="#" className="dropdown-items">Savannah</div>
//                         <div href="#" className="dropdown-items">Seattle</div>
//                         <div href="#" className="dropdown-items">St. Louis</div>
//                         <div href="#" className="dropdown-items">Washington, DC</div>
//                     </div>
//                 </div>