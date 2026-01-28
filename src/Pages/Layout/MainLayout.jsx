import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MainLayout = () => {
  const { pathname } = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Optional: Smooth scroll to top
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Check if it's a hash link (like #section)
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault()
        const href = e.target.closest('a').getAttribute('href')
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This will render the current page content */}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout