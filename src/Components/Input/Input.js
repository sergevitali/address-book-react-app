import React from 'react'
import styles from './Input.module.css'

const input = (props) => {
  const classes = [styles.Input]
  if (props.invalid && props.touched) {
    classes.push(styles.Invalid)
  }
  return (
    <div>
      <label>{props.label}</label>
      <input className={classes.join('')} {...props.elementConfig} value={props.value} onChange={props.changed} />
    </div>
  )
}

export default input