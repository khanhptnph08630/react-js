import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link, useParams} from 'react-router-dom'
import apiBlogRequest from '../../../../api/blogApi'

const BlogDetail = ({cateBlogs, blogs}) => {
    let {id} = useParams();
    const [blog, setBlog] = useState({});

    const showBlog = async () => {
        const {data} = await apiBlogRequest.get(id);
        setBlog(data);
    } 

    useEffect( () => {
        window.scrollTo(0, 0);
        showBlog();
    },[]);
    return (
        <div>
            <section className="blog-details spad">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="blog-details-inner">
                        <div className="blog-detail-title">
                        <h2>{blog.title}</h2>
                        {/* <p>travel <span>- May 19, 2019</span></p> */}
                        </div>
                        <div className="blog-large-pic">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="blog-detail-desc">
                            <p>{blog.description}</p>
                        </div>
                        <div className="blog-quote">
                        <p>{blog.content}</p>
                        </div>
                        <div className="posted-by">
                        <div className="pb-pic">
                            <img src="img/blog/post-by.png" alt="" />
                        </div>
                        </div>
                        <div className="leave-comment">
                        <h4>Leave A Comment</h4>
                        <form action="#" className="comment-form">
                            <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Messages" defaultValue={""} />
                                <button type="submit" className="site-btn">Send message</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

BlogDetail.propTypes = {

}

export default BlogDetail
