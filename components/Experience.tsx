'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSectionHeader from './AnimatedSectionHeader'

const experiences = [
  {
    company: 'Melingo AI',
    role: 'Full Stack Software Engineer',
    period: '2024 - current',
    achievements: [
      'Led the company\'s flagship product\'s technical design, architecture, and development from end to end.',
      'Introduced best practices into the R&D department such as code reviews, PRs, coding standards and conventions, feature branches, and local development.',
      'Identified and resolved architectural bottlenecks and technical debt in the product, leading to faster and simpler development, testing, and deployment.'
    ]
  },
  {
    company: 'Wallter Payments',
    role: 'Full Stack Software Engineer',
    period: '2022 - 2024',
    achievements: [
      'Led the development of a cross-functional project to successfully implement a new payment functionality via an API, enabling streamlined and secure payment transactions.',
      'Led the technical design and development of the company\'s registration page, ensuring a seamless onboarding process while adhering to design best practices.',
      'Demonstrated full ownership and responsibility for end-to-end development tasks, covering both front-end and back-end development, from technical design to implementation and deployment.'
    ]
  },
  {
    company: 'Celsius Network',
    role: 'Back-end Software Engineer',
    period: '2021 - 2022',
    achievements: [
      'Developed microservices with an orchestration layer to support system functionality.',
      'Improved critical daemon backend process by 333% in runtime performance.',
      'Built RESTful APIs from scratch to extend the functionality of new systems and modules.'
    ]
  }
]

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <AnimatedSectionHeader title="Work Experience" />
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="mb-6 gradient-hover card-hover-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                  <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default Experience

