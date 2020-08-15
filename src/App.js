import React, { useState, useEffect } from 'react';
import Routers from './routers'
import apiProductRequest from './api/productApi';
import apiCateProRequest from './api/cateProductApi';
import apiBlogRequest from './api/blogApi';
import apiCateBlogRequest from './api/cateBlogApi';

function App() {
  const [products, setProducts] = useState([]);
  const [cateProducts, setCateProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [cateBlogs, setCateBlogs] = useState([]);

  useEffect(() => {
    const getCateBlogs = async () => {
      try {
        const {data} = await apiCateBlogRequest.getAll();
        setCateBlogs(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCateBlogs()
  }, []);
  
  const onHandleAddCateBlog = async (cateBlog) => {
    try {
      const { data } = await apiCateBlogRequest.create(cateBlog);
      setCateBlogs([
        ...cateBlogs,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const loadCateBlogs = async () => {
    const {data} = await apiCateBlogRequest.getAll();
    setCateBlogs(data.reverse())
  }

  const onHandleUpdateCateBlog = async (id, cateBlog) => {
    try {
      const {data} = await apiCateBlogRequest.update(id, cateBlog);
      setCateBlogs([...cateBlogs], data);
      loadCateBlogs();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveCateBlog = async (id) => {
    try {
      const { data } = await apiCateBlogRequest.remove(id);
      const newCateBlogs = cateBlogs.filter(cateBlog => cateBlog.id !== data.id);
      setCateBlogs(newCateBlogs);
      loadCateBlogs();
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const {data} = await apiBlogRequest.getAll();
        setBlogs(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getBlogs()
  }, []);
  
  const onHandleAddBlog = async (blog) => {
    try {
      const { data } = await apiBlogRequest.create(blog);
      setBlogs([
        ...blogs,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const loadBlogs = async () => {
    const {data} = await apiBlogRequest.getAll();
    setBlogs(data.reverse())
  }

  const onHandleUpdateBlog = async (id, blog) => {
    try {
      const {data} = await apiBlogRequest.update(id, blog);
      setBlogs([...blogs], data);
      loadBlogs();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveBlog = async (id) => {
    try {
      const { data } = await apiBlogRequest.remove(id);
      const newBlogs = blogs.filter(blog => blog.id !== data.id);
      setBlogs(newBlogs);
      loadBlogs();
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getCateProducts = async () => {
      try {
        const {data} = await apiCateProRequest.getAll();
        setCateProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCateProducts()
  }, []);
  
  const onHandleAddCateProduct = async (cateProduct) => {
    try {
      const { data } = await apiCateProRequest.create(cateProduct);
      setCateProducts([
        ...cateProducts,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const loadCateProducts = async () => {
    const {data} = await apiCateProRequest.getAll();
    setCateProducts(data.reverse())
  }

  const onHandleUpdateCateProduct = async (id, cateProduct) => {
    try {
      const {data} = await apiCateProRequest.update(id, cateProduct);
      setCateProducts([...cateProducts], data);
      loadCateProducts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveCateProduct = async (id) => {
    try {
      const { data } = await apiCateProRequest.remove(id);
      const newCateProducts = cateProducts.filter(cateProduct => cateProduct.id !== data.id);
      setCateProducts(newCateProducts);
      loadCateProducts();
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data} = await apiProductRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts()
  }, []);
  
  const onHandleAddProduct = async (product) => {
    try {
      const { data } = await apiProductRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const loadProducts = async () => {
    const {data} = await apiProductRequest.getAll();
    setProducts(data.reverse())
  }

  const onHandleUpdateProduct = async (id, product) => {
    try {
      const {data} = await apiProductRequest.update(id, product);
      setProducts([...products], data);
      loadProducts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveProduct = async (id) => {
    try {
      const { data } = await apiProductRequest.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
      loadProducts();
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  return (
    <div className="App">
      <Routers 
        cateProducts={cateProducts}
        onRemoveCateProduct={onHandleRemoveCateProduct}
        onAddCateProduct={onHandleAddCateProduct}
        onUpdateCateProduct={onHandleUpdateCateProduct}

        products={products} 
        onRemoveProduct={onHandleRemoveProduct} 
        onAddProduct={onHandleAddProduct} 
        onUpdateProduct={onHandleUpdateProduct}

        cateBlogs={cateBlogs}
        onRemoveCateBlog={onHandleRemoveCateBlog}
        onAddCateBlog={onHandleAddCateBlog}
        onUpdateCateBlog={onHandleUpdateCateBlog}

        blogs={blogs} 
        onRemoveBlog={onHandleRemoveBlog} 
        onAddBlog={onHandleAddBlog} 
        onUpdateBlog={onHandleUpdateBlog}

      />
    </div>
  )

}
export default App;