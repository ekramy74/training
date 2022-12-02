import styles from './Home.module.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Carousel} from "antd";
import main_banner from '../../Assets/images/main_banner.jpg';
import secondBanner from '../../Assets/images/second_banner.jpg';

const Home = () => {
    const contentStyle = {
        height: '50vh',

        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
    };
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
                        <div className={styles.toggle_item} onClick={() => {

                        }}>
                            <h3>
                                New arrivals
                            </h3>
                        </div>
                        <div className={styles.toggle_item}>
                            <h3>
                                Best sellers
                            </h3>
                        </div>
                    </div>
                    <div className={styles.products}>
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
                                    Product name
                                </h3>
                                <p>
                                    $ 100
                                </p>
                            </div>
                        </div>
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
                                    Product name
                                </h3>
                                <p>
                                    $ 100
                                </p>
                            </div>
                        </div>
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
                                    Product name
                                </h3>
                                <p>
                                    $ 100
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.service}>
                    <div className={styles.service_item}>
                        <p>
                            Free shipping
                        </p>
                        <p>
                            Free shipping on all orders
                        </p>
                    </div>
                    <div className={styles.service_item}>
                        <p>
                            Free shipping
                        </p>
                        <p>
                            Free shipping on all orders
                        </p>
                    </div>
                    <div className={styles.service_item}>
                        <p>
                            Free shipping
                        </p>
                        <p>
                            Free shipping on all orders
                        </p>
                    </div>
                </section>

            </div>
        </>

    );
}
export default Home;