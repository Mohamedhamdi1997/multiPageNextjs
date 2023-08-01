import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Teams.module.css'
import Image from 'next/image'
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
            Teams   
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
                <h2>dsùdmsùdmùdmsù<br/>dmùsmdùsmdùsmù</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                </p>
                <a href="#" className="btn btn-warning">Learn More</a><br />
              </div>
          </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div>
                <Image src='/home1.jpeg' width={320} height={250}/>
              </div><br />
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div>
                <Image src='/home1.jpeg' width={320} height={250}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>dsùdmsùdmùdmsù<br/>dmùsmdùsmdùsmù</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                </p>
                <a href="#" className="btn btn-warning">Learn More</a><br />
              </div>
          </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>dsùdmsùdmùdmsù<br/>dmùsmdùsmdùsmù</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                </p>
                <a href="#" className="btn btn-warning">Learn More</a><br />
              </div>
          </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div>
                <Image src='/home1.jpeg' width={320} height={250}/>
              </div><br />
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div>
                <Image src='/home1.jpeg' width={320} height={250}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>dsùdmsùdmùdmsù<br/>dmùsmdùsmdùsmù</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus nemo?
                </p>
                <a href="#" className="btn btn-warning">Learn More</a><br />
              </div>
          </div>
            
        </div>
        </div>
    
    </>
  )
}

export default About
