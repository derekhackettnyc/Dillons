import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Resizer from 'react-image-file-resizer'

import { hostServer } from '../../../../apis/products'
import CropperStage from '../../../ui/CropperJS'
import useForm from './useForm'
import validate from './formValidation'

import './edit.scss'


const InputField = ({ name, label, value, errors, onChange, onFocus }) => {
    return (
        <div className="form-field floating-label">
            <input className="product-form-card__field" type="text" value={value} name={name} autoComplete="off" placeholder=" " onChange={onChange} onFocus={onFocus} />
            <label className="product-form-card__label">{label}</label>
            {
                errors[name] &&
                <p className='form-field__error'>
                    {`${errors[name]} must be filled in 😕`}
                </p>
            }
        </div>
    )
}

const Form = ({ initialValues = {}, onSubmit }) => {

    console.log("RENDER = FORM")

    const { id, catagory, sub, imagefile, gender } = initialValues
    const fullimagePath = imagefile ? `${hostServer}/assets/images/products/${catagory}/${sub}/${imagefile}` : `/assets/images/placeholder.jpg`

    const [initialFormData, setInitialFormData] = useState(initialValues)
    const [dropzoneImage, setDropzoneImage] = useState(fullimagePath)
    const [filename, setFilename] = useState(imagefile)
    const [isDragActive, setIsDragActive] = useState(false)
    const [preview, setPreview] = useState(null)
    const [canvas, setCanvas] = useState(null)

    useEffect(() => {
        setInitialFormData(initialValues)
    }, [initialValues])


    const onformSubmit = async (formValues) => {

        const timeStamp = `${Date.now() / 100 | 0}`

        if (canvas) {
            canvas.getCroppedCanvas({
                width: 500,
                height: 500,
                fillColor: '#fff',
            }).toBlob((blob) => {
                const formData = new FormData();
                formData.append('filename', blob, `${formValues.sku}${timeStamp}.jpg`);
                formData.append('fullpath', `${formValues.catagory}/${formValues.sub}/`)
                const action = `${hostServer}/php/upload-a-file.php`;
                fetch(action, { method: 'POST', body: formData })
                    .then(response => response.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        formValues.imagefile = `${formValues.sku}${timeStamp}.jpg`
                        onSubmit(formValues)
                        setFilename(formValues.imagefile)
                        setPreview(null)
                        setDropzoneImage(response.base64)
                        setCanvas(null)
                    });
            }, 'image/jpeg', .9);
        } else {
            onSubmit(formValues)
        }
    }


    const destroyCropper = () => {
        setPreview(null)
        setIsDragActive(false)
        setDropzoneImage(fullimagePath)
        setFilename(imagefile)
    }

    const stopEvent = event => {
        event.preventDefault();
        event.stopPropagation();
    }


    const dragEnterHandler = (event) => {
        stopEvent(event);
        setIsDragActive(true)
    }

    const dragLeaveHandler = (event) => {
        stopEvent(event);
        setIsDragActive(false)
    }


    const fileSelectHandler = e => {

        stopEvent(e);
        if ((e.target.closest('.editCard__image'))) {
            const file = e.target.files || e.dataTransfer.files

            // In a perfect world, the Resizer Api wouldn't be needed. 
            // There are issues on IOS (and maybe other mobile devices with cameras) using CropperJS.
            // Cropper doesn't like massive images. It's to do with the size of the image / photo file. On iphone7 plus for e.g it's 3024 × 4032.
            // So hopefully this Resizer Api will fixed this problem.
            //
            // More info here under "know Issues" - https://github.com/fengyuanchen/cropperjs

            // Otherwise, the following code would of been fined.
            // 
            // const preview = URL.createObjectURL(file[0])
            // this.setState({ imageFile: file[0], preview, isDragActive: false, saveButtonClicked:false }, () => {
            //     //URL.revokeObjectURL(preview) 
            // })

            // Take our image blob/file and resize to 1000x1000. it does keep ratio etc.

            Resizer.imageFileResizer(
                file[0],
                1000,
                1000,
                'JPEG',
                100,
                0,
                uri => {
                    setPreview(uri)
                    setIsDragActive(false)
                },
                'base64'
            )
        }

    }

    const getCropperCanvas = canvas => {
        setCanvas(canvas)
    }

    const { handleSubmit, errors, formData, handlers } = useForm(onformSubmit, validate, productFormSchemia, initialFormData)
    const formFields = Object.entries(formData).reduce((arr, [key, { label, value }]) =>
        [...arr,
        <InputField key={key} name={key} label={label} value={value} {...handlers} errors={errors} />
        ], [])

    return (
        <form className="editCard" onSubmit={handleSubmit} id="productForm" noValidate>

            <div
                style={{ background: `url(${dropzoneImage}) no-repeat center 75%/450px 450px` }}
                className={`editCard__image ${isDragActive ? ' editCard__image--hover' : ''}`}
                onDragEnter={dragEnterHandler}
                onDragOver={stopEvent}
                onDragLeave={dragLeaveHandler}
                onDrop={fileSelectHandler}
            >

                {filename ?
                    <p className="editCard__heading">{filename}</p>
                    :
                    <p className="editCard__heading">Grab a photo using <i className="fas fa-images" style={{ fontSize: '2rem', padding: "3px" }} /> or<br /> Drag and drop photo below here</p>
                }

                {!isDragActive && preview &&

                    <CropperStage
                        cropperCanvas={getCropperCanvas}
                        imagePreview={preview}
                        destroy={destroyCropper}
                    />

                }

                <div className="editCard__actions editCard__actions--top">
                    <label htmlFor={`upload-file-${1}`} className="editCard__label">
                        <input type="file" id={`upload-file-${1}`} name="fileselect[]" accept="image/*" className="editCard__fileselect" onChange={fileSelectHandler} />
                        <i className="fas fa-images tooltip"><span className="tooltiptext">BROWSE</span></i>
                    </label>
                </div>
            </div>

            <div className="editCard__details">
                {initialValues && id ?

                    <div className="editCard__disabled">
                        <div>
                            <h3 >ID</h3>
                            <p>{id}</p>
                        </div>
                        <div>
                            <h3>Catagory</h3>
                            <p>{catagory}</p>
                        </div>
                        <div>
                            <h3>Sub-Catagory</h3>
                            <p>{sub}</p>
                        </div>
                    </div>
                    :
                    <div className="product-form-card__disabled">
                        Enter new particulars for this item ...
                    </div>

                }
                <div className="product-form-card__particulars">
                    {
                        formFields
                    }
                </div>
                <div className="editCard__form-action-buttons">
                    <button type='submit' className="editCard__button editCard__button--save"><i className="fas fa-piggy-bank"></i></button>
                    <Link to={`/admin/list/${catagory}/${sub}/${gender}`}>
                        <button className="editCard__button editCard__button--close"><i className="fas fa-times-circle"></i></button>
                    </Link>
                </div>
            </div>

        </form>
    )
}

export default Form;


export const productFormSchemia = [
    // {
    //     label: "Enter Your Username",
    //     name: "username",
    //     type: "text",
    //     defaultValue: "derek hackett"
    // },
    {
        label: "Enter Title",
        name: "title",
        type: "text",
    },
    {
        label: "Enter Price",
        name: "price",
        type: "text"
    },
    {
        label: "Enter SKU",
        name: "sku",
        type: "text",
        defaultValue: "XYZ"
    },
    {
        label: "Enter Description",
        name: "description",
        type: "text"
    }
]


