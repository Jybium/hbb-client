import Image from 'next/image'
import React from 'react'
import hug from '../assets/Group 2.svg'
import Footer from './Footer'

const SplashPage = () => {
    return (
        <div>
            <div className="splash-wrapper flex" style={{ height: '100vh', backgroundColor: '#6AB5D2', justifyContent: 'space-evenly' }}>
                <div className="splash-widget flex" style={{alignItems: 'center'}}>
                    <Image style={{width: '70%'}} src={hug} alt='' />
                </div>
                <div className="splash-component flex flex-col" style={{width: '50%', justifyContent: 'center'}}>
                    <section style={{color: 'white', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <h1 style={{fontSize: '40px'}}>
                            Connect with a live model
                        </h1>
                        <p style={{color: 'white'}}>
                            Instantly engage with captivating and daring live models as you delve into our interactive honey bunny bun features today!
                        </p>
                    </section>
                    <section className="splash-btn flex gap-3" style={{marginTop: '3rem'}}>
                        <button className="sign-up" style={{padding: '.7rem', borderRadius: '1.5rem', color: '#6C6D71', backgroundColor: 'white', width: '120px'}}>
                            Sign Up
                        </button>
                        <button className="login" style={{padding: '.7rem', borderRadius: '1.5rem',color: 'white', border: '1px solid white', width: '120px'}}>
                            Login
                        </button>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SplashPage
