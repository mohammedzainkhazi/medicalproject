import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from './Firebase';
import Patient from './Patient'

function Home() {
    const {uname} = useParams();
    const nav = useNavigate();
    if(auth.currentUser == null ) nav("/login",{replace:true}) 
    
    return (
        <div id="HOME" className='pt-20'>
            <section className="text-gray-600 body-font pt-20">
                <div className="container mx-auto flex px-5 pt-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello <span className='text-blue-400 font-extrabold'>{uname}</span>,
                        </h2>
                        <br></br>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Remote Patient
                            <br className="hidden lg:inline-block" />Monitoring System
                        </h1>
                        <p className="mb-8 leading-relaxed">Remote patient monitoring (RPM) is a technology to enable monitoring of patients outside of conventional clinical settings, such as in the home or in a remote area, which may increase access to care and decrease healthcare delivery costs. RPM involves the constant remote care of patients by their physicians, often to track physical symptoms, chronic conditions.
                            Devices like smartwatches are continually updated with new Remote Monitoring technologies such as heartbeat monitors.

                            Incorporating RPM in chronic-disease management may significantly improve an individual's quality of life, by allowing patients to maintain independence, prevent complications, and to minimize personal costs. RPM facilitates these goals by delivering care through telecommunications. </p>
                        <div className="flex justify-center">
                            <a href='#PTN'>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search Patient</button>
                            </a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/front-view-assortment-medical-still-life-elements_23-2148854096.jpg?w=2000" />
                    </div>
                </div>
                <Patient />
            </section>
        </div>
    )
}

export default Home