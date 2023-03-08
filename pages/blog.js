import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

export default function blog(props) {
    const [blogs, setblogs] = useState(props.allBlogs)
    

    return (
        <>
            <Head>
                <title>Blogs | Hunting Coder</title>
            </Head>
            <h1 className='text-center text-4xl'>Blogs(3)</h1>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className=" -mx-4 -my-8">


                            {
                                blogs.map((blogItem) => {
                                    return <div className="py-8 px-4 lg:w-1/3" key={blogItem.slug}>
                                        <div className="h-full flex items-start border-gray-400 border-2 p-4 rounded-md">
                                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                                    {blogItem.month}
                                                </span>
                                                <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                                    {blogItem.day}
                                                </span>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h6 className="tracking-widest text-xs title-font font-medium mb-1">
                                                    Coding
                                                </h6>
                                                <h6 className="title-font text-xl font-medium text-gray-900 mb-3">
                                                    {blogItem.title}
                                                </h6>
                                                <p className="leading-relaxed mb-2">
                                                    {blogItem.metadesc.substr(0,40)+'...'}
                                                </p>
                                                <Link href={blogItem.slug} className="inline-flex ">
                                                    <span className="flex-grow flex flex-col pl-3">
                                                        <span className="title-font font-medium text-gray-900 cursor-pointer">
                                                            Read more...
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json();



    return {
        props: {allBlogs}
    }
}
