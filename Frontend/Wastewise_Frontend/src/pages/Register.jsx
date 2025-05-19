import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    token: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.token.trim()) newErrors.token = 'Token is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/api/register', {
        username: form.username,
        email: form.email,
        password: form.password,
        token: form.token,
      });
      localStorage.setItem('token', res.data.token);
      
    } catch (err) {
      setApiError(err.response?.data?.message || 'Registration failed');
      navigate('/collection-points');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-emerald-600">Register</h2>
        {apiError && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {apiError}
          </div>
        )}
        <form className="space-y-5" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Enter username"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Enter password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Token</label>
            <input
              type="text"
              name="token"
              value={form.token}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.token ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Enter token"
            />
            {errors.token && <p className="text-red-500 text-sm">{errors.token}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              loading ? 'bg-emerald-300 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600'
            } flex items-center justify-center`}
            aria-label="Register"
            onClick={()=>navigate('/collection-points')}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
