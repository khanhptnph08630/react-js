import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from './../pages/views/Admin/Dashboard'

import CateProducts from './../pages/views/Admin/CateProducts'
import AddCateProduct from './../pages/views/Admin/AddCateProduct'
import EditCateProduct from './../pages/views/Admin/EditCateProduct'

import Products from './../pages/views/Admin/Products'
import AddProduct from './../pages/views/Admin/AddProduct'
import EditProduct from './../pages/views/Admin/EditProduct'

import Blogs from './../pages/views/Admin/Blogs'
import AddBlog from './../pages/views/Admin/AddBlog'
import EditBlog from './../pages/views/Admin/EditBlog'

import CateBlogs from './../pages/views/Admin/CateBlogs'
import AddCateBlog from './../pages/views/Admin/AddCateBlog'
import EditCateBlog from './../pages/views/Admin/EditCateBlog'


//Views
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'
import ShopByCate from '../pages/views/Main/ShopByCate'
import Product from '../pages/views/Main/Product'
import Blog from '../pages/views/Main/Blog'
import BlogByCate from '../pages/views/Main/BlogByCate'
import BlogDetail from '../pages/views/Main/BlogDetail'
import Contact from '../pages/views/Main/Contact'


const Routers = ({ products, onAddProduct, onUpdateProduct, onRemoveProduct,
                   cateProducts, onAddCateProduct,onUpdateCateProduct, onRemoveCateProduct,
                   blogs, onAddBlog, onUpdateBlog, onRemoveBlog,
                   cateBlogs, onAddCateBlog, onUpdateCateBlog, onRemoveCateBlog

    }) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path="/admin" exact>
                                <Dashboard cateProducts={cateProducts} products={products} cateBlogs={cateBlogs} blogs={blogs}/>
                            </Route>
                            <Route path="/admin/cateProducts">
                                <CateProducts cateProducts={cateProducts} onRemove={onRemoveCateProduct}/>
                            </Route>
                            <Route path="/admin/add-cateProduct">
                                <AddCateProduct onAdd={onAddCateProduct}/>
                            </Route>
                            <Route path="/admin/edit-cateProduct/:id">
                                <EditCateProduct cateProducts={cateProducts} onUpdate={onUpdateCateProduct}/>
                            </Route>
                            <Route path="/admin/products">
                                <Products cateProducts={cateProducts} products={products} onRemove={onRemoveProduct}/>
                            </Route>
                            <Route path="/admin/add-product">
                                <AddProduct onAdd={onAddProduct} cateProducts = {cateProducts}/>
                            </Route>
                            <Route path="/admin/edit-product/:id">
                                <EditProduct products={products} onUpdate={onUpdateProduct} cateProducts = {cateProducts}/>
                            </Route>
                            <Route path="/admin/cateBlogs">
                                <CateBlogs cateBlogs={cateBlogs} onRemove={onRemoveCateBlog} />
                            </Route>
                            <Route path="/admin/add-cateBlog">
                                <AddCateBlog onAdd={onAddCateBlog}/>
                            </Route>
                            <Route path="/admin/edit-cateBlog/:id">
                                <EditCateBlog cateBlogs={cateBlogs} onUpdate={onUpdateCateBlog}/>
                            </Route>
                            <Route path="/admin/blogs">
                                <Blogs blogs={blogs} onRemove={onRemoveBlog}/>
                            </Route>
                            <Route path="/admin/add-blog">
                                <AddBlog onAdd={onAddBlog} cateBlogs={cateBlogs}/>
                            </Route>
                            <Route path="/admin/edit-blog/:id">
                                <EditBlog blogs={blogs} onUpdate={onUpdateBlog} cateBlogs={cateBlogs} />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/shop" exact>
                                <Shop cateProducts={cateProducts} products={products}/>
                            </Route>
                            <Route path="/shop/:id">
                                <ShopByCate cateProducts={cateProducts} products={products}/>
                            </Route>
                            <Route path="/product/:id">
                                <Product cateProducts={cateProducts}/>
                            </Route>
                            <Route path="/blog" exact>
                                <Blog cateBlogs={cateBlogs} blogs={blogs}/>
                            </Route>
                            <Route path="/blog/:id">
                                <BlogByCate cateBlogs={cateBlogs} blogs={blogs}/>
                            </Route>
                            <Route path="/blog-detail/:id">
                                <BlogDetail cateBlogs={cateBlogs} blogs={blogs}/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
