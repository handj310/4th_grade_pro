import React from 'react'
<<<<<<< HEAD
import { Button, Descriptions, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';

=======
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';
>>>>>>> master
function ProductInfo(props) {
    const dispatch = useDispatch();


    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        dispatch(addToCart(props.detail._id))

    }

<<<<<<< HEAD
    const editclickHandler = () => {

    }

=======
>>>>>>> master
    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
<<<<<<< HEAD
                <Row gutter={[24, 24]}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
                
                <Button size="large" shape="round" type="danger" onClick={editclickHandler}>
                    Edit
                </Button>
                </Row>
=======
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
>>>>>>> master
            </div>


        </div>
    )
}

export default ProductInfo
