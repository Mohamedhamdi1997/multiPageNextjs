import React from 'react'
import styles from '@/styles/Home.module.css';
const Footer = () => {
  return (
    <>
       <div className={styles.white3Block}>
        <div className="container-fluid">
          <div className="row">
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" ><div className={styles.BlancSale1}></div><br/><p className={styles.title9}>Weit hinten, hinter den Wortbergen,fern der Länder Konsonantien leben.</p></div>
         <div className={styles.menu}><div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" ><ul>
            <li><h6>Menu</h6></li>
            <li>Turniere</li>
            <li>Turniere</li>
            <li>Turniere</li>
            <li>Turniere</li>
            <li>Turniere</li>
            </ul>
            </div>
            </div>   
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
           <div className={styles.menu20}>
            <ul>
           <li><h6>Menu</h6></li>
            <li>Turniere</li>
            <li>Turniere</li>
            <li>Turniere</li>
            <li>Turniere</li>
            </ul>
            </div> 
            </div>    
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" >
          <div className={styles.contact}>  <ul><li><h6>Contact</h6></li>
          <li>Hast du allgemeine?</li>
          <li><h7>Discord server</h7></li>
          <li>Hast du allgemeine?</li>
          <li><h7>Contact</h7></li></ul> </div>
          </div>
      
          </div>
        </div>
          </div>
    
      <div className={styles.footer}><p>Impressum   |   Datenschutzerklärung   |   AGB</p></div>
    </>
  )
}

export default Footer
