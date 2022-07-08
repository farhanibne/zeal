import React from 'react'
import Link from "next/link";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Image from 'next/image'
import icon from "./l.png";
import photo from './no.png';


function Noentry() {
  return (
   <>
     <Head>
        <title>ZEAL Education</title>
        <link rel="icon" href={icon} />
      </Head>
      <ThemeProvider theme={theme}>

      <div style={{ height: "85px", background: "white" }}>
        <div style={{marginLeft:'15px',marginTop:'7px'}}>
        <Image src={icon} height={50} width={50} />
        
        </div>
        
          <hr />
        </div>
        <br />

        <div>

            <center>
                <Image src={photo} height={400} width={400} />

                <h1>Entry Restricted</h1>
                <h3>You have no entry rather you are the admin. </h3>

                <div style={{}}>
                    <a href='./' style={{textDecoration:'none',padding:'15px',borderRadius:'7px',color:'white',background:'#FFC059'}}>
                    Back to Home
                    </a>
             
                </div>
               
            </center>
        

        </div>

      </ThemeProvider>
   
   </>
  )
}

export default Noentry