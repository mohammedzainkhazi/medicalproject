import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {

    let navigate = useNavigate();
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const login = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user.displayName);     
                navigate(`/home/${user.displayName}`, { replace: true });           
                // ...
            })
            .catch((error) => {
                alert(error.message);
        });
        
    }
    useEffect(() => {
        if(auth.currentUser !== null){
            navigate(`/home/${auth.currentUser.displayName}`, { replace: true });
        }
    }, [])
    
    return (
        <section className="text-gray-600 body-font relative pt-20">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Log In</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter Credentials to Access</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" onChange={e => setemail(e.target.value)} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" onChange={e => setpass(e.target.value)} id="pass" name="pass" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full text-center">
                            <button className="w-full text-white text-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={login}><center>LOGIN</center></button>
                        </div>
                        <p className='ml-3'>Don't have an account ? </p>
                        <div className="p-2 w-full text-center">
                            <Link to="/signup"><button className="w-full text-white text-center bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"><center>Sign Up</center></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login