import React from 'react'
import { Link } from 'react-router-dom'

const PageName = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-red-600 hover:text-red-700">Home</Link></li>
            <li className="text-gray-400">›</li>
            <li className="text-gray-600">Page Title</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Title</h1>
          <p className="text-gray-600">
            This page is under development. Content will be added soon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 text-center">
            Check back later for updated content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageName