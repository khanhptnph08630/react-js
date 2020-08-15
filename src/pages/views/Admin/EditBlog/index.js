import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import apiBlogRequest from '../../../../api/blogApi'
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import firebase from "../../../../firebase"


const EditBlog = ({cateBlogs, onUpdate}) => {
    const { handleSubmit, register, errors } = useForm();
    let {id} = useParams();
    let history = useHistory();

    const [currentBlog, setCurrentBlog] = useState({});

    const [valueEditor, setValueEditor] = useState('');
    
    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
        console.log(data);
    }


    const showBlog = async () => {
        const {data} = await apiBlogRequest.get(id);
        setCurrentBlog(data);
    }

    useEffect( () => {
        showBlog();
    },[])

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentBlog({
            ...currentBlog,
            [name]: value
        })
    }

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        if(file==null){
            const newData = {
                ...data,
                image:currentBlog.image,
                content: valueEditor
            }
            onUpdate(id,newData);
            history.push('/admin/blogs');
        }
        else{
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
                 onUpdate(id,newData);
                 history.push('/admin/blogs');
            })
        }); 
        }
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Blog</h1>
            <form onSubmit = {handleSubmit(onHandleSubmit)}>
            <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="cateId" ref={register({required: true})}>
                        {cateBlogs.map(({ id, name }) => (
                            <option value={id} selected={id == currentBlog.cateId}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="title" 
                    value={currentBlog.title} 
                    onChange={onHandleChange}
                    ref={register({
                        required:true,
                        minLength:5,
                        maxLength:50, 
                     })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.title && errors.title.type === "required" &&  <span>Tên sản phẩm không được để trống</span>}
                        {errors.title && errors.title.type === "minLength" && <span>Tối thiểu 5 ký tự</span>}
                        {errors.title && errors.title.type === "maxLength" && <span>Tối đa 50 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <img src={currentBlog.image} width="100px"/>
                    <input 
                    type="file" 
                    className="form-control" 
                    name="image" 
                    onChange={onHandleChange}
                    ref={register({
                        pattern: {
                            value: /\.(gif|jpg|jpeg|tiff|png|webp|bmp)$/i
                        }
                    })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.image && errors.image.type === "pattern" && <span>Sai định dạng ảnh</span>}   
                    </small>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description"
                        onChange={onHandleChange}
                        value={currentBlog.description}
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
                        data={currentBlog.content}
                        onInit={ editor => {} }
                        onChange={onHandleEditorChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditBlog.propTypes = {
    blogs: PropTypes.array
}

export default EditBlog
