import React from 'react'
import logo from '../images/Bullean.png'
import leftfade from '../images/Ellipse 22.png'
import arrowimg from '../images/freepik--Arrow--inject-14.png'
import manimg from '../images/freepik--character-2--inject-14.png'
import rocket from '../images/freepik--Rocket--inject-7.png'
import img1 from '../images/Group 14.png'
import bucket from '../images/Vector.png'
import txt1 from '../images/Advising.png'
import txt2 from '../images/Consulting.png'
import txt3 from '../images/Investment Banking.png'
import txt4 from '../images/Investments.png'
import img2 from '../images/image 33.png'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import t1 from '../images/Mask group.png'
import t2 from '../images/Mask group-1.png'
import t3 from '../images/Mask group-2.png'
import t4 from '../images/Mask group-3.png'
import img3 from '../images/image 13.png'
import img4 from '../images/Vector 16.png'
import img5 from '../images/glow.png'
import HomeCard from './HomeCard'
import HomeCard2 from './HomeCard2'

const Home = () => {
  return (
    <div className='w-full'>
        <div className='rounded-lg mx-4 p-4 sm:px-4 bg-[#10194D] text-[10px] sm:text-[16px] flex justify-between items-center'>
            <img className='w-[90px] sm:w-fit pl-8' src={logo}/>
            <p>Curated for you</p>
            <p>Services</p>
            <p>Raise Capital / Sell Business</p>
            <p>Intersted in investing</p>
            <p className='pr-8'>Contact Us</p>
        </div>
       
        {/* Hero Section */}
        <div className='relative w-full h-[100vh]'>
            <div className=' absolute top-24 left-12 z-10'>
                <p className='text-[61px] font-[700] bespoke'>Build your Future <br/> With Investments</p>
                <p className='text-[16px] font-[400] my-4'>We are world wide investment company who are <br/>
                    committed to the principle of revenue maximitization & <br/>
                    reduction of the financial risks at investing.</p>
                <button className=' px-16 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800'>Find</button>
                <p className='my-4 text-[16px]'>Find the right buyers for your business</p>
            
            </div>
            <img className='absolute -top-24 left-0 z-0' src={leftfade}/>

            {/* <img className='absoulute top-10 ' src={arrowimg}/>
            <img className='' src={rocket}/>
            <img className='' src={manimg}/> */}
            
        </div>

        <div className='text-center flex flex-col items-center'>
            <p className='text-[34px] mb-3 font-semibold bespoke'>Why us?</p>
            <p className='w-[600px] text-[16px]'>
            We are 100% funded from our own platform with a team of over 300 professional FinTech investors who all believe the future of finance looks very different from today. Their experience and background covers most areas in finance, technology and startups.66,246 professional investors are waiting to invest.<br/>
We have built the largest global community of professional FinTech investors all investing online in the future of finance in over 50 currencies.
            </p>
            <img className='mt-12 w-[384px]' src={img1}/>
            <div className='my-12'>
                <p className='my-8 text-[40px] bespoke font-semibold'>Our Servises</p>
                <div className='w-[700px] text-[16px] mb-3'>
                Economic services provided by the finance industry, which encompasses a broadrange of businesses that manage money, including credit unions.

                </div>
            </div>

            
        </div>

        {/* business planning */}
        <section className='ml-8 flex rounded-l-lg bg-[#1B2037]'>
            <div className='w-full p-6'>
                <div className='p-3 rounded-full bg-gradient-to-l from-green-300 to-blue-600 w-fit' ><img src={bucket}/></div>
                <p className='my-3 text-[26px] bespoke font-semibold'>Business planning</p>
                <p className='w-[650px] my-4 text-[16px]'>
                We are 100% funded from our own platform with a team of over 300 professional FinTech investors who all believe the future of finance looks very different from today. Their experience and background covers most areas in finance, technology and startups.66,246 professional investors are waiting to invest.
We have built the largest global community of professional FinTech investors all investing online in the future of finance in over 50 currencies.


                </p>
            </div>
            <div className='px-2 border-l rounded-md'><img className='mt-8' src={txt1}/></div>
            <div className='px-2 border-l rounded-md'><img className='mt-8' src={txt2}/></div>
            <div className='px-2 border-l rounded-md'><img className='mt-8' src={txt3}/></div>
            <div className='px-2 border-l rounded-md'><img className='mt-8' src={txt4}/></div>
        </section>

        {/* business listing */}
        <section className=' w-[100vw] mt-32 text-[16px] bg-[#232945] flex flex-col justify-center items-center'>
            <p className='mt-12 my-4 text-[36px] bespoke font-bold'>Business Listing</p>
            <p className='mb-16'>We are the industry leader in establishing an innovation-friendly organization, developing new <br/> business models and new products.The company is on the cutting edge of new technologies.
            </p>
              {/* Carosoul1 */}
        <div></div>
        <div className='w-full'>
          <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                {/* Custom code */}
                 {/* corousel content */}
                 <div className='flex flex-col items-center'>
            <div className='w-full flex justify-evenly'>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
            </div>   

            <button className='font-semibold px-8 py-2 my-12 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl border'>See all Business</button>     
             </div> 
              </div>
              <div className="carousel-item relative float-left w-full">
                {/* Custom code */}
                 {/* corousel content */}
                 <div className='flex flex-col items-center'>
                  <div className='w-full flex justify-evenly'>
                          <HomeCard/>
                          <HomeCard/>
                          <HomeCard/>
                  </div>   

                  <button className='font-semibold px-8 py-1 my-12 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl border'>See all Business</button>     
                </div>  
              </div>
              <div className="carousel-item relative float-left w-full">
              {/* Custom code */}
               {/* corousel content */}
               <div className='flex flex-col items-center'>
            <div className='w-full flex justify-evenly'>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
            </div>   

            <button className='font-semibold px-8 py-1 my-12 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl border'>See all Business</button>     
            </div>
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </section>



        {/* if you are investor */}
        <section className='py-32 flex justify-evenly bg-[#080C23]'>
            <div className='w-[30vw]'>
                <p className='text-[40px] my-4 bespoke font-bold'>If you are an investor</p>
                <p className='text-[16px]'>Investors put money into something with the hope of getting more money back down the road. Investors can be individual people buying and selling stocks for their personal wealth-building plans. However, an investor can also be an organization, such as a Private equity firm or a mutual fund.<br/>
                The goals of investors are as varied as their investments. For some personal investors, the goal may be to grow a retirement fund, while larger institutional investors may try to build wealth for future business ventures.

                </p>

                <button className='font-semibold mt-6 px-8 py-2 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl my-4 border text-[16px]'>Get in Touch</button>
            </div>
            <div>
                <img src={img2} />
            </div>
        </section>

        {/* partners */}
        <section className='text-center bg-[#050715] py-12'>
            <p className='text-[40px] bespoke font-bold'>Our partners</p>
            <div className='flex justify-evenly'>
                <img src={p1}/>
                <img src={p2}/>
                <img src={p3}/>
                <img src={p4}/>
                <img src={p5}/>
            </div>
        </section>

        <section className=' pt-12 pb-32 text-center flex flex-col items-center'>
            <p className='text-[40px] mt-12 bespoke font-bold'>Transaction details</p>
            <p className='text-[14px] mt-6 mb-12 w-[480px]'>The information about a transaction that is able to be reviewed from multiple reports like Transaction Summary or Reconciliation reports.
            </p>

            {/* Carosoul2 */}
            <div className='w-full'>
      <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active invisible"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      className='invisible'
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      className='invisible'
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      {/* custome code */}
       {/* Carosoul2 element */}
       <div className='flex justify-evenly w-full'>
                <HomeCard2/>
                <HomeCard2/>
                <HomeCard2/>
            </div>
    </div>
    <div className="carousel-item float-left w-full">
      
     {/* custome code */}
      {/* Carosoul2 element */}
      <div className='flex justify-evenly w-full'>
                <HomeCard2/>
                <HomeCard2/>
                <HomeCard2/>
            </div>
    </div>
    
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
           
        </section>

        {/* Our Team */}
        <section className='text-center bg-[#1D1F2A] py-[100px]'>
            <p className='text-[40px] bespoke font-bold'>Our Team</p>
            <p className='my-[40px]'>We work to make your business start effectively working for <br/> you.Meet the financial and marketing specialists.
            </p>
            <div className='flex justify-evenly'>
                
                <div>
                    <img src={t1}/>
                    <p className='text-[20px] my-1'>Mathew N.Jonson</p>
                    <p className='text-[13px] text-green-400'>Business consultant</p>
                </div>

                <div>
                    <img src={t2}/>
                    <p className='text-[20px] my-1'>Mathew N.Jonson</p>
                    <p className='text-[13px] text-green-400'>Business consultant</p>
                </div>

                <div>
                    <img src={t3}/>
                    <p className='text-[20px] my-1'>Mathew N.Jonson</p>
                    <p className='text-[13px] text-green-400'>Business consultant</p>
                </div>

                <div>
                    <img src={t4}/>
                    <p className='text-[20px] my-1'>Mathew N.Jonson</p>
                    <p className='text-[13px] text-green-400'>Business consultant</p>
                </div>
            </div>
        </section>
          
        {/* testimonial */}
        <section className='relative w-full h-[168vh]'>
            
           <img className='pt-32 ml-16' src={img4}/>

          <div className='w-full absolute bottom-0'>
            <div className='text-center my-[120px]'>
              <p className='text-[40px] bespoke font-bold'>Testimonials</p>
              <p className='text-[16px] my-6'>Testimonials from customers who are satisfied with services that have been <br/>
              effectivelyused in marketing for as long as marketing exists.
              </p>
              <div className='flex justify-center items-center py-6'>
                {/* card */}
                <div className='w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center'>
                  <img className='rounded-full' src={img3}/>
                  <div className='bg-green-500 w-[100px] h-[1px]'/>
                  <p className='text-[16px]'>I would recommend this company to people who plan to start their own business. Thanks to the manager’s business planning and advising our start up become more profitable.
                  </p>
                  <p className='text-[12px] text-green-400'>John grinwild,new york,NY</p>
                </div>

                {/* card */}
                <div className='w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center'>
                  <img className='rounded-full' src={img3}/>
                  <div className='bg-green-500 w-[100px] h-[1px]'/>
                  <p className='text-[16px]'>I would recommend this company to people who plan to start their own business. Thanks to the manager’s business planning and advising our start up become more profitable.
                  </p>
                  <p className='text-[12px] text-green-400'>John grinwild,new york,NY</p>
                </div>

                {/* card */}
                <div className='w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center'>
                  <img className='rounded-full' src={img3}/>
                  <div className='bg-green-500 w-[100px] h-[1px]'/>
                  <p className='text-[16px]'>I would recommend this company to people who plan to start their own business. Thanks to the manager’s business planning and advising our start up become more profitable.
                  </p>
                  <p className='text-[12px] text-green-400'>John grinwild,new york,NY</p>
                </div>

                {/* card */}
                <div className='w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center'>
                  <img className='rounded-full' src={img3}/>
                  <div className='bg-green-500 w-[100px] h-[1px]'/>
                  <p className='text-[16px]'>I would recommend this company to people who plan to start their own business. Thanks to the manager’s business planning and advising our start up become more profitable.
                  </p>
                  <p className='text-[12px] text-green-400'>John grinwild,new york,NY</p>
                </div>

                

              </div>
            </div>
            <footer className='footerbg p-16 flex justify-center items-center'>
              <div className='mx-12'>
                <div>Home</div>
                <div className='my-2'>Why us</div>
                <div>Services</div>
              </div>
              <div className='mx-12'>
                <div>Constact us</div>
                <div className='my-2'>Transaction Details</div>
                <div>Testimonials</div>
              </div>
              <div className='mx-12'>
                <div>Business Listing</div>
                <div className='my-2'>Our Team</div>
                <div>Our partners</div>
              </div>
              <div className='mx-12'>
                <div>Contact Details</div>
                <div className='my-2'>+805268296</div>
              </div>
            </footer>
          </div>
          <img className='absolute w-[680px] h-[680px] -top-52 -left-56 ' src={img5}/>
        </section>

        
    </div>
  )
}

export default Home