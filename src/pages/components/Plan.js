import Link from 'next/link'
import React from 'react'

function Plan() {
  return (
    <div id='plan'>
        <br/>
        <br/>
        
        <div className='container'>
        <center>
        <h1 style={{marginTop:'30px',marginBottom:'20px'}}>Month Plan</h1>
        <Link  href={'/Routine'} passHref>
         <a style={{textDecoration:'none',color:'azure',cursor:'pointer'}}>
        <button style={{margin:'25px',padding:'18px',borderRadius:'6px',color:'azure',background:'#FFC059',border:'none',fontSize:'20px'}}> 
       
         View Month Plan
      
        
       </button>
       </a>   
       
       </Link>
        </center>
        

        </div>
    </div>
  )
}

export default Plan