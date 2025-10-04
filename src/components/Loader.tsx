import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loader() {
  const [letterIndex, setLetterIndex] = useState<number>(-1)
  const text = "DXQCODER"

  useEffect(() => {
    if (letterIndex < text.length - 1) {
      const timer = setTimeout(() => {
        setLetterIndex(letterIndex + 1)
      }, 200) // Adjust timing as needed

      return () => clearTimeout(timer)
    }
  }, [letterIndex, text.length])
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-blackblue">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-light text-white text-3xl md:text-6xl tracking-[0.5em]"
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index <= letterIndex ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="-bottom-3 left-0 absolute bg-[--purple] h-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
