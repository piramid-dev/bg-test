import { Children, useState, type FC, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import type { ISurveyEnriched } from '~/types/survey.interface'
import { scrollToTop } from '~/utils'

import SurveyStep from '../SurveyStep/SurveyStep'
import Button from '../Button/Button'
import Progress from '../Progress/Progress'

interface SurveyWrapperProps {
  surveys: ISurveyEnriched[]

  closeSurvey?: Function
  endSurvey?: Function
}

const SurveyWrapper: FC<SurveyWrapperProps> = ({
  surveys,
  closeSurvey,
  endSurvey,
}) => {
  const [currentStep, setCurrentStep] = useState(-1)
  const [enrichedSurvey] = useState(surveys)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState(
    surveys.map((s) => s.questions.map((q) => undefined)),
  )

  useEffect(() => {
    setCurrentStep(0)
  }, [])

  const handlePrevStep = () => {
    setDirection(-1)

    setTimeout(() => {
      setCurrentStep((s) => s - 1)

      scrollToTop()
    }, 100)

    if (currentStep === 0) {
      closeSurvey && closeSurvey()
    }
  }

  const handleNextStep = () => {
    setDirection(1)

    setTimeout(() => {
      setCurrentStep((s) => s + 1)

      scrollToTop()
    }, 100)

    if (currentStep === surveys.length - 1) {
      endSurvey && endSurvey(answers)
    }
  }

  const variants = {
    enter: () => {
      if (direction > 0) {
        return {
          x: '100%',
        }
      } else {
        return {
          x: '-100%',
        }
      }
    },
    center: {
      x: 0,
      overflow: 'hidden scroll',
    },
    exit: () => {
      if (direction < 0) {
        return {
          x: '100%',
        }
      } else {
        return {
          x: '-100%',
        }
      }
    },
  }

  const handleSetAnswers = (idx: number, q_idx: number, answer: any) => {
    answers[idx][q_idx] = answer

    setAnswers(answers)
  }

  return (
    <>
      {Children.toArray(
        enrichedSurvey.map((s, idx) => (
          <AnimatePresence>
            {idx === currentStep ? (
              <>
                <motion.div
                  className="fixed inset-0 w-screen h-screen bg-dove-500"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.6, 0, 0.46, 1] }}
                  style={{ zIndex: (idx + 1) * 100 + 2 }}
                >
                  <main className="relative container min-h-full w-full flex flex-col items-center z-[150]">
                    <header className="lg:py-4 max-lg:pr-4 text-center flex flex-row items-center gap-4 h-20 lg:shrink-0">
                      <Button
                        variant="outline"
                        icon="ArrowLeft"
                        onClick={handlePrevStep}
                      />
                      <div className="w-64 lg:w-80 mr-4">
                        <Progress
                          progress={
                            ((currentStep + 1) / enrichedSurvey.length) * 100
                          }
                        />
                      </div>
                      {currentStep + 1}/{enrichedSurvey.length}
                    </header>
                    <SurveyStep
                      survey={s}
                      answers={answers[idx]}
                      onNextStep={handleNextStep}
                      subtitle={s.subtitle}
                      isLastStep={idx === enrichedSurvey.length - 1}
                      setAnswers={(answer: any, q_idx: number) =>
                        handleSetAnswers(idx, q_idx, answer)
                      }
                    />
                  </main>
                </motion.div>
                <motion.div
                  className="w-screen fixed inset-0 bg-black pointer-events-none text-red-500 text-2xl"
                  style={{ zIndex: (idx + 1) * 100 + 1 }}
                  initial={{
                    opacity: direction > 0 ? 0 : 1,
                    backgroundColor: ' rgb(236 236 229)',
                    // x: direction > 0 ? 0 : '-100%',
                  }}
                  animate={{
                    backgroundColor: 'rgb(0,0,0)',
                    // x: direction > 0 ? '-100%' : 0,
                    opacity: direction > 0 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  exit={
                    {
                      // x: direction > 0 ? '-100%' : 0,
                    }
                  }
                >
                  {idx}
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>
        )),
      )}
    </>
  )
}

export default SurveyWrapper
