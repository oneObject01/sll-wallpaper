const BASE_URL = 'https://tea.qingnian8.com/api/bizhi/'

export function request(obj={}){
	let {
		url,
		method = 'GET',
		header = {},
		data = {}
	} = obj
	url = BASE_URL + url
	header['access-key'] = '928776'
	return new Promise((resolve,reject)=>{
		uni.request({
				url,
				data,
				method,
				header,
				success:res=>{
					if(res.data.errCode===0){
						resolve(res.data)
					}else if(res.data.errCode===400){
						uni.showModal({
							title:"错误提示",
							content:res.data.errMsg,
							showCancel:false
						})
						reject(res)
					}else{
						uni.showToast({
							title:res.data.errMsg,
							icon:"none"
						})
						reject(res)
					}
				},
				fail:err=>{
					reject(err)
				}
			})
	})
}