
import { useFormik } from "formik";
import * as yup from "yup"


const FormValidation = () => {

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : '',
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Must have atLeast 2 charecter").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Must have atLeast 2 charecter").required(),
        }),
        onSubmit : (values, {resetForm}) => {
            console.log(values)
            resetForm({values : ''})
        }
    })



  return (
    <div>
        <h2>User signUp</h2>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
                <br />
                {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
                <br />
                <input onChange={formik.handleChange} value={formik.values.email} name="email" type="email" />
                <br />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
                <br />
                <input onChange={formik.handleChange} value={formik.values.password} name="password" type="password" /><br />

                {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FormValidation