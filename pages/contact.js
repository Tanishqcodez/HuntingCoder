import React, { useState } from 'react'
import Head from "next/head"

export default function contact() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [message, setmessage] = useState();
  let handleSumbit = (e) => {
    e.preventDefault()

    const data = { name ,email ,phone, message};

    fetch("https://coderhunting.netlify.app/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert('Form sumbitted, Thanks for contacting us')
        setname(' ')
        setphone(' ')
        setemail(' ')
        setmessage(' ')
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }


  let handleChange = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    else if (e.target.name === "phone") {
      setphone(e.target.value);
    }
    if (e.target.name === "email") {
      setemail(e.target.value);
    }
    if (e.target.name === "message") {
      setmessage(e.target.value);
    }
  }
  return (
    <>
      <Head>
        <title>Contact | Hunting</title>
      </Head>
      <div>
        <section>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Any Querry? Feel Free To Contact Us</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form className="flex flex-wrap -m-2" onSubmit={handleSumbit}>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900  focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone (will be kept a secret)</label>
                      <input onChange={handleChange} value={phone} type="phone" id="name" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600" aria-required={'true'}>Email (will be kept a secret)</label>
                      <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                      <textarea value={message} onChange={handleChange} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-gray-900  border-0 py-2 px-8 focus:outline-none  rounded-md hover:rounded-xl focus-rounded-xl text-lg transition-all">Sumbit</button>
                  </div>

                </form>
              </div>
            </div>
          </section>
        </section>
      </div>



    </>
  )
}




// video 26 timeline 2:59s