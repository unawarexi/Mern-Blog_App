import React from 'react'
import { Images } from "../../constants/ImgIndex";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillHeart } from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from 'react-icons/bs'

function Footer() {
  return (
      <section className='bg-dark-colorsecond -translate-y-[1px]'>
          <footer className='container mx-auto grid grid-cols-10 px-10 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-20'>
          {/* ======================  First div ===================  */}
              <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                  <h3 className='text-dark-colorfourth  font-bold md:text-lg'>Product</h3>
                  <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
                      <li>
                          <a href="/">Landing Page</a>
                      </li>
                      <li>
                          <a href="/">Features</a>
                      </li>
                      <li>
                          <a href="/">Documentation</a>
                      </li>
                      <li>
                          <a href="/">Referral Pogram</a>
                      </li>
                      <li>
                          <a href="/">Pricing</a>
                      </li>
                  </ul>
              </div>
                {/* ======================  second div ===================  */}
              <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                  <h3 className='text-dark-colorfourth  font-bold md:text-lg'>Services</h3>
                  <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
                      <li>
                          <a href="/">Documentation</a>
                      </li>
                      <li>
                          <a href="/">Design</a>
                      </li>
                      <li>
                          <a href="/">Themes</a>
                      </li>
                      <li>
                          <a href="/">Illustration</a>
                      </li>
                      <li>
                          <a href="/">UI Kit</a>
                      </li>
                  </ul>
              </div>

                {/* ======================  Fourth div ===================  */}
              <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
                  <h3 className=' text-dark-colorfourth font-bold md:text-lg'>Company</h3>
                  <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
                      <li>
                          <a href="/">About</a>
                      </li>
                      <li>
                          <a href="/">Terms</a>
                      </li>
                      <li>
                          <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/">Career</a>
                      </li>
                  </ul>
              </div>

                {/* ======================  Fifth div ===================  */}
              <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                  <h3 className='text-dark-colorfourth  font-bold md:text-lg'>More</h3>
                  <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
        
                      <li>
                          <a href="/">Documentation</a>
                      </li>
                      <li>
                          <a href="/">Licence</a>
                      </li>
                      <li>
                          <a href="/">Changelog</a>
                      </li>
                  </ul>
              </div>

                {/* ======================  Footer LOGO ===================  */}
              <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
                  <img src={Images.logo } alt="logo" className='brightness-0 invert mx-auto md:mx-0 w-40 lg:w-fit' />
                  <p className='text-sm text-dark-colorfourth  text-center mt-4 md:text-left md:text-base lg:text-sm'>Build a modern and creative website with crealand</p>
                  <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
                      <li><a href="/"><AiOutlineTwitter  className='w-6 h-auto'/></a></li>
                      <li><a href="/"><AiFillYoutube  className='w-6 h-auto'/></a></li>
                      <li><a href="/"><AiFillInstagram  className='w-6 h-auto'/></a></li>
                      <li><a href="/"><BsFacebook  className='w-6 h-auto'/></a></li>
                      <li><a href="/"><BsTelegram  className='w-6 h-auto'/></a></li>
                  </ul>
              </div>
              <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
                  <div className=' bg-dark-colorthird text-red-400 p-3 rounded-full'><AiFillHeart className='w-7 h-auto' /></div>
                  <p className='font-bold italic text-dark-colorfourth '>Copyright © 2023. All Rights Reserved.</p>
              </div>
              
          </footer>
          

    </section>
  )
}

export default Footer
