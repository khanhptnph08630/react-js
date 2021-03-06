import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, Link} from 'react-router-dom'
import apiProductRequest from '../../../../api/productApi'

const Product = ({cateProducts}) => {
    let {id} = useParams();
    const [product, setProduct] = useState({})

    const showProduct = async () => {
        const {data} = await apiProductRequest.get(id);
        setProduct(data);
    } 

    useEffect( () => {
        window.scrollTo(0, 0);
        showProduct();
    },[]);
    return (
        <div>
            {/* Breadcrumb Section Begin */}
            <div className="breacrumb-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text product-more">
                    <Link to="/"><i className="fa fa-home" /> Home</Link>
                    <Link to="/shop">Shop</Link>
                    <span>Detail</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Breadcrumb Section Begin */}
            {/* Product Shop Section Begin */}
            <section className="product-shop spad page-details">
            <div className="container">
                <div className="row">
                <div className="col-lg-3">
                    <div className="filter-widget">
                    <h4 className="fw-title">Categories</h4>
                    <ul className="filter-catagories">
                        {cateProducts.map(({id, name}) => (
                            <li><Link to={`/shop/${id}`}>{name}</Link></li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="product-pic-zoom">
                        <img className="product-big-img" src={product.image} alt="" />
                        <div className="zoom-icon">
                            <i className="fa fa-search-plus" />
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details">
                        <div className="pd-title">
                            <span></span>
                            <h3>{product.name}</h3>
                            <a href="#" className="heart-icon"><i className="icon_heart_alt" /></a>
                        </div>
                        <div className="pd-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <span>(5)</span>
                        </div>
                        <div className="pd-desc">
                            <p>{product.content}</p>
                            <h4>${product.price} </h4>
                        </div>
                        <div className="quantity">
                            <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                            </div>
                            <a href="#" className="primary-btn pd-cart">Add To Cart</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="product-tab">
                    <div className="tab-item">
                        <ul className="nav" role="tablist">
                        <li>
                            <a className="active" data-toggle="tab" href="#tab-1" role="tab">DESCRIPTION</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tab-2" role="tab">SPECIFICATIONS</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tab-3" role="tab">Customer Reviews (02)</a>
                        </li>
                        </ul>
                    </div>
                    <div className="tab-item-content">
                        <div className="tab-content">
                        <div className="tab-pane fade-in active" id="tab-1" role="tabpanel">
                            <div className="product-content">
                            <div className="row">
                                <div className="col-lg-7">
                                <h5>Introduction</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                <h5>Features</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                </div>
                                <div className="col-lg-5">
                                <img src={product.image} alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-2" role="tabpanel">
                            <div className="specification-table">
                            <table>
                                <tbody><tr>
                                    <td className="p-catagory">Customer Rating</td>
                                    <td>
                                    <div className="pd-rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <span>(5)</span>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Price</td>
                                    <td>
                                    <div className="p-price">$495.00</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Add To Cart</td>
                                    <td>
                                    <div className="cart-add">+ add to cart</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Availability</td>
                                    <td>
                                    <div className="p-stock">22 in stock</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Weight</td>
                                    <td>
                                    <div className="p-weight">1,3kg</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Size</td>
                                    <td>
                                    <div className="p-size">Xxl</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Color</td>
                                    <td><span className="cs-color" /></td>
                                </tr>
                                <tr>
                                    <td className="p-catagory">Sku</td>
                                    <td>
                                    <div className="p-code">00012</div>
                                    </td>
                                </tr>
                                </tbody></table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-3" role="tabpanel">
                            <div className="customer-review-option">
                            <h4>2 Comments</h4>
                            <div className="comment-option">
                                <div className="co-item">
                                <div className="avatar-pic">
                                    <img src="img/product-single/avatar-1.png" alt="" />
                                </div>
                                <div className="avatar-text">
                                    <div className="at-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                    </div>
                                    <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                                    <div className="at-reply">Nice !</div>
                                </div>
                                </div>
                                <div className="co-item">
                                <div className="avatar-pic">
                                    <img src="img/product-single/avatar-2.png" alt="" />
                                </div>
                                <div className="avatar-text">
                                    <div className="at-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                    </div>
                                    <h5>Roy Banks <span>27 Aug 2019</span></h5>
                                    <div className="at-reply">Nice !</div>
                                </div>
                                </div>
                            </div>
                            <div className="personal-rating">
                                <h6>Your Ratind</h6>
                                <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
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
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Product Shop Section End */}
            {/* Related Products Section End */}
            <div className="related-products spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                    <h2>Related Products</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                    <div className="pi-pic">
                        <img src="img/products/women-1.jpg" alt="" />
                        <div className="sale">Sale</div>
                        <div className="icon">
                        <i className="icon_heart_alt" />
                        </div>
                        <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                        </ul>
                    </div>
                    <div className="pi-text">
                        <div className="catagory-name">Coat</div>
                        <a href="#">
                        <h5>Pure Pineapple</h5>
                        </a>
                        <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                    <div className="pi-pic">
                        <img src="img/products/women-2.jpg" alt="" />
                        <div className="icon">
                        <i className="icon_heart_alt" />
                        </div>
                        <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                        </ul>
                    </div>
                    <div className="pi-text">
                        <div className="catagory-name">Shoes</div>
                        <a href="#">
                        <h5>Guangzhou sweater</h5>
                        </a>
                        <div className="product-price">
                        $13.00
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                    <div className="pi-pic">
                        <img src="img/products/women-3.jpg" alt="" />
                        <div className="icon">
                        <i className="icon_heart_alt" />
                        </div>
                        <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                        </ul>
                    </div>
                    <div className="pi-text">
                        <div className="catagory-name">Towel</div>
                        <a href="#">
                        <h5>Pure Pineapple</h5>
                        </a>
                        <div className="product-price">
                        $34.00
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                    <div className="pi-pic">
                        <img src="img/products/women-4.jpg" alt="" />
                        <div className="icon">
                        <i className="icon_heart_alt" />
                        </div>
                        <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                        </ul>
                    </div>
                    <div className="pi-text">
                        <div className="catagory-name">Towel</div>
                        <a href="#">
                        <h5>Converse Shoes</h5>
                        </a>
                        <div className="product-price">
                        $34.00
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Related Products Section End */}
            {/* Partner Logo Section Begin */}
            <div className="partner-logo">
            <div className="container">
                <div className="logo-carousel owl-carousel">
                <div className="logo-item">
                    <div className="tablecell-inner">
                    <img src="img/logo-carousel/logo-1.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                    <img src="img/logo-carousel/logo-2.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                    <img src="img/logo-carousel/logo-3.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                    <img src="img/logo-carousel/logo-4.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                    <img src="img/logo-carousel/logo-5.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Partner Logo Section End */}
        </div>
    )
}

Product.propTypes = {

}

export default Product
