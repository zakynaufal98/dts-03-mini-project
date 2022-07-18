import loginImage from "../assets/login-image.jpg"


export default function LoginForm() {

    return (
        <div className="w-full h-screen overflow-x-hidden">
            <img src={loginImage} alt="login-image" className="absolute object-cover w-10/12 left-0 h-screen" />
            <div className="bg-gradient-to-r from-transparent via-black to-black absolute w-screen right-0 h-screen items-center flex justify-center sm:justify-end">
                <form className="text-white flex flex-col sm:mr-24">
                    <input type="text" placeholder="E M A I L" className="w-72 h-12 mt-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                    <input type="password" placeholder="P A S S W O R D" className="w-72 h-12 mt-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                    <button type="submit" className="bg-[#E50913] text-white text-s w-72 h-12 mt-6 rounded">L O G I N</button>
                </form>
            </div>
        </div>
    )
}