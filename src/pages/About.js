import Head from 'next/head'
import React from 'react'
import styles from '@/styles/About.module.css'
const About = () => {
  return (
    <>
     <Head>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</link>
    </Head>
    <div className="blog111">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " style={{ backgroundColor: 'black', color: 'white' }} >
        <div className={styles.blackf}>
        <h1 className={styles.title}>
            About   
        </h1> 
        </div>
        </div> 
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ backgroundColor: '#3A3A3A' }} >  
      <div className={styles.greef}></div>     
        </div>
        </div>     
    </div> 
    </div>
    <br/>
    <div className="container">
          <div className="row">
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>Actuelle News</h2>
                <p>Weit hinten, hinter den Wortbergen, fern der<br/>
                Länder Vokalien und Konsonantien leben<br/>
                die Blindtexte. Abgeschieden wohnen sie.<br/>
                </p>
              </div>
          </div>
            
            </div>
            <div className="bg-secondary">  
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" ><p className={styles.title7}><ul>
            <li>sklqklq</li>
            <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> </ul></p></div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" ><p className={styles.title7}><ul>
            <li>sklqklq</li>
            <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> <li>sklqklq</li> </ul></p></div>
      </div>
      </div>
      </div>
            </div>
    
    </>
  )
}

export default About
