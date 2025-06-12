import CartLogo from "./CartLogo";

const LoginForm = () => {
    return (
        <>
            <div className="p-5 shadow-md  mt-20">
                <div className="flex justify-center items-center my-2"><CartLogo /></div>
                <div className="">
                    <form className="flex flex-col items-center space-y-4">
                        <div className="py-2">
                            <input
                                className="border w-72 md:w-80 lg:w-96 border-slate-500 rounded-lg bg-slate-50 px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="text"
                                name="user-name"
                                required
                                placeholder="user name" />
                        </div>
                        <div className="py-2">
                            <input
                                className="border w-72 md:w-80 lg:w-96 border-slate-500 rounded-lg bg-slate-50 px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="password"
                                name="user-password"
                                required
                                placeholder="password" />
                            <p className="text-center my-2 text-blue-600 pointer-events-none">Forgot password?</p>
                        </div>
                        <button className="border w-72 md:w-80 lg:w-96 border-black p-2 rounded-md hover:text-white hover:bg-black">Sign in</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default LoginForm;