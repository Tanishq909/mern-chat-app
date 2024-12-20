import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch(error) {
        console.log(error);
        console.log('Error while addUser API', error.message);
    }
}

export const getUsers = async () => {
    try {
        let res = await axios.get(`${url}/users`);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log('Error while calling getUsers api ',error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data); 
    } catch (error) {
        console.log('Error while calling setConversation api ',error.message);
    }
}

export const getConversation = async (data) => {
    try {
        console.log(data);
        let res = await axios.post(`${url}/conversation/get`, data); 
        return res.data;
    } catch (error) {
        console.log('Error while calling getConversation api ',error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data); 
    } catch (error) {
        console.log('Error while calling newMessage api ',error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let res = await axios.get(`${url}/message/get/${id}`);
        return res.data;
    } catch (error) {
        console.log('Error while calling getMessage api ',error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling uploadFile api ', error.message);
    }
}