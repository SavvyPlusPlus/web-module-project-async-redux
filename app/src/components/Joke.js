import Punchline from "./Punchline";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../actions/jokeAction";


const Joke = () => {
    const [show, setShow] = useState(false);

    const joke = useSelector((state) => state.joke);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchJoke(dispatch);
        console.log("FIRED!")
    }, []); // empty dep array for componentDidMount
    console.log(joke)




    const handleNewJoke = (e) => {
        e.preventDefault()
        fetchJoke(dispatch)
        setShow(false);

    }

    const handleToggle = (e) => {
        e.preventDefault()
        setShow(true);
    }

    return (
        <>
            <div className="relative">
                <div className="h-screen w-full z-10 inset-0 overflow-y-auto">
                    <div className="absolute w-full h-full inset-0 bg-indigo-600 opacity-75">
                    </div>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        </span>
                        <div className="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div>
                                <div className="rounded-lg p-8 bg-white shadow">
                                    <div className="bg-white dark:bg-gray-800 ">
                                        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                                            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                                                <span className="block">
                                                    {joke.setup}
                                                </span>
                                                <span className="block text-indigo-500">
                                                    {show === true ? <Punchline punchline={joke.punchline} /> : null}
                                                </span>
                                            </h2>
                                            <div className="lg:mt-0 lg:flex-shrink-0">
                                                <div className="flex items-center justify-between gap-4 w-full mt-8">
                                                    <button onClick={handleToggle} type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        Punchline!
                                                    </button>
                                                    <button onClick={handleNewJoke} type="button" className="py-4 px-6  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        New Joke
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Joke;