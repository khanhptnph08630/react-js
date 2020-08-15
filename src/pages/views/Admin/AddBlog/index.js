import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import firebase from "../../../../firebase"

const AddBlog = ({onAdd,cateBlogs}) => {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();
    const [valueEditor, setValueEditor] = useState('');
    
    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
    }
    
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    image:url,
                    content: valueEditor
                }
                 // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData);
                history.push("/admin/blogs");
            })
        }); 
        
    }
    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Add Blog</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="cateId" ref={register({required: true})}>
                        {cateBlogs.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        ref={register({
                           required:true,
                           minLength:5,
                           maxLength:50, 
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.title && errors.title.type === "required" &&  <span>Tiêu đề bài viết không được để trống</span>}
                        {errors.title && errors.title.type === "minLength" && <span>Tối thiểu 5 ký tự</span>}
                        {errors.title && errors.title.type === "maxLength" && <span>Tối đa 50 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <input 
                        type="file" 
                        className="form-control" 
                        name="image"
                        ref={register({
                            required:true,
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.image && errors.image.type === "required" && <span>Ảnh không được để trống</span>}   
                    </small>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description"
                        ref={register({
                           required:true,
                           minLength:5,
                           maxLength:150, 
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.description && errors.description.type === "required" &&  <span>Mo ta bài viết không được để trống</span>}
                        {errors.description && errors.description.type === "minLength" && <span>Tối thiểu 5 ký tự</span>}
                        {errors.description && errors.description.type === "maxLength" && <span>Tối đa 50 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
                        onInit={ editor => {} }
                        onChange={onHandleEditorChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddBlog.propTypes = {

}

export default AddBlog
