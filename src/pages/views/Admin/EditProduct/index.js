import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import apiProductRequest from '../../../../api/productApi'
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import firebase from "../../../../firebase"


const EditProduct = ({cateProducts, onUpdate}) => {
    const { handleSubmit, register, errors } = useForm();
    let {id} = useParams();
    let history = useHistory();

    const [currentProduct, setCurrentProduct] = useState({});

    const [valueEditor, setValueEditor] = useState('');
    
    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
        console.log(data);
    }


    const showProduct = async () => {
        const {data} = await apiProductRequest.get(id);
        setCurrentProduct(data);
    }

    useEffect( () => {
        showProduct();
    },[])

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        if(file==null){
            const newData = {
                ...data,
                image:currentProduct.image,
                content: valueEditor
            }
            onUpdate(id,newData);
            history.push('/admin/products');
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
                 history.push('/admin/products');
            })
        }); 
        }
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
            <form onSubmit = {handleSubmit(onHandleSubmit)}>
            <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="cateId" ref={register({required: true})}>
                        {cateProducts.map(({ id, name }) => (
                            <option value={id} selected={id == currentProduct.cateId}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={currentProduct.name} 
                    onChange={onHandleChange}
                    ref={register({
                        required:true,
                        minLength:5,
                        maxLength:30, 
                     })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" &&  <span>Tên sản phẩm không được để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tối thiểu 5 ký tự</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Tối đa 30 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label><br />
                    <img src={currentProduct.image} width="100px"/>
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
                    <label>Content</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={currentProduct.content}
                        onInit={ editor => {} }
                        onChange={onHandleEditorChange}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="price" 
                    value={currentProduct.price} 
                    onChange={onHandleChange}
                    ref={register({
                        required:true, 
                        pattern: {
                            value: /\d/
                        }
                    })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.price && errors.price.type === "required" && <span>Giá không được để trống</span>}
                        {errors.price && errors.price.type === "pattern" && <span>Giá không thể nhập chữ</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
