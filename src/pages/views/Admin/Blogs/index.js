import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'

const Blogs = ({ blogs, onRemove }) => {
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
                <h1 className="h3 mb-2 text-gray-800">List Blogs</h1>
                <Link to="add-blog" className="btn btn-primary">Add Blog</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Blogs</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(({ id, title, image, content }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{title}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{content}</td>
                                        <td>
                                            <Link to={`edit-blog/${id}`} className="btn btn-primary">Edit</Link>
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

Blogs.propTypes = {

}

export default Blogs
