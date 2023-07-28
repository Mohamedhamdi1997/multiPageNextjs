import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Bootstrap</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</link>
    </Head>
    <div>
    <div className="blog111">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " style={{ backgroundColor: 'black', color: 'white' }} >
        <div className={styles.blackf}>
        <h1 className={styles.title}>
            Build<br/>websites
        </h1>
          <p className={styles.btn33}>See more</p>  
        </div>
        </div> 
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ backgroundColor: '#3A3A3A' }} >  
      <div className={styles.greef}></div>     
        </div>
        </div>     
    </div> 
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3" style={{ backgroundColor: 'white', color: 'black' , height: '28.125rem', paddingLeft:'2.5rem'}} >
          <h6 className={styles.title1}>Turniere</h6><br/>
          <h1 className={styles.title1}>Die<br/> nächsten <br/> Turniere</h1><br/>
          <p className={styles.btn5}>All Turniere</p>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
        </div>
      </div>
    </div>
     <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: 'black', color: 'white', paddingLeft: '5rem', height: '28.125rem', paddingTop:'4rem' }}>
          <h6>News</h6><br/>
          <h1>Actuelle<br/>News</h1><br/>
           <h7>Weit hinten, hinter den Wortbergen <br/>
           Länder Vokalien und Konsonantien<br/> 
           die Blindtexte. Abgeschieden wohnen.</h7><br/>
          <p className={styles.btn33}>All News</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: 'black', color: 'white' , paddingLeft: '5rem', height: '28.125rem', paddingTop:'4rem'}}>       
        <div className={styles.blog1}>
        </div><br/>  
        <div className={styles.blog1}>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: 'black', color: 'white', paddingLeft: '5rem', height: '28.125rem', paddingTop:'4rem' }} >
        <div className={styles.blog2}>
          <p>Hier steht eine</p>
        </div>
        </div>
        </div>   
    </div>  
  <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: 'white', color: 'black', paddingLeft: '5rem', height: '28.125rem', paddingTop:'2rem' }}>
          <h6 className={styles.title1}>News</h6><br/>
          <h1 className={styles.title1}>Actuelle<br/>News</h1><br/>
           <h7 className={styles.title1}>Weit hinten, hinter den Wortbergen, fern der <br/>
           Länder Vokalien und Konsonantien leben<br/> 
           die Blindtexte. Abgeschieden wohnen sie.</h7><br/>
          <p className={styles.btn5}>All News</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">  
        <div className={styles.title6} >
        <h5>Innovative</h5><br/>     
        <p>Weit hinten, hinter den Wortbergen, fern der<br/>
           Länder Vokalien und Konsonantien leben <br/>
           Abgeschieden wohnen sie in Buchstabhau <br/>
           , eines großen Sprachozeans. Ein kleines</p></div><br/>
           <div className={styles.title6}>
        <h5>Innovative</h5><br/>     
        <p>Weit hinten, hinter den Wortbergen, fern der<br/>
           Länder Vokalien und Konsonantien leben <br/>
           Abgeschieden wohnen sie in Buchstabhau <br/>
           , eines großen Sprachozeans. Ein kleines</p></div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" >
        <div className={styles.title6} >
        <h5>Innovative</h5><br/>     
        <p>Weit hinten, hinter den Wortbergen, fern der<br/>
           Länder Vokalien und Konsonantien leben <br/>
           Abgeschieden wohnen sie in Buchstabhau <br/>
           , eines großen Sprachozeans. Ein kleines</p></div><br/>
           <div className={styles.title6}>
        <h5>Innovative</h5><br/>     
        <p>Weit hinten, hinter den Wortbergen, fern der<br/>
           Länder Vokalien und Konsonantien leben <br/>
           Abgeschieden wohnen sie in Buchstabhau <br/>
           , eines großen Sprachozeans. Ein kleines</p>
           </div>
        </div>   
      <div className={styles.greenblock}>  
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" ><p className={styles.title7}>Du hast ein Problem oder eine Frage?</p></div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" ><p className={styles.title8}>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik.</p></div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" > <p className={styles.btn3} >Discord</p></div>
      </div>
      </div>
      </div>
      <div className={styles.BlancSale}>
      <div className="container-fluid" >
      <div className="row">
        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"> <div className={styles.gree} ></div></div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"> <div className={styles.gree} ></div></div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"> <div className={styles.gree}  ></div></div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"> <div className={styles.gree} ></div></div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"> <div className={styles.gree} ></div></div>
        </div>
        </div>  
      </div>
      </div>
    
    </div>
    
  </div>
  </>
  )
}
