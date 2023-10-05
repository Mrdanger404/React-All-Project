import { ref, set } from "firebase/database"

import {  useFormik } from "formik"
import * as yup from "yup"
import { database } from "./Database"


const StudentForm = () => {
    const SubmitData = useFormik({
        initialValues : {
            StudentClass : '',
            Roll : '',
            Name : '',
            GuName : '',
            GuNumber : '',
        },
        validationSchema : yup.object({
            StudentClass : yup.string().required("Please select student class"),
            GuNumber: yup.string().required("Please write Guardian number number"),
            Roll : yup.string().min(1, "Roll number will be minimum 1 digit").required("Please write student roll number"),
            Name : yup.string().min(3, "Name must be 3 cherecter").required("Please write Student Name"),
            GuName : yup.string().min(3, "Name must be 3 cherecter").required("Please write Guardian Name")
        }),
        onSubmit : (values, {resetForm}) => {
            console.log("form submitted")
            console.log(values)
            
            set(ref(database, `${values.StudentClass}/${values.Roll}/`), {
                stClass: values.StudentClass,
                stName: values.Name,
                GuName: values.GuName,
                GuPhone: values.GuNumber
            })

            resetForm({values : ''})
        }
    })


  return (
    <>
    <form onSubmit={SubmitData.handleSubmit}>
        <div>
        <select name="StudentClass" id="studentClass" onChange={SubmitData.handleChange} value={SubmitData.values.StudentClass}>
            <option value="" label="Please select"></option>
            <option value={'1'} >One</option>
            <option value={'2'} >Two</option>
        </select><br></br>
        {SubmitData.touched.StudentClass && SubmitData.errors.StudentClass && <span>{SubmitData.errors.StudentClass}</span>}
        </div>

        <div>
        <input type="number" name="Roll" id="roll" onChange={SubmitData.handleChange} value={SubmitData.values.Roll} placeholder="Enter Student Roll " /><br></br>
        {SubmitData.touched.Roll && SubmitData.errors.Roll && <span>{SubmitData.errors.Roll}</span>}
        </div>

        <div>
        <input type="text" name="Name" id="name" onChange={SubmitData.handleChange} value={SubmitData.values.Name} placeholder="Enter Student Name" /><br></br>
        {SubmitData.touched.Name && SubmitData.errors.Name && <span>{SubmitData.errors.Name}</span>}
        </div>
        
        <div>
        <input type="text" name="GuName" id="guName" onChange={SubmitData.handleChange} value={SubmitData.values.GuName} placeholder="Enter Guardian name" /><br></br>
        {SubmitData.touched.GuName && SubmitData.errors.GuName && <span>{SubmitData.errors.GuName}</span>}
        </div>
        
        <div>
        <input type="number" name="GuNumber" id="guNumber" onChange={SubmitData.handleChange} value={SubmitData.values.GuNumber} placeholder="Enter Guardian Number" /><br></br>
        {SubmitData.touched.GuNumber && SubmitData.errors.GuNumber && <span>{SubmitData.errors.GuNumber}</span>}
        </div>
        
        <div>
        <button type="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default StudentForm