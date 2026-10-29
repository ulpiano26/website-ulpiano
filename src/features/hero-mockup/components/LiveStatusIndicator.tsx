import styles from '../styles/heroMockup.module.css'

export function LiveStatusIndicator() {
  return (
    <span className={styles.liveIndicator} aria-hidden="true">
      <span className={styles.liveIndicatorPulse} />
      <span className={styles.liveIndicatorDot} />
    </span>
  )
}
