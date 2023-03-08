import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import man from '../public/oldman.jpg'
import { faker } from '@faker-js/faker';

const about = () => {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, [])
    return (
        <>
            <Head>
                <title>About us | Hunting Coder</title>
            </Head>
            <main>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-8 mx-auto flex flex-col">
                        <div class="lg:w-4/6 mx-auto">
                            <h1 className='text-4xl text-center'>About Us</h1>
                            <div class="flex flex-col sm:flex-row ">
                                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <Image src={man} alt="OLD MAN" className="h-20 w-20 rounded-full" />
                                    </div>
                                    <div class="flex flex-col items-center text-center justify-center">
                                        {hydrated && <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{faker.name.fullName()}</h2>}
                                        <div class="w-12 h-1 bg-gray-900 rounded mt-2 mb-4"></div>
                                        <p class="text-base">Full Stack Web Developer, Founder of Humans</p>
                                    </div>
                                </div>
                                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p class="leading-relaxed text-lg mb-4">Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. Years use place decay sex worth drift age. Men lasting out end article express fortune demands own charmed. About are are money ask how seven.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default about