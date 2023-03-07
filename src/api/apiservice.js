let baseUrl = 'http://localhost:2023/api/';


export const userLogin=async (email,password)=>{
    const  requestOptions={ 
     method:'POST',
      mode: 'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
    }
    const response = await fetch(`${baseUrl}user/login`,requestOptions)
    if(!response.ok){
        let data = await response.json()
        return {message:data.message,ok:false}
       
    }
    let data=await response?.json()
    return {message:data.message,token:data.token,ok:true}
}





export const studentreg=async(body)=>{
    const  requestOptions={ 
     method:'POST',
      mode: 'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    }
    const response = await fetch(`${baseUrl}user/v2/reg`,requestOptions)
    if(!response.ok){
        let data = await response.json()
        return {message:data.message,ok:false}
       
    }
    let data=await response?.json()
    return {message:data.message,token:data.token,ok:true}
}