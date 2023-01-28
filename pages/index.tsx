import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const steps = 
  [
    {
      title:"Create an account",
      desc:"You need to create an account. You can do this by clicking on the Sign up button above.",
      number:1,
      icon:"/user-plus.png"
    },{
      title:"Choose a theme",
      desc:"Vertical, short or long. We give you the control to make your video resume. We’ve more than 150+ themes.",
      number:2,
      icon:"/user-plus (1).png"
    },{
      title:"Edit on the web",
      desc:"Add your video clip(s), texts, decoration and effects. All these can be done on the web.",
      number:3,
      icon:"/film.png"
    },
    {
      title:"Ready to fly",
      desc:"Add your video clip(s), texts, decoration and effects. All these can be done on the web.",
      number:3,
      icon:"/film.png"
    }
  ]
  const ulAnimate ={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.45,
            when:"beforeChildren"
        }
    }
}

const liAnimate = {
  hidden:{
      opacity:0,
      x:"-100vw"
  },
  visible:{
      opacity:1,
      x:0,
      transition:{
          duration:0.5
      }
  }
}

const aboutAnimate = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.45,
      ease:'easeIn'
    }
  }
}

const liAnimateTwo = {
  hidden:{
      opacity:0,
      y:100
  },
  visible:{
      opacity:1,
      y:0,
      transition:{
          duration:0.8
      }
  }
}
  return (
    <>
      <Head>
        <title>Viresume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Group 8.png" />
      </Head>
    <Navbar/>


    <header className='md:mt-[80px] bg-[#F8FBFE]'>
      <div className='flex justify-around p-3  md:flex-row flex-col-reverse'>
        <div className='mt-[40px]'>
          <motion.h5 className='text-[#A4E2FE] font-bold mb-[10px]' animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5,delay:1}}>Stand out of the crowd</motion.h5>
          <div>
            <motion.h1 className='md:text-4xl text-3xl text-[#010D82] font-bold leading-[45px]' animate={{x:0}} initial={{x:"100vw"}} transition={{duration:0.5}}>Create the Next Gen <br/><span className='relative'>
              <span className="absolute bottom-0 left-0 mt-[10px]"><Image src="/path2987.png" width={180} height={50} alt="icon"/></span>
              Job Resume

              </span></motion.h1>

            <motion.p className='text-sm mt-[20px] w-[250px] text-[#A1A4B6]' animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5,delay:1}}>Get hired quickly by giving your resume the look it deserves</motion.p>
          </div>
          <div className='mt-[30px]'>
     <Link href="Authentication/signup"> <motion.button className='shadow-md shadow-blue-700 bg-[#010D82] text-white p-2 rounded-md w-[150px] hover:bg-[#51C9FF]' animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:0.5}}>Get Started</motion.button></Link>
          </div>
        </div>
        <div>
          <Image src="/Group 7.png" width={600} height={300} alt="icon"/>
        </div>
      </div>
    </header>


    <div className="Brands flex items-center justify-center">
      <div className='grid md:grid-cols-6 grid-cols-2 gap-[20px]'>
        <div>
          <Image src="/Black and White Collection 7.png" width={100} height={100} alt="icon"/>
        </div>
        <div>
        <Image src="/Black and White Collection 10.png" width={100} height={100} alt="icon"/>
        </div>
        <div>
        <Image src="/Black and White Collection 12.png" width={100} height={100} alt="icon"/>
        </div>
        <div>
        <Image src="/Black and White Collection 17.png" width={100} height={100} alt="icon"/>
        </div>
        <div>
        <Image src="/Black and White Collection 20.png" width={100} height={100} alt="icon"/>
        </div>
        <div>
        <Image src="/Black and White Collection 7.png" width={100} height={100} alt="icon"/>
        </div>
      </div>

    </div>


    <div className='Started mt-[50px] md:h-[600px]  '>
      <div className='flex justify-around p-3 align-items-center flex-col md:flex-row'>
      <div>
        <h3  className='text-[#A4E2FE] font-extrabold mb-[10px]'>Simple steps to glory</h3>
        <h1 className='text-2xl text-[#010D82] font-extrabold leading-[45px]'>How to get Started?</h1>
        <div className='relative'>
          <motion.div className='absolute top-[60px] -right-[150px]'  initial={{ opacity: 0,rotate:30 }}
  whileInView={{ opacity: 1, rotate:360 }} transition={{duration:0.5}}  style={{zIndex:99999}}  viewport={{amount:0.5}}>
          <Image src="/Group 10.png" width={300} height={400} alt="icon"/>
          </motion.div>
          <motion.div className='absolute -bottom-[80px] -right-[100px]'  initial={{ opacity: 0,rotate:30 }}
  whileInView={{ opacity: 1, rotate:360 }} transition={{duration:0.5}}  viewport={{amount:0.5}} style={{zIndex:99999}}>
          <Image src="/Group 13.png" width={250} height={400} alt="icon"/>
          </motion.div>
          <motion.div  initial={{ opacity: 0,x:200 }} transition={{duration:0.5}} 
  whileInView={{ opacity: 1, x:0 }} style={{zIndex:5}} viewport={{amount:0.5}}> <Image src="/Group 9.png" width={350} height={400} alt="icon"/></motion.div>
         
        </div>
      </div>

      <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center mt-[50px] md:mt-0' initial={{opacity:0}} whileInView={{opacity:1}} transition={{staggerChildren:0.45,when:"beforeChildren"}}>
     {
      steps.map((item,index)=>{
        return(
          <motion.div className='h-[200px] md:w-[200px]  shadow-lg shadow-[#E4E8F4] bg-white p-3 relative' key={index} initial={{x:-200}} whileInView={{x:0}} transition={{duration:0.3}} viewport={{amount:0.5}}>
          
            <div className="bg-[#DEF5FF] p-[2px] w-[30px] flex items-center justify-center"><Image src={item.icon} width={15} height={15} alt="icon"/></div>
            <h1 className='text-[#010D82] font-bold mt-[30px]'>{item.title}</h1>
            <p className='text-sm mt-[20px]'>{item.desc}</p>
          </motion.div>
        )
      })
     }

      </motion.div>

      </div>
     



    </div>


    <div>
    <motion.div className='flex justify-around p-3 align-items-center mt-[50px] md:h-[650px] flex-col md:flex-row '>

      <motion.div initial="hidden" whileInView="visible" variants={aboutAnimate}>
      <motion.h3  className='text-[#A4E2FE] font-extrabold mb-[10px]'  variants={liAnimate} viewport={{amount:0.5}}>We are on a mission</motion.h3>
        <motion.h1 className='text-2xl text-[#010D82] font-extrabold leading-[45px]'variants={liAnimate} viewport={{amount:0.5}} >About Visume</motion.h1>
        <motion.h4 viewport={{amount:0.5}} variants={liAnimate} className='text-1xl text-[#010D82] mt-[20px] '>Trusted by people around <span className='text-[#F8BDBF] font-extrabold'>38 countries</span></motion.h4>
        <motion.p variants={liAnimateTwo} viewport={{amount:0.5}}  className='w-[450px] mt-[20px] text-sm'>With the Gen Z going the video way, the future rectruitement is going to be through video resumes. It saves the HR people a ton of time in screening profiles. And it makes it more human to  present themseleves than plain texts for the employees.

