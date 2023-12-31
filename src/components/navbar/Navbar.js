"use client"
import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  },
]

const logout = () => {
  window.alert("logged out :)")
}

function Navbar () {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">blog-world</Link>

      <div className={styles.links}>
        {links.map((link) => {
          return <Link
            key={link.id} href={link.url} className="link"> {link.title}
          </Link>
        })}
        <button className={styles.logout} onClick={logout}>logout</button>
      </div>

    </div>
  )
}

export default Navbar