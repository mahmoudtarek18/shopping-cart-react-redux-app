import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from './ProductComponent';
import { setProducts } from './../redux/actions/productActions';
import LoadingSpinner from "./LoadingSpinner";

const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const res = await data.json();
            dispatch(setProducts(res));
            setLoading(false);
        }

        fetchProducts();

    }, [])

    return (
        <div className="ui grid container">
            {
                loading ? <LoadingSpinner/> : <ProductComponent />
            }
        </div>
    )
}

export default ProductListing;