import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Shop = ({cateProducts, products}) => {
    return (
        <div>
            {/* Breadcrumb Section Begin */}
            <div className="breacrumb-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                    <Link to="/"><i className="fa fa-home" /> Home</Link>
                    <span>Shop</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Breadcrumb Section Begin */}
            {/* Product Shop Section Begin */}
            <section className="product-shop spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    <div className="filter-widget">
                    <h4 className="fw-title">Categories</h4>
                    <ul className="filter-catagories">
                        {cateProducts.map(({id, name}) => (
                            <li><Link to={`/shop/${id}`}>{name}</Link></li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                    <div className="product-show-option">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                        <div className="select-option">
                            <select className="sorting">
                            <option value>Default Sorting</option>
                            </select>
                            <select className="p-show">
                            <option value>Show:</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-5 text-right">
                        <p>Show 01- 09 Of 36 Product</p>
                        </div>
                    </div>
                    </div>
                    <div className="product-list">
                    <div className="row">
                        {products.map(({id, cateId, name, image, price}) => (
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                    <img src={image} alt="" />
                                    <div className="sale pp-sale">Sale</div>
                                    <div className="icon">
                                        <i className="icon_heart_alt" />
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                                        <li className="quick-view"><Link to={`/product/${id}`}>+ Quick View</Link></li>
                                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                                    </ul>
                                    </div>
                                    <div className="pi-text">
                                    {/* <div className="catagory-name">{cateProducts.find(cateProduct => cateProduct.id == cateId)}</div> */}
                                    <Link to={`/product/${id}`}>
                                        <h5>{name}</h5>
                                    </Link>
                                    <div className="product-price">
                                        ${price}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Product Shop Section End */}
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

Shop.propTypes = {

}

export default Shop
