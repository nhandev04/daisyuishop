// LoginForm component
export default function LoginForm() {
    return (
        <div className="flex items-center justify-center h-screen  bg-teal-700">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" placeholder="Email" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" placeholder="Password" className="w-full border rounded p-2" />
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm text-teal-500">
                            Forgot password?
                        </a>
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="w-full  bg-teal-700 text-white py-2 rounded">
                        Login
                    </button>
                </form>
            </div>
            <div className="text-white ml-8">
                <h2 className="text-4xl font-bold">Login now!</h2>
            </div>
        </div>
    );
}
