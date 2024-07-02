import { useRef } from "react";
import Swal from 'sweetalert2'

const ExtraTwo = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        
        if (inputRef.current) {
            inputRef.current.value = "";
            Swal.fire("You set it to your email address");
        }
    }

    return (
        <>
            <div className='mt-20 flex flex-col items-center'>
                <h1 className='text-3xl font-extrabold text-emerald-500'>Wanna Stay Connected?</h1>
                <h1 className='text-3xl font-extrabold text-emerald-500'>Join Our Newsletter</h1>
            </div>
            <div className='mt-5 flex justify-center'>
                <input ref={inputRef} type="email" name='email' className='py-2 px-2 rounded-sm w-64 bg-red-300 border-2 border-red-500' />
                <button onClick={handleSubmit} className='py-2 px-2 border-2 border-red-500 rounded-sm bg-red-500 text-white'>Subscribe</button>
            </div>
        </>
    );
};

export default ExtraTwo;