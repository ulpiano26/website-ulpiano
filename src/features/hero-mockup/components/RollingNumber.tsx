'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { DIGIT_ROLL_TRANSITION, EASE_OUT_EXPO } from '../animation/heroMotionTokens'
import { useHeroMockupMotion } from '../context/heroMockupMotionContext'
import { formatGroupedInteger } from '../utils/formatGroupedInteger'

const DIGIT_STRIP = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const COLUMN_STAGGER_SECONDS = 0.03
const CHARACTER_FADE_TRANSITION = { duration: 0.32, ease: EASE_OUT_EXPO }

type RollingCharacter =
  | { kind: 'digit'; key: string; digit: number; positionFromRight: number }
  | { kind: 'symbol'; key: string; symbol: string }

function splitIntoRollingCharacters(value: number, prefix: string, suffix: string) {
  const formattedDigits = formatGroupedInteger(value).split('')
  const characters: RollingCharacter[] = []

  if (prefix) characters.push({ kind: 'symbol', key: `prefix-${prefix}`, symbol: prefix })

  formattedDigits.forEach((character, indexFromLeft) => {
    const positionFromRight = formattedDigits.length - 1 - indexFromLeft
    if (character >= '0' && character <= '9') {
      characters.push({
        kind: 'digit',
        key: `digit-${positionFromRight}`,
        digit: Number(character),
        positionFromRight,
      })
    } else {
      characters.push({ kind: 'symbol', key: `separator-${positionFromRight}`, symbol: character })
    }
  })

  if (suffix) characters.push({ kind: 'symbol', key: `suffix-${suffix}`, symbol: suffix })

  return characters
}

interface RollingNumberProps {
  value: number
  /** Final value announced to assistive technology instead of every intermediate frame. */
  accessibleText: string
  prefix?: string
  suffix?: string
  className?: string
}

export function RollingNumber({
  value,
  accessibleText,
  prefix = '',
  suffix = '',
  className,
}: RollingNumberProps) {
  const { isReducedMotion } = useHeroMockupMotion()

  if (isReducedMotion) {
    return (
      <span className={cn(styles.rollingNumber, className)}>
        <span aria-hidden="true">{`${prefix}${formatGroupedInteger(value)}${suffix}`}</span>
        <span className="sr-only">{accessibleText}</span>
      </span>
    )
  }

  const characters = splitIntoRollingCharacters(value, prefix, suffix)

  return (
    <span className={cn(styles.rollingNumber, className)}>
      <span className={styles.rollingNumberGlyphs} aria-hidden="true">
        <AnimatePresence initial={false} mode="popLayout">
          {characters.map((character) =>
            character.kind === 'digit' ? (
              <motion.span
                key={character.key}
                layout="position"
                className={styles.digitColumn}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: CHARACTER_FADE_TRANSITION, layout: DIGIT_ROLL_TRANSITION }}
              >
                <span className={styles.digitSizer}>0</span>
                <motion.span
                  className={styles.digitStrip}
                  initial={{ y: '0%' }}
                  animate={{ y: `${-character.digit * 10}%` }}
                  transition={{
                    ...DIGIT_ROLL_TRANSITION,
                    delay: character.positionFromRight * COLUMN_STAGGER_SECONDS,
                  }}
                >
                  {DIGIT_STRIP.map((digitGlyph) => (
                    <span key={digitGlyph} className={styles.digitGlyph}>
                      {digitGlyph}
                    </span>
                  ))}
                </motion.span>
              </motion.span>
            ) : (
              <motion.span
                key={character.key}
                layout="position"
                className={styles.symbolGlyph}
                initial={{ opacity: 0, y: '40%' }}
                animate={{ opacity: 1, y: '0%' }}
                exit={{ opacity: 0, y: '-40%' }}
                transition={{ ...CHARACTER_FADE_TRANSITION, layout: DIGIT_ROLL_TRANSITION }}
              >
                {character.symbol}
              </motion.span>
            )
          )}
        </AnimatePresence>
      </span>
      <span className="sr-only">{accessibleText}</span>
    </span>
  )
}
