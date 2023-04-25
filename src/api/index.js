/* 
包含所有接口请求函数的模块
*/
import axios from 'axios'
import ajax from './ajax'

export const loginUser = (params) => ajax.get('/login', { params })
export const registUser = params => ajax.post('/regist', null, { params: params })