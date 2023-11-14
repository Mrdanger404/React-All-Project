import { useState } from "react";

import { FaFacebookMessenger } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed m-14 right-0 bottom-0 z-10" id="contact">
      {show && (
        <div className="bg-blue-600  h-[300px] w-[200px] sm:h-[400px] sm:w-[300px] rounded-3xl shadow-2xl p-5 ">

          <div className="h-[220px] sm:h-[300px]">
            <p>Hello</p>
          </div>
          <div className="flex w-[160px] sm:w-full sm:h-10 justify-center  bg-gray-700 rounded-3xl ">
            <input type="text" placeholder="Enter message" className="w-[130px] sm:w-[200px] px-2 py-1 rounded-3xl " />

            <AiOutlineSend className="flex items-center justify-center w-[60px] bg-slate-600 py-1 h-full" />
          </div>

        </div>
      )}
      <div className=" flex items-center justify-end">
        <FaFacebookMessenger className="h-10 w-10 m-3 cursor-pointer" onClick={() => setShow(!show)} />
      </div>

    </div>
  )
}

export default Contact