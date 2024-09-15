import { FC } from 'react'
import { motion } from 'framer-motion'

export const BackgroundPattern: FC = () => (
  <div
    className="absolute inset-0 bg-center bg-repeat opacity-[0.03]"
    style={{
      backgroundImage: `url()`,
    }}
  />
)

export const FloatingShapes: FC = () => {
  const shapes = [
    { color: '#FF6B6B', size: 40, x: '10%', y: '20%', duration: 20 },
    { color: '#4ECDC4', size: 30, x: '70%', y: '60%', duration: 25 },
    { color: '#45B7D1', size: 50, x: '80%', y: '10%', duration: 30 },
    { color: '#F7B731', size: 35, x: '40%', y: '80%', duration: 22 },
    { color: '#5D5FEF', size: 45, x: '20%', y: '40%', duration: 28 },
  ]

  return (
    <>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: ['0%', '100%', '0%'],
            x: ['-20%', '20%', '-20%'],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}
