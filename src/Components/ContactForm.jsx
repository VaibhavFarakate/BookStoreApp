import React from 'react'
import { useForm } from "react-hook-form"


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div >
            <form className="min-h-screen flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)} >
                <div className="card bg-base-100 shadow-xl p-10">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                            <span>{errors.FullName && <span className='text-red-500 text-sm'><sup>*</sup>This field is required</span>}</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" {...register("FullName", { required: true })} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                            <span>{errors.Email && <span className='text-red-500 text-sm'><sup>*</sup>This field is required</span>}</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" {...register("Email", { required: true })} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Mobile</span>
                            <span>{errors.Mobile && <span className='text-red-500 text-sm'><sup>*</sup>This field is required</span>}</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" {...register("Mobile", { required: true })} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Message</span>
                            <span>{errors.Message && <span className='text-red-500 text-sm'><sup>*</sup>This field is required</span>}</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Type here..." {...register("Message", { required: true })}></textarea>
                    </label>


                    <div className="mt-5">
                        <div className="flex justify-between items-center">

                            <button className="shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm