import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagram,faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../assets/images/logo2.svg'
import ButtonStarted from "./ButtonStarted"
import { useState } from 'react';



const Footer = () => {
  const [linksCol1] = useState (["About Us","What We Do","FAQ"]);
  const [linksCol2] = useState (["Career","Blog","Contact Us"]);

  return ( 
    <>
    {/* Build Your Community Msg*/}
    <div className='relative mt-52 flex flex-col'>  
    <div className=" m-auto flex flex-col items-center justify-between gap-4 xl:gap-10 bg-white shadow0 w-11/12 md:w-3/5 p-5 lg:p-14 rounded-md absolute -inset-x-2/4 -translate-y-1/2 z-10 ">
      <h1 className={`font-heading text-lg  font-bold lg:text-2xl xl:text-4xl text-center  text-VeryDarkCyan`}>{`Ready To Build Your Community?`}</h1>  
      <ButtonStarted/>    
    </div>
    
    {/* Footer Start*/}
    <footer className="bg-VeryDarkCyan pt-40">
    
    {/* Footer container 1- logo  2- location & address  3- fist-Links-Col  4- Second-Links-Col 5- Social-icons 6-CopyRights-links*/}
    <div className="container m-auto gap-10 flex flex-col px-6 mb-20">
    
    {/* 1-logo*/}
    <img src={logo2} alt="logo" className=" w-56 sm:w-36 md:w-60" width={200} height={200}/>





    

    
        <div className="address-and-link-and-social-parent flex flex-col xl:flex-row gap-4 ">
        {/*location and adress*/}
        <div className="address-location flex flex-col w-full xl:w-5/12">
        <div className=" location-sec flex  items-start gap-4">
      <FontAwesomeIcon icon={faLocationDot} className='text-gray-200 text-xl mt-4'/>
      <p className="text-gray-200 font-body font-normal not-italic py-2 text-base w-full sm:w-2/3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                          vestibulum a, ultrices quis sem.`}</p>
    </div>
          
    <div className="phone flex items-center gap-4">
      <FontAwesomeIcon icon={faPhoneVolume} className='text-gray-200 text-xl' />   
      <p className="text-gray-200 font-body font-normal not-italic py-2 text-base">{`Phone: +1-543-123-4567`}</p>
    </div>

    <div className="Email flex items-center gap-4">
      <FontAwesomeIcon icon={faEnvelope} className='text-gray-200 text-xl ' />
      <p className="text-gray-200 font-body font-normal not-italic py-2 text-base">{`example@huddle.com`}</p>
    </div>
        </div>

        {/*links*/}
        <div className='links flex flex-col xl:flex-row w-full xl:w-3/12 justify-between xl:justify-start'>
          <ul className=' ps-9 w-1/2'>
          {linksCol1.map((link)=>(
            <li key={link} className="text-gray-200 font-body font-normal not-italic py-2 text-base">
            <a href={`/${link.toLowerCase()}`} target="_blank" className='btn hover:text-veryLightMainColor'>{link}</a>
            </li>
          ))}
          </ul>
          <ul className=' ps-9 w-1/2'>
          {linksCol2.map((link)=>(
            <li key={link} className="text-gray-200 font-body font-normal not-italic py-2 text-base">
            <a href={`/${link.toLowerCase()}`} target="_blank" className='btn hover:text-veryLightMainColor'>{link}</a>
            </li>
          ))}
          </ul>
          </div>

            {/* Social icons*/}
            <div className="social-media w-full xl:w-3/12   flex justify-center  items-center xl:items-start">
            <ul className='flex gap-6 text-4xl text-gray-50'>
            <li>
                <FontAwesomeIcon icon={faFacebookSquare}className='btn hover:text-veryLightMainColor'/>
            </li>
            <li>
                <FontAwesomeIcon icon={faInstagram} className='btn  hover:text-veryLightMainColor'/>
            </li>
            <li>
                <FontAwesomeIcon icon={faSquareTwitter} className='btn hover:text-veryLightMainColor'/>
            </li>
          </ul>
        </div>
        
        </div>
        <div className="copy-rights text-sm text-gray-100 text-center xl:text-right ">
        <span>&copy;</span><span>{` Copyright 2018 Huddle.All rights reserved.`}</span>
        </div>        
  </div>
  <div className="coded-by absolute bottom-5 left-1/2 -translate-x-1/2">
        <p className="text-xs text-gray-100 text-center ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-400">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/alexproman" className="text-blue-400">Mohamed Hamid</a>.
      </p>
        </div> 
  </footer>
    
  </div>
  </>
        );
}

export default Footer

  