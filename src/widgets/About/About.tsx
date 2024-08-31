'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Face from 'public/fake-face.webp'
import { Button } from '@/components/ui/button'

const About: FC = () => {
  const [hovered, setHovered] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-96 md:h-full">
            <Image
              src={Face}
              alt="Bazil"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-2 text-4xl font-bold text-gray-900"
              >
                Bazil
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6 text-2xl font-light text-gray-600"
              >
                Webdesigner & Photographer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 text-lg text-gray-500"
              >
                👋 Hello! I'm a freelance creative based in Paris, France. I specialize in crafting
                beautiful web experiences and capturing moments through my lens.
              </motion.p>
            </div>
            <div className="space-y-4">
              {['designer', 'photographer'].map((role) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  onMouseEnter={() => setHovered(role)}
                  onMouseLeave={() => setHovered('')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    variant={role === 'designer' ? 'default' : 'outline'}
                    className="relative w-full overflow-hidden py-6 text-lg font-semibold transition-all duration-300"
                  >
                    <motion.span
                      initial={{ y: 0 }}
                      animate={{ y: hovered === role ? -30 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Need a {role}?
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ y: 30 }}
                      animate={{ y: hovered === role ? 0 : 30 }}
                      transition={{ duration: 0.3 }}
                    >
                      Let's collaborate!
                    </motion.span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

About.displayName = 'About'
export default About
