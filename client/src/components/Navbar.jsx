import React from 'react';
import Dropdown from './Dropdown.jsx';

class Navbar extends React.Component {
    render() {
        return (
            <div className="NAV">
                <div className="LOGOandFORM">
                    <div className="LOGO">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="58" viewBox="-62 4 380 57.989" fill="#b70038"><path d="M64.707 48.265l-4.066 8.3h4.066l2.475-4.95H87.16l2.298 4.95H93.7l-4.066-8.3H64.707M76.906 0L48.442 56.575h4.243L77.26 6.895l24.575 49.68h4.42L77.613 0h-.707M3.182 13.083v3.536h17.68L0 55.867v.707h43.67v-3.36H5.48L26.872 13.08h-23.7m0-6.716h35.182L16.972 46.497H43.67V42.96H22.807l21.04-39.425V2.83H3.182v3.536M77.26 28.818l4.597 10.43h-9.37l4.773-10.43zm-9.724 13.26h19.27L77.26 22.453l-9.724 19.624zm94.232-17.328h-31.823v3.36h28.287v1.238c0 13.967-9.9 25.105-23.867 25.105-13.613 0-24.22-10.785-24.22-24.75s10.96-24.75 25.105-24.75c6.365 0 12.552 1.945 17.68 6l1.6-3.36c-5.48-4.066-12.2-6-19.27-6-16.265 0-28.994 12.2-28.994 28.1s12.376 28.1 28.1 28.287c16.442 0 27.403-12.73 27.403-29.17v-4.07m77.26-11.657v43.492h3.713V16.62H256v-3.536h-16.972M214.63 16.62h13.26v39.956h3.713V13.083H214.63v3.536m0-13.79H256v3.536h-41.37V2.83zm-79.38 12.905c4.773 0 9.193 1.768 12.73 5.127l1.6-3.36c-3.713-3.36-8.84-5.304-14.32-5.304-9.9 0-17.503 7.602-17.503 17.503 0 10.077 7.25 17.856 16.62 17.856 8.84 0 15.028-5.48 15.558-13.8h-19.978v3.36h15.735c-1.6 4.597-6 7.072-11.315 7.072-7.25 0-12.906-6.365-12.906-14.497 0-7.956 6-13.967 13.8-13.967M189.878 0l-28.464 56.575h4.243l24.575-49.68 24.575 49.68h4.42L190.586 0h-.707m-12.2 48.265l-4.066 8.3h4.066l2.475-4.95h19.978l2.298 4.95h4.243l-4.066-8.3H177.68m12.552-19.447l4.597 10.43h-9.37l4.773-10.43zm-9.724 13.26h19.27l-9.547-19.624-9.724 19.624z"/></svg>
                    </div>
                    <div className="FORM">
                        <i className="fa">&#xf002;</i>
                        <form onSubmit={(e) => this.props.action.handleSearch(e)}>
                            <input type="text" className="search" placeholder="Find a great place near you" size="45"/>
                        </form>
                    </div>
                </div>
                <div className="LINKS">
                    <div className="linknames">
                        <a href="#latest" className="nav-link">THE LATEST</a>
                        <a href="#citybest" className="nav-link">CITY'S BEST</a>
                            <div className="dropbutton" onClick={() => (this.props.clickHandler())}>DENVER <i className="fa">&#xf107;</i>
                            </div>
                    </div>
                </div>
                    <div className="dropdown">
                        {!this.props.isHidden && <Dropdown />}
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