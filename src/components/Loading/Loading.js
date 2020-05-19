import React from 'react'
import styles from './Loading.module.css'

const Loading = ({ scale = 1 }) => {
  const style = {
    transform: `scale(${scale})`
  }

  return (
    <div className={styles.loading} style={style}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loading
