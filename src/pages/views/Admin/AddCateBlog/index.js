import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import firebase from "../../../../firebase"

const AddCateBlog = ({onAdd}) => {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();
    
    const onHandleSubmit = (data) => {
                onAdd(data);
                history.push("/admin/cateBlogs");        
    }
    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Add Cate Blog</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        ref={register({
                           required:true,
                           minLength:5,
                           maxLength:50, 
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" &&  <span>Tên danh mục không được để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tối thiểu 5 ký tự</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Tối đa 50 ký tự</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCateBlog.propTypes = {

}

export default AddCateBlog
