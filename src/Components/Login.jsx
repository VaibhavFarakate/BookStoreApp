import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">


                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}


                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2 '>
                            <span>Email</span><br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} /><br />
                            {errors.email && <span className='text-red-600 text-sm'><sup>*</sup>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2 '>
                            <span>Password</span><br />
                            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} /><br />
                            {errors.password && <span className='text-red-600 text-sm'><sup>*</sup>This field is required</span>}
                        </div>
                        <div className="flex justify-between pt-5">
                            <div>
                                <button className='bg-pink-500 text-white rounded-md py-1 px-2 hover:bg-pink-700 cursor-pointer duration-200' type="submit">Login</button>
                            </div>
                            <div>
                                not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>signUp</Link>
                            </div>
                        </div>
                    </form>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default Login