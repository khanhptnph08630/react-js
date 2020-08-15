import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'

const Products = ({ cateProducts, products, onRemove }) => {
    const removeHandle = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              onRemove(id);
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">List Products</h1>
                <Link to="add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Products</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, cateId, name, image, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{}</td>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <Link to={`edit-product/${id}`} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandle(id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

Products.propTypes = {

}

export default Products
