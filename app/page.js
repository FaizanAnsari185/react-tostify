"use client"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {

  const notify = () => {
    toast("Wow so easy !");
  }


  return (
    <>
      <button onClick={notify} className="bg-[#3b79f5] text-white py-3 px-6 font-bold text-2xl rounded-md m-4">
        Flesh Messages
      </button>
      <ToastContainer />
    </>
  );
};

export default page;
