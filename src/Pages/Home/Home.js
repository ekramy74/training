import styles from './Home.module.css';
import 'react-awesome-slider/dist/styles.css';
import {Carousel} from "antd";
import main_banner from '../../Assets/images/main_banner.jpg';
import secondBanner from '../../Assets/images/second_banner.jpg';
import freeShipping from '../../Assets/images/freeshipping.png';
import returnMoney from '../../Assets/images/moneyreturn.png';
import discount from '../../Assets/images/discount.png';
import {useEffect, useState} from "react";
import UseGet from "../../Shared/API_Helper/Get";

const Home = () => {
    const contentStyle = {
        height: '50vh',
        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
    };
    const [isActive, setIsActive] = useState(0);
    const [newProducts,setNewProducts]=useState([]);


    const getProducts = () => {
        let requestOption = {
            method: 'GET',
        }
        let apiURl = process.env.REACT_APP_BASE_API_URL
        fetch(`${apiURl}/home`, requestOption).then(response => {
            console.log(response)
            return response.json()
        }).then(result => {
            const {most_ordered_products,new_5_products} =result;
            setNewProducts(new_5_products);
            console.log(result)
        }).catch(
            error => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className={styles.home}>
                <section className={styles.banner}>
                    <Carousel effect={'fade'} style={{
                        height: '90vh',
                    }}>
                        <div className={'section'}>
                            <div style={{
                                backgroundImage: `url(${main_banner})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '90vh',
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                color: '#fff',
                            }}>
                                <div className={styles.banner_desc}>
                                    <h1>
                                        2022 latest collection
                                    </h1>
                                    <p>
                                        40% on all products
                                    </p>
                                    <p>
                                        Hand & Made
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                backgroundImage: `url(${secondBanner})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '90vh',
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}>
                                <div className={styles.banner_desc}>
                                    <h1>
                                        2022 latest collection
                                    </h1>
                                    <p>
                                        40% on all products
                                    </p>
                                    <p>
                                        Hand & Made
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Carousel>
                </section>

                <section className={styles.slider}>
                    <Carousel autoplay dots={false}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </section>

                <section className={styles.types}>
                    <div className={styles.featured}>
                    </div>
                    <div className={styles.newest}>

                    </div>
                </section>

                <section className={styles.daily_deals}>
                    <h1>
                        Daily Deals
                    </h1>
                    <div className={styles.toggle}>
                        <div className={isActive === 0 ? styles.toggle_item + ' ' + styles.active : styles.toggle_item}
                             onClick={() => {
                                 setIsActive(0)
                             }}>
                            <h3>
                                New arrivals
                            </h3>
                        </div>
                        <div className={isActive === 1 ? styles.toggle_item + ' ' + styles.active : styles.toggle_item}
                             onClick={() => {
                                 setIsActive(1)
                             }}>
                            <h3>
                                Best sellers
                            </h3>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {newProducts.map((item,index)=>(
                            <div className={styles.product}>
                                <div className={styles.product_image}>
                                    <img src={main_banner
                                    } alt=""/>
                                    <div className={styles.tag}>
                                        tags
                                    </div>
                                </div>
                                <div className={styles.product_desc}>
                                    <h3>
                                        {item.product_name}
                                    </h3>
                                    <p>
                                        $ {item.new_price}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                <section className={styles.service}>
                    <div className={styles.service_item}>
                        <img src={freeShipping} alt=""/>
                        <h1>
                            Free shipping
                        </h1>
                        <p>
                            Free shipping on all orders
                        </p>
                    </div>
                    <div className={styles.service_item}>
                        <img src={returnMoney} alt=""/>
                        <h1>
                            Money return
                        </h1>
                        <p>
                            Back guarantee under 7 days
                        </p>
                    </div>
                    <div className={styles.service_item}>
                        <img src={discount} alt=""/>
                        <h1>
                            Discounts and offers
                        </h1>
                        <p>
                            New discounts and offers every week
                        </p>
                    </div>
                </section>

            </div>
        </>

    );
}
export default Home;