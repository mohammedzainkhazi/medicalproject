import React, { useState, useEffect } from 'react'
import Graph from './Graph'
import { getDatabase, ref, onValue } from "firebase/database";


function Patient() {

    const db = getDatabase();
    const [patients, setpatients] = useState([])

    const fetchData = async () => {
        let pts = [];
        const count = ref(db, '/');
        await onValue(count, (snapshot) => {
            snapshot.forEach(pst => {
                const data = pst.val()
                pts.push({ data })
            })
            setpatients(pts);
        });
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div id="PTN">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Search Patient</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter Patient Id to Fetch Patient Data</p>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <div className="flex flex-row items-baseline justify-between">
                            <input type="text" id="patient" name="patient" placeholder='Patient ID' className="w-2/3 bg-gray-100 mb-10 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-indigo-700"
                            >
                                Search
                            </button>
                        </div>
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date of Test</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Health Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((pt, i=pt.data.id) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3">{i}</td>
                                            <td className="px-4 py-3">{pt.data.Name}</td>
                                            <td className="px-4 py-3">{pt.data.Date}</td>
                                            <td className="px-4 py-3 text-lg text-gray-900">{pt.data.Health_Status}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                    <Graph />
                </div>
            </section>
        </div>
    )
}

export default Patient