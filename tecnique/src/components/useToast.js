import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = (text) => {
    toast.success(text, {
        position: "top-center",
        hideProgressBar: false,
        autoClose: 1000,
    });
}


export { notify, ToastContainer }