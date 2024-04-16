import Image from 'next/image'
import React from 'react'
import copy from '../assets/copyright-svgrepo-com (1) 1.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper" style={{height: '100px', backgroundColor: 'white', justifyContent: 'center'}}>
         <div className="footer-component flex flex-col" style={{alignItems: 'center',justifyContent: 'center', height: '100%'}}>
            <div className='flex gap-4' style={{borderBottom: '1px solid gray'}}>
                <a href="" style={{paddingLeft: '3rem', paddingRight: '1rem', paddingBottom: '.5rem'}}>About</a>
                <a href="" style={{paddingLeft: '1rem', paddingRight: '1rem'}}>Terms of service</a>
                <a href="" style={{paddingLeft: '1rem', paddingRight: '1rem'}}>privacy policy</a>
                <a href="" style={{paddingLeft: '1rem', paddingRight: '3rem'}}>contact us</a>
            </div>
            <div className='flex' style={{alignItems: 'center', gap: '12px'}}>
                <Image style={{paddingTop: '.5rem'}} src={copy} alt=''/>
                <p style={{marginTop: '.5rem'}}>
                    2024 Honey bunny bun
                </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
