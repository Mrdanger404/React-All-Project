import { ref, set } from "firebase/database"
import { useState } from "react"
import { database } from "../../DATABASE/Config"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Contact = (props) => {
    const [report, setReport] = useState({
        subject: '',
        email:'',
        reports: ''
    })

const path = Date.now()
const reportSubmit = async (e) => {
    e.preventDefault();
    await set(ref(database, `reports/${path}`),{

        subject: report.subject,
        email: report.email,
        reports: report.reports,
        date: Date(),
        path
    })
        
        await toast.success('Report Submitted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
}
  return (
    <>
    <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    <div className="h-screen flex items-center justify-center">

        <div >
            <form onSubmit={reportSubmit} className=" flex flex-col p-5 w-[500px] ">
                <input type="text" placeholder="write subject" onChange={(e) => setReport({...report, subject: e.target.value})} className="my-4 border border-black rounded-xl p-2" />
                <input type="email" required placeholder="Please enter your email " onChange={(e) => setReport({...report, email: e.target.value})} className="my-4 border border-black rounded-xl p-2" />
                <textarea placeholder="Write your complain or suggestion" onChange={(e) => setReport({...report, reports: e.target.value })} className="my-4 border border-black rounded-xl p-2 h-36 "/>
                <button type="submit" className="p-2 border border-black rounded-xl font-bold hover:bg-blue-700 focus:bg-red" >Send</button>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default Contact