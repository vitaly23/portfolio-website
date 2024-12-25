'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import AnimatedSectionHeader from './AnimatedSectionHeader'

const projects = [
  {
    title: 'AI-Powered Content Generator',
    description: 'Developed a machine learning model to generate high-quality content based on user prompts.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    demoLink: 'https://demo.example.com/ai-content-generator',
    githubLink: 'https://github.com/example/ai-content-generator',
    type: 'Machine Learning'
  },
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform with features like product management, cart, and checkout.',
    technologies: ['Node.js', 'Express', 'React', 'MongoDB'],
    demoLink: 'https://demo.example.com/ecommerce-platform',
    githubLink: 'https://github.com/example/ecommerce-platform',
    type: 'Web Development'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Created a real-time chat application with features like group chats, file sharing, and end-to-end encryption.',
    technologies: ['Socket.io', 'Node.js', 'React', 'MongoDB'],
    demoLink: 'https://demo.example.com/chat-app',
    githubLink: 'https://github.com/example/chat-app',
    type: 'Web Development'
  }
]

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.type === filter)

  return (
    <motion.section
      id="portfolio"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <AnimatedSectionHeader title="Portfolio" description="Filter projects by type:" />
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant={filter === 'All' ? 'gradient' : 'outline'}
              onClick={() => setFilter('All')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'Web Development' ? 'gradient' : 'outline'}
              onClick={() => setFilter('Web Development')}
            >
              Web Development
            </Button>
            <Button 
              variant={filter === 'Machine Learning' ? 'gradient' : 'outline'}
              onClick={() => setFilter('Machine Learning')}
            >
              Machine Learning
            </Button>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col gradient-hover card-hover-effect">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="gradient">
                      <Link href={project.demoLink} target="_blank">Demo</Link>
                    </Button>
                    <Button asChild variant="gradient">
                      <Link href={project.githubLink} target="_blank">GitHub</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default Portfolio

