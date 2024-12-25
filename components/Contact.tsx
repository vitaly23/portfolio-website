'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import { sendEmail } from '@/app/actions/send-email'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const Contact = () => {
  const [pending, setPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const result = await sendEmail(formData)
      
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
        // Reset the form
        const form = document.getElementById('contact-form') as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader className="text-center">
          <AnimatedSectionHeader 
            title="Contact Me" 
            description="Get in touch for opportunities or collaborations" 
            className="mx-auto"
          />
        </CardHeader>
        <CardContent>
          <div className="w-full max-w-md mx-auto">
            <motion.form
              id="contact-form"
              action={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={pending}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={pending}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                disabled={pending}
              />
              <Button 
                type="submit" 
                variant="gradient"
                disabled={pending}
                className="w-full"
              >
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.form>
          </div>
          <motion.div
            className="mt-8 flex justify-center space-x-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/vitaly23" target="_blank" rel="noopener noreferrer" className="gradient-hover p-2 rounded-full">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/vitalygorelik" target="_blank" rel="noopener noreferrer" className="gradient-hover p-2 rounded-full">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:vitalygorelik1@gmail.com" className="gradient-hover p-2 rounded-full">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default Contact

