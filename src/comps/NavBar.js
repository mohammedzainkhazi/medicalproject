import React ,{useState,useEffect}from 'react'
import logo from './images/logo.jpg';
import { auth } from './Firebase'
import { signOut } from 'firebase/auth';
import { useNavigate, useLocation, useParams } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();
    const uname = useLocation().pathname;
    const [showLinks, setshowLinks] = useState(false)
    const signout = () => {
        signOut(auth).then(() => {
            console.log('Signed Out');
            navigate("/login", { replace: true });
        })
    }
    const handleLink = () => {
        if (uname == '/login' || uname == '/signup') {
            setshowLinks(false)
        }
        else{
            setshowLinks(true);
        }
    }
    useEffect(() => {
      handleLink();
    }, [])
    
    return (
        <div className='z-100 bg-white shadow-2xl h-[10] fixed w-full'>
            <header className="text-gray-600 body-font h-[10]">
                <div className="container mx-auto flex flex-wrap justify-evenly p-5 flex-col md:flex-row items-center m-0">
                    <a href="!#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} height={60} width={60} alt="LOGO" />
                        <span className="ml-3 text-[30px]">RMPS</span>
                    </a>
                    {
                        auth.currentUser !== null ? 
                        <>
                        <nav className="md:ml-auto cursor-pointer flex flex-wrap items-center text-base justify-center">
                            <a href="#HOME" className="mr-5 hover:text-gray-900">Home</a>
                            <a href="#PTN" className="mr-5 hover:text-gray-900">Patient Search</a>
                            <a className="mr-5 hover:text-gray-900">Graph</a>
                        </nav> 
                        <button className="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-white mt-4 md:mt-0" onClick={signout}>LOGOUT
                        </button>
                        </> : <div />
                    }
                </div>
            </header>
        </div>
    )
}

export default NavBar