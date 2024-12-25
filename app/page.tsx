'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { DownloadIcon, BriefcaseIcon, MailIcon, Calendar } from 'lucide-react'
import { WavingHand } from './components/WavingHand'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import dynamic from 'next/dynamic'
import Contact from './components/Contact'
import Footer from './components/Footer'
const CalendlyPopupButton = dynamic(() => import('./components/Calendly'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <motion.section
        id="home"
        className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video background with overlay and gradient edges */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vid2-IJCuTkD06iNIkbTOPLordqFXVRAohz.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-30 p-8">
          <motion.div
            className="space-y-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="text-5xl font-extrabold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_4px_rgb(0_0_0_/_30%),_0_4px_8px_rgb(0_0_0_/_20%)]">
                Hi, I'm Vitaly!
              </h1>
              <WavingHand className="w-12 h-12 animate-wave" />
            </motion.div>
            <motion.p
              className="text-3xl font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_4px_rgb(0_0_0_/_30%),_0_4px_8px_rgb(0_0_0_/_20%)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Full Stack Software Engineer
            </motion.p>
            <motion.p
              className="text-xl font-medium text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_4px_rgb(0_0_0_/_30%),_0_4px_8px_rgb(0_0_0_/_20%)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Crafting innovative software products with expertise in Tech, AI and cloud technologies
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Button asChild variant="gradient" size="lg" className="shadow-lg">
                <a href="/Vitaly Gorelik - CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <DownloadIcon className="mr-2 h-5 w-5 gradient-icon" /> Download CV
                </a>
              </Button>
              <Button asChild variant="gradient" size="lg" className="shadow-lg">
                <Link href="#portfolio" className="flex items-center justify-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5 gradient-icon" /> View Projects
                </Link>
              </Button>
              <CalendlyPopupButton />
              <Button asChild variant="gradient" size="lg" className="shadow-lg">
                <Link href="#contact" className="flex items-center justify-center">
                  <MailIcon className="mr-2 h-5 w-5 gradient-icon" /> Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <Link href="#about">
            <div className="flex flex-col items-center cursor-pointer">
              <span className="text-sm font-medium mb-2 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_4px_rgb(0_0_0_/_30%)]">
                Scroll Down
              </span>
              <svg 
                className="w-6 h-6 animate-bounce text-white [filter:_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </Link>
        </motion.div>
      </motion.section>

      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

