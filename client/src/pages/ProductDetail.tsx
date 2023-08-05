import '../App.css'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IProduct } from '../types/products';
import { Image, Button, Form } from 'antd';
interface IProprs {
  products: IProduct[];
}
const ProductDetailPage = (props: IProprs) => {
  const { id } = useParams();
  console.log(props + id);
  const [product, setProduct] = useState<IProduct>(props.products.find(item => item._id === id)!);
  useEffect(() => {
    const prd = props.products.find(item => item._id === id);
    setProduct(prd)
  }, [props, id]);
  return (
    <div className='class'>
      
      <div>
        <h1>Product Detail Page</h1>
        <Image width={400} src={product?.image}/>
      </div>

      <div className='class2'>
        <h1>{product?.name}</h1>
        <h3 className='price'>{product?.price}</h3>
        <h4>{product?.desc}</h4>
        
        <Form.Item wrapperCol={{ offset: 0, span: 25 }}>
            <Button type="primary" htmlType="submit">
            <Link to={'/'}>Products</Link>
            </Button>
        </Form.Item>
      </div>
        
        
      
    </div>
  );
};

export default ProductDetailPage;



// import React, { useEffect, useState } from 'react';
// import { Space, Table, Image, Button } from 'antd';
// import { Link } from 'react-router-dom';
// import type { ColumnsType } from 'antd/es/table';


// const ProductManagementPage = (prors) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     setData(
//       prors.products.map((pro) => {
//         return { ...pro, key: pro._id };
//       })
//     );
//   }, [prors]);

//   const deletePro = (id) => {
    
//     prors.onRemove(id);
//   };

//   interface DataType {
//     key: string;
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     desc: string;
//     categoryId: string;
//   }

//   const columns: ColumnsType<DataType> = [
//     {
//       title: 'Product Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Image',
//       dataIndex: 'image',
//       key: 'image',
//       render: (image) => <Image width={200} src={image} />,
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       key: 'price',
//     },
//     {
//       title: 'Desc',
//       dataIndex: 'desc',
//       key: 'desc',
//     },
//     {
//       title: 'Category ',
//       dataIndex: 'categoryId',
//       key: 'categoryId',
//       render: (_:any, record: any) => <a href="">{record?.categoryId?.name}</a>
//     },
//     {
//       title: 'Action',
//       dataIndex: 'action',
//       key: 'action',
//       render: (_:any, record: any) => <a href={"/products/"+record._id}><button>View</button></a>
//     },
//   ];

//   return (
//     <div>
//       <Table columns={columns} dataSource={data} />
//     </div>
//   );
// };
// export default ProductManagementPage;


