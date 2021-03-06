import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd';
import axios from 'axios';


function DesImgUpload(props) {

    const [Desimages, setDesimages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        axios.post('/api/product/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    setDesimages([...Desimages, response.data.filePath])
                    props.refreshFunction([...Desimages, response.data.filePath])


                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }


    const deleteHandler = (desimages) => {
        const currentIndex = Desimages.indexOf(desimages);
        let newDesimages = [...Desimages]
        newDesimages.splice(currentIndex, 1)
        setDesimages(newDesimages)
        props.refreshFunction(newDesimages)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            width: 300, height: 240, border: '1px solid lightgray',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize: '3rem' }} />
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowY: 'scroll' }}>

                {Desimages.map((desimages, index) => (
                    <div onClick={() => deleteHandler(desimages)} key={index}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                            src={`http://localhost:5000/${desimages}`}
                        />
                    </div>
                ))}


            </div>


        </div>
    )
}

export default DesImgUpload
