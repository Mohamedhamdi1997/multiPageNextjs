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
            Contact   
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
            <div className="col-md-12">
                <div className="section-header text-center pb-5">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, architecto animi.</p>
                </div>
            </div>
        </div>
        <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" class="bg-light p-4.m-auto">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <input type="text" class="form-control" required placeholder="Your Full name" />

                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <input type="email" class="form-control" required placeholder="Your Email Here" />                            
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                           <textarea rows="3" required class="form-control" placeholder="Your Query Here"></textarea>     
                        </div>
                    </div>
                    <div className="btn btn-warning btn-lg btn-block mt-3">Send Now</div>
                    
                </div>
              </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default About
