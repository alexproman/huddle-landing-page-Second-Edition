import ButtonStarted from "./ButtonStarted";
import screenMockups from '../assets/images/screen-mockups.svg'
import logo from '../assets/images/logo.svg'
import HerobgMob from '../assets/images/bg-hero-mobile.svg'
import HerobgDesk from '../assets/images/bg-hero-desktop.svg'


const Hero = () => {
  return (
  <section className="  m-auto flex flex-col relative bg-VeryPaleCyan mb-20 p-5">
  <picture >
  <source media="(max-width:650px )" srcSet={HerobgMob} />
  <img src={HerobgDesk} alt="hero-bg" className="w-full absolute top-0 left-0 z-0 " width={1440} height={800}/>
  </picture>
 
  <header className=" w-11/12 xl:w-10/12 m-auto flex items-center justify-between px-6 py-12  relative z-10">
      <div className="logo">
          <img src={logo} alt="logo" className="w-28 md:w-64 lg:w-48" width={200} height={200}/>
      </div>
      <button type="button" 
      className={
        `btn text-VeryDarkCyan 
        text-lg sm:text-sm font-bold
        w-32 sm:w-38 
        h-7 sm:h-10
          rounded-full
          shadow0
          shadow-mainColor
        hover:text-lightMainColor`
        }>Try It Free</button>
  </header>
      <div className=" w-11/12 xl:w-10/12 m-auto flex flex-col xl:flex-row items-center justify-between gap-16  relative z-10">
            <div className="flex flex-col items-center xl:items-start p-6 justify-start gap-6 my-4">
            <h1 className={
              `text-2xl md:text-3xl lg:text-5xl text-center xl:text-left pt-4   md:pt-2 text-mainColor`
          }>{`Build The Community Your Fans Will Love`}</h1>
          <p className={
            
            ` text-gray-500
            w-full   lg:w-4/5
             xl:text-left text-center
                text-lg font-body`
            }>{`Huddle re-imagines the way we build communities. You have a voice, but so does 
            your audience. Create connections with your users as you engage in genuine discussion.`}
          </p>
         <ButtonStarted/>
            </div>
          <img src={screenMockups} alt="screen-mockups" className={`w-full p-6 xl:w-5/12`} width={1440} height={800}/>
      </div>
  </section>
            );
}

export default Hero


 

