import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from './Todo.module.css'

export const Todo = ({todo}) => {
  return (
    <div className={styles.Todo}>
      <div>
      <h2>{todo.task}</h2>
      <p>{todo.description}</p>
      </div>
      <div>
        <FontAwesomeIcon className={styles.editIcon} icon={faPenToSquare} />
        <FontAwesomeIcon className={styles.deleteIcon} icon={faTrash} />
      </div>
    </div>
  )
}
