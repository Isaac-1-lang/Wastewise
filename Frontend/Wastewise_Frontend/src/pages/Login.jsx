import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (form.email=="isaprecieux112@gmail.com" && form.password=="361304olc0012024") {
      toast.success("Logged in successfully");
      navigate("/home");
    } else if(form.email=="dari960@gmail.com" && form.password=="121402pr0732021") {
        navigate('/dashboard');
    } 
    else {
      toast.error("Invalid credentials");
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setApiError('');
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   if (!validateForm()) return;
  //   setLoading(true);
  //   try {
  //     const res = await axios.post('http://localhost:3000/api/login', form);
  //     localStorage.setItem('token', res.data.token);
  //     navigate('/dashboard');
  //   } catch (err) {
  //     setApiError(err.response?.data?.message || 'Invalid credentials');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        {apiError && (
          <p className="text-red-500 text-sm text-center mb-4" role="alert">
            {apiError}
          </p>
        )}
        <form onSubmit={validateForm} className="space-y-5" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'password-error' : undefined}
              className={`w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              loading ? 'bg-emerald-300 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600'
            } flex items-center justify-center`}
            aria-label="Log in"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : 'Log In'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-emerald-500 hover:text-emerald-700 font-medium underline"
            aria-label="Navigate to registration page"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;