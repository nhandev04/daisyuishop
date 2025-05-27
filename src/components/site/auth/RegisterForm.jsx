// RegisterForm component
export default function RegisterForm() {
    return (
        <div className="flex items-center justify-center h-screen bg-teal-700">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input type="text" placeholder="First Name" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input type="text" placeholder="Last Name" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" placeholder="Email" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" placeholder="Password" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="w-full border rounded p-2" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded">
                        Register
                    </button>
                </form>
            </div>
            <div className="text-white ml-8">
                <h2 className="text-4xl font-bold">Register now!</h2>
            </div>
        </div>
    );
}
