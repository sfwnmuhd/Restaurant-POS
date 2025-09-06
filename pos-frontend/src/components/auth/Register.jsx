import React, { useState } from 'react'
import { register } from '../../https';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Register = ({setIsRegister}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password : "",
        role: ""
    })
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({...formData, role: selectedRole})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerMutation.mutate(formData);
    }

    const registerMutation = useMutation({
            mutationFn: (reqData) => register(reqData),
            onSuccess: (res) => {
                const {data} = res;
                enqueueSnackbar(data.message, {variant: "success"});
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    role: ""
                })
                
                setTimeout(()=>{
                    setIsRegister(false);
                },1500)
                navigate('/auth');
                
            },
            onError: (error) => {
                const {response} = error;
                enqueueSnackbar(response.data.message, {variant: "error"});
            }
        })


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Employee Name
                </label>
                <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                    <input type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        name='name'
                        placeholder='Enter employee name'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Employee Email
                </label>
                <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                    <input type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        placeholder='Enter employee email'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Employee Phone
                </label>
                <div className='flex items-center rounded-lg p-5 px-4 bg-[#1dddddf1f1f]'>
                    <input type="number" 
                        value={formData.phone}
                        onChange={handleChange}
                        name='phone'
                        placeholder='Enter employee phone'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Password
                </label>
                <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                    <input type="password" 
                        value={formData.password}
                        onChange={handleChange}
                        name='password'
                        placeholder='Enter password'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Choose your role
                </label>
                <div className="flex items-center gap-3 mt-4">
                    {
                        ["Waiter","Cashier","Admin"].map((role) => {
                            return(
                                <button
                                    key={role}
                                    type='button'
                                    onClick={() => handleRoleSelection(role)}
                                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer ${formData.role === role ? "bg-indigo-700" : ""}`}
                                >
                                    {role}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <button type='submit' className=' w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold'>
                Sign up
            </button>
        </form>
    </div>
  )
}

export default Register
