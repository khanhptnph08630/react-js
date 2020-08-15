import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import apiCateProductRequest from '../../../../api/cateProductApi'
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import firebase from "../../../../firebase"


const EditCateProduct = ({cateProducts, onUpdate}) => {
    const { handleSubmit, register, errors } = useForm();
    let {id} = useParams();
    let history = useHistory();

    const [currentCateProduct, setCurrentCateProduct] = useState({});

    const [valueEditor, setValueEditor] = useState('');
    
    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
        console.log(data);
    }


    const showCateProduct = async () => {
        const {data} = await apiCateProductRequest.get(id);
        setCurrentCateProduct(data);
    }

    useEffect( () => {
        showCateProduct();
    },[])

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentCateProduct({
            ...currentCateProduct,
            [name]: value
        })
    }

    const onHandleSubmit = (data) => {
       
                 onUpdate(id,data);
                 history.push('/admin/cateProducts');
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Cate Product</h1>
            <form onSubmit = {handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label>name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={currentCateProduct.name} 
                    onChange={onHandleChange}
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

EditCateProduct.propTypes = {
    cateProducts: PropTypes.array
}

export default EditCateProduct
