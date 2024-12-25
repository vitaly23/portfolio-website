'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const ProgressBar = () => {
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // setActiveSection('home') // Set initial active section to 'home'

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(scrollPercentage)

      const sectionOffsets = sections.map(section => {
        const element = document.getElementById(section.id)
        return element ? element.offsetTop - (section.id === 'home' ? windowHeight : windowHeight / 2) : 0
      })

      const currentSectionIndex = sectionOffsets.findIndex(
        (offset, index) => 
          (scrollTop >= offset && (index === sectionOffsets.length - 1 || scrollTop < sectionOffsets[index + 1])) ||
          (index === 0 && scrollTop < sectionOffsets[1]) // This ensures 'home' is active at the top
      )

      if (currentSectionIndex !== -1) {
        setActiveSection(sections[currentSectionIndex].id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="fixed left-0 top-0 h-full w-16 hidden md:flex flex-col items-center justify-center">
      <div className="h-3/4 w-1 bg-gray-200 rounded-full relative">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="absolute w-16 -left-8 flex items-center justify-start cursor-pointer"
            style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
            onClick={() => scrollToSection(section.id)}
          >
            <div
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                activeSection === section.id ? 'bg-primary' : 'bg-muted'
              }`}
            />
            <span
              className={`text-xs ml-2 transition-colors duration-200 ${
                activeSection === section.id ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}
            >
              {section.label}
            </span>
          </div>
        ))}
      </div>
      <ThemeToggle />
    </div>
  )
}

export default ProgressBar

