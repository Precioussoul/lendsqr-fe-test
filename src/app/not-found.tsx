import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.statusCode}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link href="/" className={styles.button}>
        Return Home
      </Link>
      <div className={styles.illustration}>
        <svg
          width="300"
          height="200"
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="500" height="300" fill="#F1F5F9" />
          <path
            d="M100 150C100 120.294 124.037 96 153.333 96H346.667C375.963 96 400 120.294 400 150C400 179.706 375.963 204 346.667 204H153.333C124.037 204 100 179.706 100 150Z"
            fill="#E2E8F0"
          />
          <circle cx="346.5" cy="150.5" r="30.5" fill="#3B82F6" />
          <path
            d="M150 150C150 166.569 163.44 180 180 180C196.569 180 210 166.569 210 150C210 133.431 196.569 120 180 120C163.44 120 150 133.431 150 150Z"
            fill="#94A3B8"
          />
          <path
            d="M230 150C230 166.569 243.431 180 260 180C276.56 180 290 166.569 290 150C290 133.431 276.56 120 260 120C243.431 120 230 133.431 230 150Z"
            fill="#94A3B8"
          />
          <path
            d="M100 150L130 130V170L100 150Z"
            fill="#94A3B8"
          />
          <path
            d="M400 150L370 130V170L400 150Z"
            fill="#3B82F6"
          />
        </svg>
      </div>
    </div>
  )
}
