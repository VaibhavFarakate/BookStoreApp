import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <form className="min-h-screen flex flex-col justify-center items-center " onSubmit={handleSubmit(onSubmit)}>
                <div className="card bg-base-100 shadow-xl p-10">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder='enter your full name' {...register("fullName", { required: true })} /><br />
                            {errors.fullName && <span className='text-red-600 text-sm'><sup>*</sup>This field is required</span>}
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                E-mail
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" placeholder='enter your email' {...register("email", { required: true })} /><br />
                            {errors.email && <span className='text-red-600 text-sm'><sup>*</sup>This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" {...register("password", { required: true })} /><br />
                            {errors.password && <span className='text-red-600 text-sm'><sup>*</sup>This field is required</span>}
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="flex justify-between items-center">
                            <span><Link to="/" className='underline text-slate-500'>Go Back</Link></span>
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup