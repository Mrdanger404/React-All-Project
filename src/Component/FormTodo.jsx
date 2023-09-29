import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Data from "./Data";
import './css/form.css'


const FormTodo = () => {
    const [details, setDetails] = useState([])
    const [userName, setName] = useState("");
    const [userGender, setGender] = useState("");
    const [userPhone, setPhone] = useState("");


    const nameChange = (e) => {
        setName(e.target.value);
    }
    const radioChange = (e) =>{
        setGender(e.target.value)
    }
    const phoneChange = (e) =>{
        setPhone(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault();

        if (userName === "" || userPhone === "" || userGender === "") {
            toast.error('Please fill up form', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.success('Save succesfully', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                setDetails([...details,[userName,userGender,userPhone]]);

                setName("")
                setGender("");
                setPhone("");
        }
        
    }

    const deleteItem = (deleteIndex) =>{
        const newItem = [...details];
        newItem.splice(deleteIndex, 1);
        setDetails(newItem)
    }
  return (
    <div>
        <div className="form">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Inter your name" value={userName} id="name inputField" onChange={nameChange} />
                <div onChange={radioChange} className="inputRadio"  >
                    <input type="radio" name="gender" id="gender" checked = {userGender === "Male"} value="Male" /> <label htmlFor="gender">Male</label>
                    <input type="radio" name="gender" id="gender" checked = {userGender === "Female"} value="Female" /> <label htmlFor="gender">Female</label>
                </div>
                <input type="number" id="number inputField" placeholder="Enter your phone number" value={userPhone} onChange={phoneChange} />
                <input type="submit" value="Post" />
            </form>
        </div>
        <ToastContainer />
        <div>
            <Data info = {details} deleteBtn = {deleteItem} />
        </div>
    </div>
  )
}

export default FormTodo