const api="http://localhost:3001/api";
const doGet = async (url:string,header={} ) =>{
    let response = await fetch(api+url,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header,
        }
    });
    return response;
};
const doPost = async(url:String, data:Object|undefined, header={} ) =>{
    let response = await fetch(api+url,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header,
        },
        body: JSON.stringify(data)
    });
    return response;
};
const doPatch = async (url:String, data:Object|undefined, header={})=>{
    let response = await fetch(api+url,{
        method:'PATCH',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header,
        },
        body: JSON.stringify(data)
    });
    return response;
};

export {doGet, doPatch, doPost};