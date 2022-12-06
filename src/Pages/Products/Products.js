import styles from './Products.module.css';
import {Button, Checkbox, Input, List, Radio, Space} from "antd";
import {useState} from "react";
import candles from '../../Assets/images/candles.jpg';
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const products = [
        {
            id: 1,
            name: 'Candles',
            isDiscount: true,
            oldPrice: 150,
            price: 100,
            image: candles,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Candles',
            isDiscount: true,
            oldPrice: 150,
            price: 100,
            image: candles,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 10,
        },
        {
            id: 3,
            name: 'Candles',
            price: 100,
            isDiscount: false,
            image: candles,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 5,
        },
        {
            id: 4,
            name: 'Candles',
            price: 100,
            image: candles,
            isDiscount: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 4,
        },
        {
            id: 5,
            name: 'Candles',
            price: 100,

            image: candles,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 1,
        },
        {
            id: 6,
            name: 'Candles',
            price: 100,
            image: candles,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
            quantity: 10,
        }
    ]
    return (
        <>
            <div className={styles.products}>
                {products.map((item, index) => (
                    <div>
                        <img>
                        </img>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.price}
                        </div>
                    </div>
                ))}
                <div className={styles.filters}>
                    <h4>
                        Categories
                    </h4>
                    <Checkbox.Group onChange={onChange}>
                        <Space direction="vertical" align={'start'}>
                            <Checkbox value={1}>All categories</Checkbox>
                            <Checkbox value={2}>Newest</Checkbox>
                            <Checkbox value={3}>Offer</Checkbox>
                        </Space>
                    </Checkbox.Group>
                    <hr/>
                    <h4>
                        Price
                    </h4>
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical" align={'start'}>
                            <Radio value={1}>All</Radio>
                            <Radio value={2}>high to low</Radio>
                            <Radio value={3}>low to high</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className={styles.products_list}>
                    <h1>
                        Choose your product from our wide range of products
                    </h1>
                    <br/>
                    <Input.Search placeholder="Search products" allowClear/>
                    <br/>
                    <List
                        size="large"
                        pagination={{
                            width: "100%",
                            position: 'bottom',
                            pageSize: 10,
                            onChange: page => {
                                console.log(page);
                            }
                        }}
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={products}
                        renderItem={item => (
                            <List.Item>
                                <div className={styles.product}>
                                    <div className={styles.product_image_container}
                                         onClick={() => navigate(`/products/${item.id}`)}>
                                        <div className={styles.shadow}>
                                            <Button type="primary" shape="circle" style={{
                                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                            }}>
                                                <EyeOutlined/>
                                            </Button>
                                        </div>
                                        {item.isDiscount && <div className={'tag discount'}>
                                            30%
                                        </div>}
                                        <img src={candles} alt=""/>
                                    </div>
                                    <div className={styles.product_info}>
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <div className={styles.product_price}>
                                            <p>
                                                ${item.price}
                                            </p>
                                            {item.isDiscount &&
                                                <p>
                                                    ${item.price}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </>
    );
}
export default Products;