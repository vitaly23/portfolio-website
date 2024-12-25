'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import { Code2, Database, Cloud, Box, PenToolIcon as Tool, Globe } from 'lucide-react'
import {
  PythonIcon,
  ReactIcon,
  NextjsIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReduxIcon,
  FlaskIcon,
  DjangoIcon,
  FastAPIIcon,
  NodejsIcon,
  JavaIcon,
  SpringIcon,
  MongoDBIcon,
  PostgresIcon,
  RedisIcon,
  AWSIcon,
  KubernetesIcon,
  DockerIcon,
  RabbitMQIcon,
  GitIcon,
  OpenTelemetryIcon,
  SwaggerIcon
} from './TechIcons'

const skillsData = [
  {
    category: 'Backend',
    icon: <Code2 className="w-6 h-6 mb-2 text-purple-500" />,
    skills: [
      { name: 'Python', icon: <PythonIcon className="w-5 h-5" /> },
      { name: 'Flask', icon: <FlaskIcon className="w-5 h-5" /> },
      { name: 'Django', icon: <DjangoIcon className="w-5 h-5" /> },
      { name: 'FastAPI', icon: <FastAPIIcon className="w-5 h-5" /> },
      { name: 'Node.js', icon: <NodejsIcon className="w-5 h-5" /> },
      { name: 'Java', icon: <JavaIcon className="w-5 h-5" /> },
      { name: 'Spring', icon: <SpringIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Frontend',
    icon: <Globe className="w-6 h-6 mb-2 text-blue-500" />,
    skills: [
      { name: 'React', icon: <ReactIcon className="w-5 h-5" /> },
      { name: 'Next.js', icon: <NextjsIcon className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <JavaScriptIcon className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <TypeScriptIcon className="w-5 h-5" /> },
      { name: 'Redux', icon: <ReduxIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 mb-2 text-green-500" />,
    skills: [
      { name: 'MongoDB', icon: <MongoDBIcon className="w-5 h-5" /> },
      { name: 'PostgreSQL', icon: <PostgresIcon className="w-5 h-5" /> },
      { name: 'Redis', icon: <RedisIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 mb-2 text-cyan-500" />,
    skills: [
      { name: 'AWS', icon: <AWSIcon className="w-5 h-5" /> },
      { name: 'Kubernetes', icon: <KubernetesIcon className="w-5 h-5" /> },
      { name: 'Docker', icon: <DockerIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Additional Tools',
    icon: <Tool className="w-6 h-6 mb-2 text-red-500" />,
    skills: [
      { name: 'RabbitMQ', icon: <RabbitMQIcon className="w-5 h-5" /> },
      { name: 'Auth0', icon: null },
      { name: 'Git', icon: <GitIcon className="w-5 h-5" /> },
      { name: 'OpenTelemetry', icon: <OpenTelemetryIcon className="w-5 h-5" /> },
      { name: 'Swagger', icon: <SwaggerIcon className="w-5 h-5" /> }
    ]
  }
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <AnimatedSectionHeader title="Tech Stack" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full gradient-hover card-hover-effect">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl font-semibold mb-2">
                      {category.icon}
                      <span className="ml-2">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill.name} className="flex items-center">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            {skill.icon ? (
                              skill.icon
                            ) : (
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                            )}
                          </div>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default Skills

