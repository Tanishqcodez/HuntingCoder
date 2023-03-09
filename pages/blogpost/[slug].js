import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const slug = (props) => {
    const [blog, setblog] = useState(props.myblog)
    return (
        <>
            <Head>
                <title>{blog && blog.title + " | Hunting Coder"}</title>
            </Head>
            <div className='mt-10'>
                <h1 className='text-4xl text-center mb-5 '> {blog && blog.title}</h1>
                <div className=' flex justify-center items-center'>
                {blog && <div className="text-center text-xl max-w-[75vw]" dangerouslySetInnerHTML={{__html: blog.content}} ></div>}
                </div>
                <div className="flex  mt-10  mb-20">
                    <Link href={'/blog'}>
                        <button className='lg:translate-x-64 md:translate-x-10 w-36 h-10 bg-gray-900 text-white rounded-md hover:rounded-xl transition-all'>Go back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default slug


export async function getServerSideProps(context) {
    const {slug} = context.query
    let data = await fetch(`https://coderhunting.netlify.app/api/getblogs?slug=${slug}`)
    let myblog = await data.json()

    return {
        props: {myblog},
    }
}