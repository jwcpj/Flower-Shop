/* 
包含所有接口请求函数的模块
*/
import axios from 'axios'
import ajax from './ajax'

export const loginUser = (params) => ajax.get('user/login', { params })
export const registUser = params => ajax.post('user/regist', null, { params: params })
export const productList = (params) => ajax.get('product/list', { params })
export const yqList = (params) => ajax.get('product/yqlist', { params })
export const deleteProduct = (params) => ajax.get('product/delete', { params })
export const addCart = params => ajax.post('product/addcart', null, { params: params })
export const cartList1 = (params) => ajax.get('cart/list', { params })
export const deleteCart = (params) => ajax.get('cart/delete', { params })
export const deleteAllCart = (params) => ajax.get('cart/deleteall', { params })
export const addOrder = params => ajax.post('product/addorder', null, { params: params })
