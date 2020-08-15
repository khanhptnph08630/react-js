import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = ({products}) => {
    return (
        <div>
            {/* Hero Section Begin */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><img src="/img/hero-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/hero-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/hero-3.jpg" alt="" /></SwiperSlide>
            </Swiper>
            {/* Hero Section End */}
            {/* Banner Section Begin */}
            <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-4">
                    <div className="single-banner">
                    <img src="img/banner-1.jpg" alt="" />
                    <div className="inner-text">
                        <h4>Men’s</h4>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-banner">
                    <img src="img/banner-2.jpg" alt="" />
                    <div className="inner-text">
                        <h4>Women’s</h4>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-banner">
                    <img src="img/banner-3.jpg" alt="" />
                    <div className="inner-text">
                        <h4>Kid’s</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Banner Section End */}
            {/* Women Banner Section Begin */}
            <section className="women-banner spad">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Product Features</h2>
                </div>
                <div className="row product-slider">
                    {products.map(({ id, name, image, price }, index) => (
                        <div className="col-lg-3 product-item">
                            <div className="pi-pic">
                            <img src={image} alt="" />
                            <div className="sale">Sale</div>
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
                            <div className="catagory-name">Coat</div>
                            <Link to={`/product/${id}`}>
                                <h5>{name}</h5>
                            </Link>
                            <div className="product-price">
                                ${price}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            {/* Women Banner Section End */}
            {/* Latest Blog Section Begin */}
            <section className="latest-blog spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                    <h2>From The Blog</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-latest-blog">
                    <img src="img/latest-1.jpg" alt="" />
                    <div className="latest-text">
                        <div className="tag-list">
                        <div className="tag-item">
                            <i className="fa fa-calendar-o" />
                            May 4,2019
                        </div>
                        <div className="tag-item">
                            <i className="fa fa-comment-o" />
                            5
                        </div>
                        </div>
                        <a href="#">
                        <h4>The Best Street Style From London Fashion Week</h4>
                        </a>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-latest-blog">
                    <img src="img/latest-2.jpg" alt="" />
                    <div className="latest-text">
                        <div className="tag-list">
                        <div className="tag-item">
                            <i className="fa fa-calendar-o" />
                            May 4,2019
                        </div>
                        <div className="tag-item">
                            <i className="fa fa-comment-o" />
                            5
                        </div>
                        </div>
                        <a href="#">
                        <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                        </a>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-latest-blog">
                    <img src="img/latest-3.jpg" alt="" />
                    <div className="latest-text">
                        <div className="tag-list">
                        <div className="tag-item">
                            <i className="fa fa-calendar-o" />
                            May 4,2019
                        </div>
                        <div className="tag-item">
                            <i className="fa fa-comment-o" />
                            5
                        </div>
                        </div>
                        <a href="#">
                        <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                        </a>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="benefit-items">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                        <img src="img/icon-1.png" alt="" />
                        </div>
                        <div className="sb-text">
                        <h6>Free Shipping</h6>
                        <p>For all order over 99$</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                        <img src="img/icon-2.png" alt="" />
                        </div>
                        <div className="sb-text">
                        <h6>Delivery On Time</h6>
                        <p>If good have prolems</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                        <img src="img/icon-1.png" alt="" />
                        </div>
                        <div className="sb-text">
                        <h6>Secure Payment</h6>
                        <p>100% secure payment</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Latest Blog Section End */}
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

Home.propTypes = {

}

export default Home
