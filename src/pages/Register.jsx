import { Link } from 'react-router-dom'
import loginImage from "../assets/login-image.jpg"

function Register() {

    return (
        <div className="w-full overflow-x-hidden">
            <img src={loginImage} alt="login-image" className="absolute blur-md object-cover w-full h-screen flex"></img>
            <div className="absolute flex items-center justify-center bg-transparent w-screen h-screen">
                <div className="self-center bg-slate-800 bg-opacity-60 p-16 rounded-lg ">
                    <form className="text-white flex flex-col">
                        <label>Username</label>
                        <input type="text" placeholder="" className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                        
                        <label>E-mail</label>
                        <input type="email" placeholder="example@domain.com" className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                        
                        <label>Password</label>
                        <input type="password" placeholder="" className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                        
                        <label>Confirm Password</label>
                        <input type="password" placeholder="" className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                        
                        <button type="submit" className="bg-[#E50913] text-white text-s w-72 h-12 mt-6 rounded">Submit</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Register