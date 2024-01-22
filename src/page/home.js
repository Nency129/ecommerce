import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

function home() {
  return (
    <div className="lg:p-10 sm:p-0 bg-[url('./assets/background.jpg')] max-h-full bg-cover bg-center opacity-85 space-y-4 max-w-full">
      <Header/>
      <Main/>
    </div>
  )
}

export default home
