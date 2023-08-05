import '../App.css'
import { useEffect, useState } from "react";
import { IProduct } from "../types/products";
import { Link } from 'react-router-dom';
interface IProps {
    products: IProduct[],
    oneRemove: (_id: number) => void
}
const ProductManagementPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    })
    return (
        <div className='pro'>
            <h2 >Products</h2>
            <div className="product">
                {data.map(item => {
                    return (
                        <Link to={'/products/' + item._id}> 
                            <div className='products' key={item._id}>
                                <img src={item.image} alt="" />
                                <h4>{item.name}</h4>
                                <p className='price'>{item.price}</p>
                            </div>
                        </Link>

                    )
                })}
            </div>

        </div>
    );
}

export default ProductManagementPage;