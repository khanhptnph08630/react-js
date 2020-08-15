import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link to="/admin" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/products" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Product</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/cateProducts" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Cate Product</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/blogs" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Blog</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/cateBlogs" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Cate Blog</span>
                </Link>
            </li>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
