import React from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'

const form = (props) => {
  return (
    <div className={styles.Form}>
      <form className={styles.FormContent} onSubmit={props.handleSubmit}>
        <span className={styles.Close} onClick={props.closeForm}>X</span>
        <h1>Add New Employee</h1>
        {props.formElements.map(element => (
          <Input
            key={element.id}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => props.changed(event, element.id)}
            invalid={!element.config.valid}
            touched={element.config.touched}
          />
        ))}
        <button type='submit' disabled={props.disabled}>Send</button>
      </form>
    </div>
  )
}

export default form