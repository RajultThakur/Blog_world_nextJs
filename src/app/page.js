import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/button/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Better design for you digital product</h1>
        <p className={styles.description}>Turning your idea into reality. We bring together the teams form the global tech industry</p>
        <Button text = "show our work" url="/portfolio"/>
      </div>
      <div className={styles.items}>
        <Image className={styles.image} src={hero}></Image>
      </div>
    </div>
  )
}
