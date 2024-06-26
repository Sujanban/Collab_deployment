import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { registerUser } from '../app/feature/userSlice';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleSignup = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData)).then((res) => {
            if (res.payload.message) {
                navigate('/login');
            }
        })
    }


    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='absolute top-0 w-full h-screen bg-stone-100'>
            <div className='lg:p-12 lg:grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <div className=' flex p-4 md:p-8'>
                        <Link className='' to="/">
                            <svg width="130" height="50.66016498508206" viewBox="0 0 375 105.54201038558763" className="looka-1j8o68f"><defs id="SvgjsDefs1117"></defs><g id="SvgjsG1118" featurekey="nRdZyp-0" transform="matrix(1.0554201038558764,0,0,1.0554201038558764,-2.7704777726216756,0)" fill="#067f38"><g xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="M39.756,19.322c-0.258,9.204,6.01,13.098,8.114,14.084c0.582-1.917,1.104-6.62-0.311-15.014      C45.389,5.556,49.748,0,49.748,0C45.419,3.254,39.985,10.945,39.756,19.322z"></path></g><g><path d="M53.016,11.76c-1.279-2.254-2.488-4.385-2.769-6.55c-0.261-1.993-0.266-3.719-0.119-5.2c0,0-3.737,5.703-1.016,18.461      c1.702,7.973,1.143,12.649,0.656,14.736c2-1.109,6.609-4.446,6.699-11.623C56.518,17.928,54.734,14.791,53.016,11.76z"></path></g></g><g><g><path d="M21.98,38.628c6.328,6.689,13.516,5.012,15.701,4.22c-0.941-1.764-3.9-5.463-10.837-10.396      C16.23,24.907,15.388,17.902,15.388,17.902C14.626,23.26,16.222,32.54,21.98,38.628z"></path></g><g><path d="M26.013,23.908c-2.498-0.693-4.859-1.346-6.591-2.677c-1.595-1.227-2.818-2.44-3.76-3.592      c0,0,1.389,6.671,12.337,13.771c6.842,4.437,9.75,8.135,10.882,9.958c0.63-2.201,1.535-7.818-3.477-12.955      C32.85,25.79,29.374,24.833,26.013,23.908z"></path></g></g><g><g><path d="M23.343,63.507c9.204,0.257,13.098-6.016,14.084-8.116c-1.915-0.58-6.619-1.105-15.016,0.312      C9.575,57.871,4.022,53.511,4.022,53.511C7.274,57.84,14.964,63.275,23.343,63.507z"></path></g><g><path d="M15.786,50.245c-2.26,1.274-4.388,2.487-6.559,2.77c-1.989,0.263-3.715,0.263-5.199,0.118c0,0,5.705,3.736,18.463,1.016      c7.975-1.703,12.649-1.145,14.738-0.655c-1.114-1.999-4.448-6.611-11.622-6.699C21.948,46.745,18.813,48.523,15.786,50.245z"></path></g></g><g><g><path d="M64.965,23.748c-6.689,6.326-5.013,13.517-4.221,15.697c1.768-0.942,5.464-3.9,10.395-10.833      c7.545-10.613,14.553-11.459,14.553-11.459C80.334,16.392,71.055,17.99,64.965,23.748z"></path></g><g><path d="M79.688,27.781c0.692-2.502,1.344-4.861,2.677-6.595c1.223-1.595,2.438-2.817,3.589-3.758      c0,0-6.671,1.387-13.771,12.337c-4.435,6.84-8.136,9.75-9.958,10.883c2.201,0.627,7.82,1.53,12.957-3.48      C77.805,34.613,78.762,31.141,79.688,27.781z"></path></g></g><g><g><path d="M76.07,44.44c-9.207-0.259-13.102,6.012-14.086,8.115c1.914,0.582,6.621,1.105,15.016-0.313      c12.836-2.166,18.391,2.188,18.391,2.188C92.139,50.105,84.447,44.67,76.07,44.44z"></path></g><g><path d="M83.629,57.703c2.256-1.279,4.389-2.49,6.557-2.77c1.991-0.26,3.716-0.268,5.197-0.119c0,0-5.704-3.738-18.466-1.016      c-7.973,1.703-12.644,1.145-14.736,0.656c1.114,1.996,4.444,6.605,11.623,6.697C77.465,61.199,80.6,59.424,83.629,57.703z"></path></g></g><g><g><path d="M58.738,12.367c-1.891,4.583,0.518,7.748,1.389,8.645c0.662-0.851,1.823-3.119,2.718-7.619      c1.363-6.88,4.622-8.839,4.622-8.839C64.667,5.36,60.456,8.194,58.738,12.367z"></path></g><g><path d="M66.861,11.1c-0.211-1.382-0.412-2.686-0.141-3.832c0.249-1.054,0.576-1.923,0.933-2.639c0,0-2.973,2.154-4.042,9.103      c-0.67,4.336-1.844,6.585-2.49,7.542c1.221-0.177,4.18-0.973,5.598-4.569C67.442,14.875,67.148,12.957,66.861,11.1z"></path></g></g><g><g><path d="M27.801,15.622c1.905,4.577,5.845,5.106,7.096,5.126c-0.137-1.071-0.917-3.5-3.468-7.309      c-3.897-5.83-2.98-9.518-2.98-9.518C27.039,6.474,26.063,11.453,27.801,15.622z"></path></g><g><path d="M32.648,8.978c-1.125-0.829-2.192-1.608-2.808-2.612c-0.566-0.917-0.951-1.766-1.206-2.523c0,0-0.577,3.624,3.577,9.291      c2.598,3.545,3.353,5.964,3.574,7.101c0.736-0.99,2.268-3.645,0.729-7.189C35.727,11.234,34.165,10.088,32.648,8.978z"></path></g></g><g><g><path d="M10.44,44.092c4.585,1.889,7.742-0.525,8.644-1.394c-0.853-0.658-3.121-1.819-7.618-2.715      c-6.88-1.368-8.841-4.622-8.841-4.622C3.433,38.161,6.265,42.369,10.44,44.092z"></path></g><g><path d="M9.173,35.965c-1.384,0.213-2.687,0.414-3.833,0.143c-1.054-0.249-1.921-0.582-2.639-0.937c0,0,2.154,2.97,9.103,4.042      c4.338,0.671,6.584,1.844,7.545,2.489c-0.181-1.216-0.975-4.176-4.574-5.595C12.946,35.386,11.028,35.677,9.173,35.965z"></path></g></g><g><g><path d="M85.596,33.041c-4.576,1.904-5.109,5.842-5.129,7.096c1.072-0.138,3.498-0.92,7.311-3.466      c5.83-3.904,9.52-2.984,9.52-2.984C94.742,32.276,89.768,31.303,85.596,33.041z"></path></g><g><path d="M92.24,37.888c0.827-1.126,1.605-2.19,2.609-2.809c0.919-0.566,1.768-0.952,2.525-1.203c0,0-3.625-0.58-9.295,3.571      c-3.54,2.599-5.959,3.356-7.094,3.578c0.984,0.739,3.643,2.267,7.188,0.726C89.984,40.965,91.13,39.402,92.24,37.888z"></path></g></g><path d="M47.499,68.297c1.506-1.159,3.108-2.53,4.459-4.012c3.798-4.164,5.503-10.854,5.503-10.854l-0.748-0.719    c0,0-2.752,6.33-7.165,9.836c-0.727,0.576-1.505,1.119-2.295,1.629c-0.515-13.339,1.769-23.413,2.434-26.026l-1.887-0.62    c0,0-5.425,13.624-5.375,32.386C42.465,84.834,48.562,100,48.562,100l8.15-0.417c0,0-7.546-14.501-9.041-29.34    C47.606,69.588,47.55,68.941,47.499,68.297z"></path></g></g></g><g id="SvgjsG1119" featurekey="Q4qmbg-0" transform="matrix(4.857542428634834,0,0,4.857542428634834,122.95983644188576,-10.145245306782094)" fill="#067f38"><path d="M8.86 16.7 l0 3 c-1.02 0.34 -2.08 0.44 -3.14 0.44 c-3.1 0 -5.3 -2.06 -5.3 -5.12 c0 -3.18 2.28 -5.12 5.3 -5.12 c1.06 0 2.12 0.1 3.14 0.44 l0 3 c-0.88 -0.46 -1.98 -0.58 -2.96 -0.58 c-0.66 0 -1.46 0.14 -1.92 0.66 c-0.42 0.42 -0.56 1.02 -0.56 1.58 c0 0.32 0.04 0.62 0.14 0.88 c0.08 0.28 0.22 0.52 0.42 0.72 c0.44 0.54 1.26 0.68 1.92 0.68 c0.88 0 2.18 -0.16 2.96 -0.58 z M14.665270833333334 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M14.665270833333334 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M20.770541666666666 6 l3 0 l0 14 l-3 0 l0 -14 z M25.1958125 6 l3 0 l0 14 l-3 0 l0 -14 z M36.80108333333334 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M40.601083333333335 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M44.28635416666667 15 c0 1.48 0.74 2.32 2.24 2.32 c0.42 0 0.8 -0.06 1.1 -0.2 c0.56 -0.22 0.94 -0.64 1.14 -1.22 c0.08 -0.28 0.12 -0.58 0.12 -0.9 s-0.04 -0.62 -0.12 -0.9 c-0.22 -0.62 -0.56 -0.96 -1.14 -1.24 c-0.3 -0.12 -0.68 -0.18 -1.1 -0.18 c-1.5 0 -2.24 0.84 -2.24 2.32 z M41.28635416666667 6 l3 0 l0 5 c0.68 -0.78 1.6 -1.1 2.62 -1.1 c2.92 0 4.98 2.34 4.98 5.14 c0 3.16 -2.34 5.06 -5.32 5.06 c-3.1 0 -5.28 -2.04 -5.28 -5.1 l0 -9 z"></path></g></svg>
                        </Link>
                    </div>
                    <div className='p-4 md:p-8 '>
                        <p className='text-lg'>Welcome to Collab</p>
                        <h1 className='py-6 text-3xl md:text-4xl'>Create an account</h1>
                    </div>

                </div>
                <div className='col-span-2 bg-white rounded-xl'>
                    <div className='p-4 flex md:justify-end'>
                        <p>Already have an account? <Link className='underline' to='/login'>Sign in</Link></p>
                    </div>
                    <div className='md:px-8 md:py-16'>
                        <h2 className='hidden md:block p-4 text-xl'>Your account details</h2>
                        <form onSubmit={handleSignup} className=' '>
                            <div className='w-full lg:max-w-2xl p-4 block gap-2'>
                                <div className='py-2 grid lg:grid-cols-2 gap-2'>

                                    <input
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        value={formData.firstName}
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type="text"
                                        placeholder='First Name' />

                                    <input
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        value={formData.lastName}
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type="text"
                                        placeholder='Last Name' />

                                </div>
                                <div className='py-2 grid'>
                                    <input
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        value={formData.email}
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type="text"
                                        placeholder='Email Address' />
                                </div>
                                <div className='py-2 grid relative'>
                                    <input
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        value={formData.password}
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Password' />

                                    {
                                        showPassword ?
                                            <AiOutlineEyeInvisible
                                                onClick={() => setShowPassword(!showPassword)}
                                                color='gray'
                                                size={25}
                                                className='absolute right-4 top-1/2 -translate-y-1/2' />
                                            :
                                            <AiOutlineEye
                                                onClick={() => setShowPassword(!showPassword)}
                                                size={25}
                                                color='gray'
                                                className='absolute right-4 top-1/2 -translate-y-1/2' />
                                    }

                                </div>
                            </div>
                            <div className='p-4'>
                                <p className=' text-slate-500'>By clicking the Sign Up button below, you agree to the GoFundMe
                                    <Link className='underline'> Terms of Service </Link>
                                    and acknowledge the
                                    <Link className='underline'> Privacy Notice</Link>
                                    .</p>
                            </div>
                            <div className='p-4 block md:flex justify-end '>
                                <button
                                    type='submit'
                                    // onClick={handleFormData}
                                    className='w-full lg:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white rounded-xl'>
                                    Sign up
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup