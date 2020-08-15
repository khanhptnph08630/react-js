import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Blog = ({cateBlogs, blogs}) => {
    return (
        <div>
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                        <Link to="/"><i className="fa fa-home" /> Home</Link>
                        <span>Blog</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Breadcrumb Section Begin */}
                {/* Blog Section Begin */}
                <section className="blog-section spad">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
                        <div className="blog-sidebar">
                        <div className="search-form">
                            <h4>Search</h4>
                            <form action="#">
                            <input type="text" placeholder="Search . . .  " />
                            <button type="submit"><i className="fa fa-search" /></button>
                            </form>
                        </div>
                        <div className="blog-catagory">
                            <h4>Categories</h4>
                            <ul>
                                {cateBlogs.map(({id, name}) => (
                                    <li><Link to={`/blog/${id}`}>{name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-9 order-1 order-lg-2">
                        <div className="row">
                            {blogs.map(({id, title, image, description, content}) => (
                                <div className="col-lg-6 col-sm-6">
                                    <div className="blog-item">
                                    <div className="bi-pic">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="bi-text">
                                        <Link to={`/blog-detail/${id}`}>
                                        <h4>{title}</h4>
                                        </Link>
                                        {/* <p>travel <span>- May 19, 2019</span></p> */}
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
