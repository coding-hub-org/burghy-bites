const api="http://localhost:3001/api";
const doGet = async (url:string,header={} ) =>{
    let response = await fetch(api+url);
    return response;
}


export {doGet};