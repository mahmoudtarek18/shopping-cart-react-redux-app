import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import LoadingSpinner from "./LoadingSpinner";

const ProductDetails = () => {
    const product = useSelector(state => state.product);
    const {  image, title, price, category, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                 const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const product = await data.json();
                dispatch(selectedProduct(product))
            } catch(e) {
                console.log('the error',e)
            }
        }

        if (productId && productId.trim() !== '') fetchProduct();
        
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="ui grid container">
            {
                Object.keys(product).length === 0 ?
                    <LoadingSpinner />
                    : 
                    (
                        <div className="ui placeholder segment">
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider"> 
                                    And
                                </div>
                                <div className="middle aligned row"> 
                                    <div className="column lp">
                                        <img className="ui fluid image" src={image} alt={title}/>
                                    </div>
                                    <div className="column lp">
                                        <h1> {title} </h1>
                                        <h2 className="ui teal tag label">
                                            {price} $ 
                                        </h2>
                                        <h3 className="ui brown block header">
                                            {category} 
                                        </h3>
                                        <p>{description}</p>
                                        <div className="ui vertical animated button" tabIndex="0">
                                            <div className="hidden content">
                                                <i className="shop icon"></i>
                                            </div>
                                            <div className="visible content">Add to Cart</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )    
            }
        </div>
    )
}

export default ProductDetails;