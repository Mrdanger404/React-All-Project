import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './css/Item.css'

const Data = (props) => {
    const {info,deleteBtn} = props

    const handleDelete = (index) =>{

        toast.success('Deleting', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        deleteBtn(index)
    }
  return (
    <div className='details'>
        <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />
        {info.map((value, index) => (
                <div key={index} className='item'>
                    <p>{value[0]}</p>
                    <p>{value[1]}</p>
                    <p>{value[2]}</p>
                    <button onClick={()=> handleDelete(index)}>Delete</button>
                </div>
            ))}
    </div>
  )
}

export default Data