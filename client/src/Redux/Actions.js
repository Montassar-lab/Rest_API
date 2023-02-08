import {GETONEUSER, GETUSERS } from "./Actiontype"
import axios from "axios"

export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/contact/readContact')
        dispatch({
            type: GETUSERS,
            payload : res.data.contacts
        })
    } catch (error) {
        console.log(error)   
    }
}

export const contactAdd=(newUser,Navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addContact',newUser)
        dispatch(getUsers())
        Navigate('/Contactlist')
    } catch (error) {
        console.log(error)  
    }
}

export const deletecontact =(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = (id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/readUser/${id}`)
        dispatch({
            type: GETONEUSER,
            payload: res.data.onecontact
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(upContact,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,upContact)
        dispatch(getUsers())
        navigate('/Contactlist')
    } catch (error) {
        console.log(error)
    }
}