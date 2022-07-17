export default function LoginForm() {
    return (
        <div className="w-screen h-screen">
            <div style={{backgroundImage:"dts-03-mini-project/src/assets/login-image.jpg"}} className="absolute w-10/12 left-0 h-screen"></div>
            <div className="bg-gradient-to-r from-transparent via-black to-black absolute w-10/12 right-0 h-screen items-center flex justify-end">
                <form className="flex flex-col p-[100px]">
                    <input type="text" placeholder="E M A I L" className="w-[300px] h-[60px] mt-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                    <input type="password" placeholder="P A S S W O R D" className="w-[300px] h-[60px] mt-3 p-4 border border-solid border-white bg-neutral-900 rounded" />
                    <button type="submit" className="bg-[#E50913] text-white text-s w-[300px] h-[60px] mt-6 rounded">L O G I N</button>
                </form>
            </div>
        </div>
    )
}