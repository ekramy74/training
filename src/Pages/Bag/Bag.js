import {useContext} from "react";
import {BagContext} from "../../App";
import styles from './Bag.module.css';
import {CloseCircleOutlined, CloseOutlined} from "@ant-design/icons";
import {CartActionTypes} from "../../utils/ActionTypes/ActionTypes";
import {message} from "antd";

const Bag = () => {
    const {bagState, bagDispatch} = useContext(BagContext);
    console.log(bagState);
    return (
        <>
            <div className={styles.bag}>
                <h3>Your bag items</h3>
                <div className={styles.bag_items}>
                    <div className={styles.bag_items_header}>
                        <h4>Image</h4>
                        <h4>Name</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                        <h4>Action</h4>
                    </div>
                    {
                        bagState.bag.map((item, index) => (
                            <div className={styles.bag_item} key={index}>
                                <div className={styles.bag_item_image}>
                                    <img src={item?.product?.image
                                        ? item?.product?.image
                                        : 'https://www.ikea.com/PIAimages/0452012_PE694365_S5.JPG'}
                                         alt={item?.product?.name}/>
                                </div>
                                <h4>{item?.product?.name}</h4>
                                <h4>{item?.product?.price}</h4>
                                <div className={styles.quantity_btns}>
                                    <div className={styles.increase}
                                         onClick={
                                             () => {

                                             }}
                                    >
                                        +
                                    </div>
                                    <div className={styles.qty}>{item.qty}</div>
                                    <div className={styles.decrease}
                                         onClick={
                                             () => {

                                             }}
                                    >
                                        -
                                    </div>
                                </div>
                                <h4>{item?.product?.price * item?.qty}</h4>

                                <div className={styles.bag_item_action}>
                                    <CloseCircleOutlined onClick={() => {
                                        bagDispatch({type: 'REMOVE_FROM_BAG', payload: item})
                                    }}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.bag_btns}>
                    <div className={styles.continue_btn}
                         onClick={() => {

                         }
                         }
                    >
                        Continue Shopping
                    </div>
                    <div className={styles.clear_btn}
                         onClick={() => {

                         }
                         }
                    >
                        Clear Bag
                    </div>

                </div>
                <div className={styles.total_card}>
                    <h3>Cart total</h3>
                    <div className={styles.totals}>
                        <div className={styles.sub_totals}>
                            <h3>Subtotal</h3>
                            <h3>$ {bagState.subTotal}</h3>
                        </div>
                        <div className={styles.tax}>
                            <h3>Tax</h3>
                            <h3>$ {bagState.tax}</h3>
                        </div>
                        <div className={styles.total}>
                            <h3>Total</h3>
                            <h3>$ {bagState.total}</h3>
                        </div>
                    </div>
                    <div className={'horizontal-line'}/>
                    <div className={styles.checkout_btn}
                         onClick={() => {

                         }
                         }
                    >
                        Checkout
                    </div>

                </div>
            </div>
        </>
    );
}
export default Bag;
