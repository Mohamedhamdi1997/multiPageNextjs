import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'
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
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 " style={{ backgroundColor: 'black', color: 'white' }} >
        <div className={styles.blackf}>
           <div className={styles.blancF}>
           <div className="container">
          <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div>
                <h2>Vous pouvez<br/>connecter</h2>
               
              </div>
          </div>
            <div className="col-lg-6 col-md-12 col-12">
            <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" class="bg-light mt-4 p-4.m-auto">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <input type="text" class="form-control" required placeholder="UserName" />

                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <input type="email" class="form-control" required placeholder="Password" />                            
                        </div>
                    </div>
                   
                    <div className="btn btn-success btn-lg ml-3 mt-3">Send Now</div>
                    
                </div>
              </form>
            </div>
        </div>
            </div>
            </div>
            </div>

           </div>
       
        </div>
        </div> 
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: '#3A3A3A' }} >  
      <div className={styles.greef}></div>     
        </div>
        </div>     
    </div> 
    </div>
    </>
  )
}

export default About
