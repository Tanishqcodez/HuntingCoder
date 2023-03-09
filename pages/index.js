import Head from "next/head";
import { useState } from "react";
import Link from 'next/link'


export default function Home(props) {
  let heading = `<Hunting Coder/>`;
  const [blogs, setblogs] = useState(props.allBlogs)

  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder" />
        <meta name="keyword" content="Hunting Coder Blogs, hutning coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-0 p-0">
        <div className="my-10">
          <h1 className="text-center text-4xl font-semibold leading-1 ">
            {heading}
          </h1>
          <h2 className="text-center text-xl font-semibold -leading-1">
            Hunting Coder blogs for Hunting Coder
          </h2>
        </div>
        <div className="bg-green-00 h-max my-2.5">
          <div className="">
            <div className="">

              <div className="container px-5  mx-auto">
                <div className="flex flex-wrap w-full ">
                  <div className="lg:w-1/2 w-full lg:mb-0">
                    <h4 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
                      Latest Blogs
                    </h4>
                    <div className="h-1 w-32 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>

              <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                  <div className="flex flex-wrap -mx-4 -my-8">


                    {
                      blogs.map((blogItem) => {
                        return <div className="py-8 px-4 lg:w-1/3">
                          <div className="h-full flex items-start">
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

                              </h6>
                              <h6 className="title-font text-xl font-medium text-gray-900 mb-3">
                                {blogItem.title}
                              </h6>
                              <p className="leading-relaxed mb-2">
                                {blogItem.metadesc.substr(0, 40) + '...'}
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
          </div>
        </div>
      </main>
    </>
  );
}


export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json();

  return {
    props: { allBlogs }
  }
}
