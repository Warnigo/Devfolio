'use client'

import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Briefcase, Code, User } from 'lucide-react'
import Me from 'public/fake-face.webp'

const skills = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Node.js']

const AboutSection: FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'experience'>('about')

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <Image
          src={Me}
          alt="Abubakir Shavkatov"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>

      <motion.h1 variants={itemVariants} className="mb-4 text-4xl font-bold">
        Abubakir Shavkatov
      </motion.h1>

      <motion.h2 variants={itemVariants} className="mb-8 text-2xl text-blue-400">
        Frontend Developer
      </motion.h2>

      <motion.div variants={itemVariants} className="mb-8 flex space-x-4">
        <TabButton
          icon={<User />}
          label="About"
          isActive={activeTab === 'about'}
          onClick={() => setActiveTab('about')}
        />
        <TabButton
          icon={<Code />}
          label="Skills"
          isActive={activeTab === 'skills'}
          onClick={() => setActiveTab('skills')}
        />
        <TabButton
          icon={<Briefcase />}
          label="Experience"
          isActive={activeTab === 'experience'}
          onClick={() => setActiveTab('experience')}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="w-full max-w-2xl rounded-lg bg-gray-800 p-6 shadow-xl"
      >
        {activeTab === 'about' && (
          <p className="text-lg leading-relaxed">
            I'm a passionate frontend developer with a keen eye for creating beautiful and
            functional user interfaces. With a strong foundation in modern web technologies, I
            strive to build seamless and engaging digital experiences.
          </p>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-full bg-gray-700 px-4 py-2 text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
              <p className="text-gray-400">TechCorp Inc. | 2020 - Present</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-400">WebSolutions Ltd. | 2018 - 2020</p>
            </li>
          </ul>
        )}
      </motion.div>
    </motion.div>
  )
}

interface TabButtonProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 rounded-full px-4 py-2 transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
)

export default AboutSection
