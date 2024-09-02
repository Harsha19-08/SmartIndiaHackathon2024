import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/input/PasswordInput'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'

const Login = () => {
  const navigate = useNavigate();
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [error, setError] = React.useState(null);
 
 
const handleLogin = async (e) => {
  e.preventDefault();


  if(!validateEmail(email)){
    setError("Please enter a valid email address");
    return; 
  }

  if(!password){
    setError("Password must be at least 6 characters long");
    return;
  }
  setError("");


  //Login APi call
  console.log("Starting login process");
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });

    console.log("API Response:", response.data);

    if (response.data && response.data.accessToken) {
      console.log("Token received:", response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/dashboard");
    } else {
      console.log("Token not found.");
      setError("Login failed, token not received.");
    }

  } catch (err) {
    console.log("Error occurred:", err);
    if (err.response && err.response.data && err.response.data.message) {
      setError(err.response.data.message);
    } else {
      setError("Something went wrong. Please try again later");
    }
  }
  console.log("Login process ended");

  
};


  return (
    <>
        <Navbar/>
        <div className="flex items-center justify-center mt-28">
            <div className="w-96 border rounded bg-white px-7 py-10 ">
                <form onSubmit={handleLogin}>
                    <h4 className="text-2xl mb-7">Signin</h4>
                    <input type="text" placeholder="Email" className="input-box"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}/>
                      <PasswordInput
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                    <button type="submit" className="btn-primary">Signin</button>
                    <p className="text-sm text-center mt-4">
                    New to Alumini Connect? <Link to='/signup' className="font-medium text-primary underline ">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    </>
    
  )
}

export default Login