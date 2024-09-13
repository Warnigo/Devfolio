import { FC } from 'react'
import { motion } from 'framer-motion'
import { HighlightContainer, HighlightContainerProps } from './HighlightContainer'

interface HighlightedProps {
  title: string
  highlights: Record<string, Omit<HighlightContainerProps, 'children'>>
  visible: boolean
}

export const Highlighted: FC<HighlightedProps> = ({ title, highlights, visible }) => {
  const words = title.split(' ')

  return (
    <motion.h2
      className="relative flex flex-wrap justify-center text-center text-5xl font-black md:text-7xl lg:text-8xl lg:leading-[115px]"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <span key={index} className="relative inline-flex items-center">
          <HighlightContainer highlight={word in highlights} {...highlights[word]}>
            {word}
          </HighlightContainer>

          {highlights[word] && (
            <span className="absolute -top-4 right-0 -translate-y-1/2">
              {highlights[word].decoration}
            </span>
          )}
        </span>
      ))}
    </motion.h2>
  )
}

Highlighted.displayName = 'Highlighted'
