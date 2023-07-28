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
      <div className={styles.BlancSale1}></div>   
        </div>
        </div>     
    </div> 
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ backgroundColor: 'white', color: 'black', paddingLeft: '5rem', height: '28.125rem', paddingTop:'2rem' }}>
          <h1 className={styles.title1}>Actuelle<br/>News</h1><br/>
           <h7>Weit hinten, hinter den Wortbergen, fern der <br/>
           Länder Vokalien und Konsonantien leben<br/> 
           die Blindtexte. Abgeschieden wohnen sie.</h7><br/>
        </div>  
       <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ backgroundColor: 'white', color: 'black', paddingLeft: '5rem', height: '28.125rem', paddingTop:'2rem' }}>
        </div>
         
        <div className={styles.greenblock}>  
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
    
    </div>
    
    </>
  )
}

export default About
