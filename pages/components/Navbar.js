import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    let heading = `<Hunting Coder/>`;
    return (
        <>
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">{heading}</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'}><li className="cursor-pointer list-none mr-5  ">Home</li></Link>
                    <Link href={'/blog'}><li className="cursor-pointer mr-5 list-none ">Blogs</li>    </Link>
                    <Link href={'/contact'}><li className="cursor-pointer  mr-5 list-none">Contact</li> </Link>
                    <Link href={'/about'}><li className="cursor-pointer mr-5 list-none ">About us</li></Link>

                </nav>
            </div>
        </header>
        </>
    )
}