. </motion.p>
<motion.p className='w-[450px]  text-sm mt-[40px]' variants={liAnimate} viewport={{amount:0.5}}>With 20+ years on the video production industry, you’re on the right hands</motion.p>
<div className='mt-[30px]'>
      <motion.button className='shadow-md shadow-blue-700 bg-[#010D82] text-white p-2 rounded-md w-[150px]' variants={liAnimateTwo} viewport={{amount:0.5}} >Get Started</motion.button>
          </div>
      </motion.div>

    <motion.div initial={{ opacity: 0,x:100 }}
  whileInView={{ opacity: 1,x:0 }} transition={{duration:0.7,ease:'easeInOut'}} className="p-3">
        
        <div className='relative'>
          
          <div className='absolute top-[120px] -left-[100px]'>
          <Image src="/Group 13 (1).png" width={250} height={400} alt="icon"/>
          </div>
          <Image src="/Group 18.png" width={300} height={400} alt="icon"/>
        </div>
      </motion.div>
      

    </motion.div>
    </div>

    <div className='bg-white'>
    <div className='flex justify-around p-3  mt-[0px] md:h-[650px] flex-col  w-[80%] mx-auto'>
    <div><h3  className='text-[#A4E2FE] font-extrabold mb-0'>Pricing</h3>
        <h1 className='text-2xl text-[#010D82] font-extrabold leading-[45px]'>How much to pay</h1>
        <h4 className='text-1xl  mt-[10px] '>You can choose the most app pricing option for your needs.</h4></div>

        <motion.div className='flex gap-[20px] items-center justify-center flex-col md:flex-row' variants={ulAnimate} initial="hidden" whileInView="visible">

          <motion.div className='h-[400px] w-[300px] border-[1px] border-[#010D82] bg-[#F8FBFE] items-center justify-center flex flex-col rounded-md shadow-lg ' variants={liAnimate}>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-bold text-[#010D82]'>Basic</h2>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[#66CFFF] text-2xl'>$8</h3>
                <p className='text-[#010D82] text-sm'>per project</p>
              </div>
              <hr/>
              <ul className='flex flex-col items-center justify-center gap-[10px] text-sm text-[#010D82] mt-[30px]'>
                <li>
                  20 themes
                </li>
                <li>
                  60 music files
                </li>
                <li>
                  80 audio effects
                </li>
                 <li>
                  8 language support
                </li>
                <li>
                 Email support
                </li>
              </ul>
              <div><button className='bg-white border-[1px] border-[#010D82] p-2 mt-[30px] w-[150px] rounded-md shadow-lg shadow-[#E4E8F4] text-sm'>Get Started</button></div>
            </div>

          </motion.div>






          <motion.div className='h-[400px] w-[300px] border-[1px] border-[#010D82] text-white items-center justify-center flex flex-col bg-[#010D82] rounded-md md:-mt-[50px] shadow-lg shadow-[#E4E8F4] ' variants={liAnimate}>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-bold text-white'>All Rounder</h2>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[#66CFFF] text-2xl'>$12</h3>
                <p className='text-white text-sm'>per project</p>
              </div>
              <hr/>
              <ul className='flex flex-col items-center justify-center gap-[10px] text-sm text-white mt-[30px]'>
                <li>
                  20 themes
                </li>
                <li>
                  60 music files
                </li>
                <li>
                  80 audio effects
                </li>
                 <li>
                  8 language support
                </li>
                <li>
                 Email support
                </li>
              </ul>
              <div><button className='bg-white border-[1px] border-[#010D82] p-2 mt-[30px] w-[150px] rounded-md text-[#010D82] text-sm'>Get Started</button></div>
            </div>

          </motion.div>

          <motion.div className='h-[400px] w-[300px] border-[1px] border-[#010D82] bg-[#F8FBFE] items-center justify-center flex flex-col shadow-lg shadow-[#E4E8F4] rounded-md' variants={liAnimate}>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-bold text-[#010D82]'>Basic</h2>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[#66CFFF] text-2xl'>$8</h3>
                <p className='text-[#010D82] text-sm'>per project</p>
              </div>
              <hr/>
              <ul className='flex flex-col items-center justify-center gap-[10px] text-sm text-[#010D82] mt-[30px]'>
                <li>
                  20 themes
                </li>
                <li>
                  60 music files
                </li>
                <li>
                  80 audio effects
                </li>
                 <li>
                  8 language support
                </li>
                <li>
                 Email support
                </li>
              </ul>
              <div><button className='bg-white border-[1px] border-[#010D82] p-2 mt-[30px] w-[150px] rounded-md shadow-lg shadow-[#E4E8F4] text-sm'>Get Started</button></div>
            </div>

          </motion.div>


    </motion.div>


    </div>

    
    </div>

    <Testimonial/>


    <Contact/>

    <Footer/>

     
    </>
  )
}
