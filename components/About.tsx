'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSectionHeader from './AnimatedSectionHeader'

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="gradient-hover card-hover-effect w-full">
        <CardHeader>
          <AnimatedSectionHeader title="About Me" />
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a Full Stack Software Engineer with 3 years of experience building software solutions for tech companies in the Financial and AI domains. I specialize in end-to-end design and development while maintaining full ownership of my deliverables.
          </motion.p>
          <motion.h3
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Career Highlights
          </motion.h3>
          <motion.ul
            className="list-disc list-inside space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <li>Led the company's flagship product's technical design, architecture, and development
              <br />&nbsp;&nbsp;&nbsp;&nbsp;from end to end at Melingo AI.</li>
            <li>Introduced best practices into the R&D department such as code reviews, PRs, coding
              <br />&nbsp;&nbsp;&nbsp;&nbsp;standards and conventions, feature branches, and local development.</li>
            <li>Led the development of a cross-functional project to successfully implement a new
              <br />&nbsp;&nbsp;&nbsp;&nbsp;payment functionality via an API at Wallter Payments.</li>
            <li>Improved critical daemon backend process by 333% in runtime performance at Celsius
              <br />&nbsp;&nbsp;&nbsp;&nbsp;Network.</li>
          </motion.ul>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default About

