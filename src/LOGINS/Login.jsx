import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auths from '../appwrite/appwrite';
import { motion } from 'framer-motion';
import { ArrowLeft, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';


function Login() {
    
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Check if user is already logged in
  const navigate = useNavigate();

  // Check if user is already logged in on mount
  React.useEffect(() => {
    (async () => {
      const user = await auths.currentuser();
      if (user){

        setIsLoggedIn(true);
      } 
    })();
  }, []);

  const login = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await auths.login({
        email: data.email,
        pass: data.password
      });

      if (session) {
        setIsLoggedIn(true);
        toast.success("Logged in successfully!");
          
        setTimeout(() => {
            navigate('/');
        }, 2000);
      }
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await auths.logout();
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
        
        {/* Back to Home - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-8 left-8 z-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-full shadow-xl text-gray-800 font-semibold text-lg transition-all hover:shadow-2xl hover:text-red-700"
          >
            <ArrowLeft className="w-6 h-6" />
            Back to Home
          </Link>
        </motion.div>

        {/* Logout Button - Top Right (Only if logged in) */}
        {isLoggedIn && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-8 right-8 z-10"
          >
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full shadow-xl text-white font-bold text-lg transition-all hover:shadow-2xl"
            >
              <LogOut className="w-6 h-6" />
              Logout
            </button>
          </motion.div>
        )}

        <div className="w-full max-w-6xl grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Left Side - Same as before */}
          <div className="hidden lg:block relative h-full min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1618609252884-c29e29b32205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZSUyMGZpZ2h0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Firefighter in action - Safety First"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <motion.h1 className="text-5xl font-extrabold mb-4 drop-shadow-2xl">
                Protecting Lives,<br /> Every Single Day
              </motion.h1>
              <p className="text-xl opacity-90 drop-shadow-lg">
                SS.SAFETY SOLUTIONS – Your trusted partner in fire and safety equipment.
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex items-center justify-center bg-white p-10 lg:p-20">
            <motion.div className="w-full max-w-md">
              <div className="text-center mb-10">
                <img 
                  src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png" 
                  alt="Flame Icon"
                  className="h-20 w-20 mx-auto mb-4 drop-shadow-lg"
                />
                <h2 className="text-4xl font-extrabold text-red-800">Welcome Back</h2>
                <p className="text-gray-600 mt-2 text-lg">Log in to your account</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-700 rounded-xl text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(login)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("password", { required: "Password is required" })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-800 hover:to-orange-700 text-white font-extrabold text-xl rounded-xl shadow-xl transition transform hover:scale-105 disabled:opacity-70"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </form>

              <div className="text-center mt-10">
                <p className="text-gray-600 text-lg">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-orange-600 font-bold hover:text-red-700 underline">
                    Sign Up
                  </Link>
                </p>
              </div>

              <div className="lg:hidden text-center mt-12">
                <img 
                  src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png"
                  alt="Flame Icon"
                  className="h-24 w-24 mx-auto opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;