import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions"
import ContactCard from "./ContactCard"




const Contactlist =()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    const contacts = useSelector(state=>state.contacts)
    

    return(
        <div className="Userslist">
            {
                contacts.map(el=> <ContactCard key={el._id} el={el}/>)
            }
            
        </div>
    )
}

export default Contactlist