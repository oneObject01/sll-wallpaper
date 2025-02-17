import {request} from '../utils/request.js';

export async function apiGetBarPic(){
	return request({url:'homeBanner'})
}

export function apiGetRandomPic(){
    return request({url:'randomWall'})
}

export function apiGetNotice(data={}){
	return request({url:'wallNewsList',data})
}

export function apiGetClassifyPic(data={}){
	return request({url:'classify',data})
}

export function apiGetWallListPic(data={}){
	return request({url:'wallList',data})
}

export function apiDownloadPic(data={}){
	return request({url:'downloadWall',data})
}