import instanse from './instanse';
import { IProduct } from "../types/products"

const getAllProduct = () => {
  return instanse.get('/products');
};
const deleteProduct = (id: number) => {
  return instanse.delete('/products/' + id);
};
const addProduct = (product: IProduct) => {
  return instanse.post(
    '/products',
    product

  );
};
const updateProduct = (id, product) => {
  return instanse.patch('/products/' + id, product);
};
export { getAllProduct, deleteProduct, addProduct, updateProduct };
