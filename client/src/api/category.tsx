import instanse from './instanse';
import { ICategory } from "../types/category"

const getAllCate = () => {
  return instanse.get('/categories');
};

const getOneCate = (id: number) => {
  return instanse.get('/categories/' + id);
};

const remove = (id: number) => {
  return instanse.delete('/categories/' + id);
};
const addCategory = (category: ICategory) => {
  return instanse.post(
    '/categories/',
    category

  );
};
const updateCategory = (id, category: ICategory) => {
  return instanse.patch('/categories/' + id, category);
};
export const categoryRq = { getAllCate, getOneCate,remove,addCategory,updateCategory };
