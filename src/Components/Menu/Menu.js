import React from 'react'
import styles from './Menu.module.css'

const menu = (props) => {
  return (
    <div className={styles.Menu}>
      <div>
        <form>
          <input className={styles.Input} onChange={props.inputted} type='text' placeholder='Last Name or department' name='search' />
          <button className={styles.Button} onClick={props.searched}>Search</button>
        </form>
      </div>
      <div>
        <button className={styles.Button} onClick={props.openForm}>Add New Employee</button>
        <button className={styles.Button} onClick={props.sortList}>Sort</button>
      </div>
    </div>
  )
}

export default menu