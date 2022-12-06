import {useParams} from "react-router-dom";
import {useContext, useReducer} from "react";
import styles from './ViewProduct.module.css'
import candle from '../../Assets/images/candles.jpg';
import {Image, message} from "antd";
import {ViewProductReducer, ViewProductInitialState} from "./ViewProductReducer";
import {CartActionTypes} from "../../utils/ActionTypes/ActionTypes";
import {BagContext} from "../../App";

const ViewProduct = () => {
    const productId = useParams();
    const [viewProductState, viewProductDispatch] = useReducer(ViewProductReducer, ViewProductInitialState);
    const {bagState, bagDispatch} = useContext(BagContext);
    const product = {
        id: parseInt(productId.id),
        name: 'Candles',
        price: 100,
        isDiscount: true,
        oldPrice: 150,
        image: candle,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.',
        quantity: 4,
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.product}>
                    <div className={styles.product_image}>
                        <Image src={candle} alt=""/>
                    </div>
                    <div className={styles.product_info}>
                        <h3>
                            {product.name}
                        </h3>
                        <div className={styles.price}>
                            {product.isDiscount ?
                                <span className={styles.old_price}>${product.oldPrice}</span> : ''}
                            <span className={styles.new_price}>${product.price}</span>
                        </div>
                        <div className={styles.product_desc}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                            </p>
                        </div>
                        <div className={'horizontal-line'}/>
                        <div className={styles.product_quantity}>
                            <p>
                                Quantity
                            </p>
                            <div className={styles.quantity_btns}>
                                <div className={styles.increase}
                                     onClick={
                                         () => {
                                             if (viewProductState.qty < product.quantity) {
                                                 viewProductDispatch({type: CartActionTypes.INCREASE_QUANTITY})
                                             } else {
                                                 message.error('Out of stock')
                                             }
                                         }}
                                >
                                    +
                                </div>
                                <div className={styles.qty}>{viewProductState.qty}</div>
                                <div className={styles.decrease}
                                     onClick={
                                         () => {
                                             if (viewProductState.qty > 1) {
                                                 viewProductDispatch({type: CartActionTypes.DECREASE_QUANTITY})
                                             } else {
                                                 message.error('Minimum quantity is 1')
                                             }
                                         }}
                                >
                                    -
                                </div>
                            </div>
                        </div>
                        <div className={'horizontal-line'}/>
                        <div className={styles.product_btns}>
                            <div className={styles.add_to_cart}
                                 onClick={() => {
                                     bagDispatch({
                                         type: CartActionTypes.ADD_TO_CART, payload: {
                                             product: product,
                                             qty: viewProductState.qty,
                                         }
                                     })
                                 }
                                 }
                            >Add to cart
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'horizontal-line'}/>
                <div className={styles.product_details}>
                    <h3>
                        Product Details
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quae.
                    </p>
                </div>

            </div>

        </>
    )
}
export default ViewProduct;