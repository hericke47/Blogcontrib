import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        {[...Array(10).keys()].map(item => (
          <li key={`item-${item}`}>
            {`Item ${item}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
