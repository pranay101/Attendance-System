import React from 'react'
import classes from  "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={classes.footer}>
        <h5>Project By:</h5>
        <div className={classes.names}>
          <p>Pranay Prajapati</p>
          <p>Srishti Nimje</p>
          <p>Rishabh Dev Pandey</p>
        </div>
      </footer>
  )
}

export default Footer