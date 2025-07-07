import { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    img: "https://img.icons8.com/?size=256&id=20909&format=png",
    name: "HTML",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=21278&format=png",
    name: "CSS",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=108784&format=png",
    name: "JS",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=hsPbhkOH4FMe&format=png",
    name: "NODE",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=bzf0DqjXFHIW&format=png",
    name: "REACT",
    experience: "1 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=jD-fJzVguBmw&format=png",
    name: "REDUX",
    experience: "1 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=2ZOaTclOqD4q&format=png",
    name: "EXPRESS",
    experience: "1 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=74402&format=png",
    name: "MONGO",
    experience: "1 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=13441&format=png",
    name: "PYTHON",
    experience: "3 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=13679&format=png",
    name: "JAVA",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=uJM6fQYqDaZK&format=png",
    name: "TS",
    experience: "0.5 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=x7XMNGh2vdqA&format=png",
    name: "TAILWIND",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=101665&format=png",
    name: "LINUX",
    experience: "2 years"
  },
  {
    img: "https://img.icons8.com/?size=256&id=20906&format=png",
    name: "GIT",
    experience: "1 year"
  },
  {
    img: "https://img.icons8.com/?size=256&id=zfHRZ6i1Wg0U&format=png",
    name: "FIGMA",
    experience: "2 years"
  }
]

function Skill() {


  const Headref = useRef(null)
  const hiRef = useRef(null);
  const hiRef1 = useRef(null);
  const bodyRef = useRef(null);
  const Edu1 = useRef(null);
  const changeRef = useRef(0)


  const education = () => {
    hiRef1.current.style.display = 'none';
    Edu1.current.style.display = 'block';
    changeRef.current.style.display = 'none';
  }
  const reclicker = () => {
    hiRef1.current.style.display = 'block';
    Edu1.current.style.display = 'none';
    changeRef.current.style.display = 'flex';
  }

  const scrollToFirstPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToThirdPage = () => {
    window.scrollTo({
      top: 1580,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(Headref.current, { x: -100, opacity: 0 });
    tl.set(hiRef.current, { x: 100, opacity: 0 });
    tl.set(hiRef1.current, { x: -100, opacity: 0 });
    // tl.set(hiRef2.current, { x: 100, opacity: 0 });

    tl.to(Headref.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: Headref.current,
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 30%",
        end: "bottom 30% "
      }
    })
      .to([hiRef.current, hiRef1.current], {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: hiRef.current,
          scroller: "body",
          // markers: true,
          scrub: 3,
          start: "top 30%",
          end: "bottom 100%"
        }
      })

  }, [Headref]);


  return (
    <>
      <div ref={bodyRef} className="relative border-none w-screen h-screen bg-white">
        <div className="absolute sm:hidden w-full h-full">
          <img className="object-bottom w-full h-full" src="https://i.pinimg.com/736x/f1/75/2e/f1752e799ae1d04b3e2a56b8a5bec0ef.jpg" alt="" />
        </div>
        <div className="absolute w-full h-full hidden sm:flex justify-center">
          <img className="h-full object-fill w-full" src="https://coolbackgrounds.io/images/backgrounds/black/black-triangle-b9cb7263.jpg" alt="" />
        </div>
        <div>
          <div style={{ "height": "90vh" }} className="absolute w-full h-full hidden sm:flex justify-center">
            <img className="object-bottom translate-y-24" src="https://raw.githubusercontent.com/THUNDERBLD/Material/main/devil-mark.png" alt="" />
          </div>
        </div>
        <div className="absolute -top-32 sm:top-6 text-center w-full sm:hidden">
          <button
            onClick={scrollToFirstPage}
            className="px-2 py-3 font-semibold text-white bg-white rounded-lg hover:bg-black">
            <svg className='hover:text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className='relative sm:mb-24 mb-2 mt-10 -top-12 sm:top-4 left-0 right-0'>
          <div ref={Headref} className="about-text z-10 text-3xl flex justify-center text-center px-3 font-semibold mx-7 my-6 sm:my-1  ">
            <div className='sm:text-gray-300'>
              TECHNICAL SKILLS
            </div>
          </div>
          <div ref={hiRef} className="about-text z-10 flex justify-evenly text-lg px-3 font-semibold mx-4 ">
            <div className='text-lg font-normal px-1 text-center '>
              Web development is the art of combining creativity and technical skills to build seamless user experiences.
            </div>
          </div>
        </div>

        <div ref={hiRef1} className='logos sm:hidden mr-2 relative mt-2 overflow-hidden font-semibold flex justify-center items-center flex-wrap mix-blend-lighten sm:mix-blend-normal sm:overflow-auto bg-opacity-40 px-2'>
          <div className='w-full h-full flex flex-wrap justify-evenly'>
            {tools.map((e, i) => (
              <div key={i} className='flex-wrap z-10 h-full rounded-md m-auto my-2 text-center ease-out transition-all duration-200 hover:scale-125 '>
                <div className='backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg bg-blue-200 relative '> {/* Added relative positioning */}
                  <div className='hover:text-white w-full h-full mx-1'>
                    <div className='px-2 w-full flex flex-wrap'>
                      <img className='h-12 w-12 lg:w-20 lg:h-20' src={e.img} alt={e.name} />
                    </div>
                    <div className='font-semibold text-gray-300 hover:text-white text-lg'>
                      {e.name}
                    </div>
                    <div className='text-sm text-gray-700 sm:text-gray-900 hover:text-white'>
                      {e.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={Edu1} className='w-full sm:h-[68%] h-[100%] hidden bg-black sm:hidden absolute  mx-3 mr-10 rounded-lg  overflow-hidden font-semibold flex-wrap sm:overflow-auto bg-opacity-40 px-2'>
          <div className='flex'>
            <div onClick={reclicker} className='cross cursor-pointer  w-5 p-1 pt-2 hover:scale-105'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#ffffff" fill="none">
                <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className='text-2xl px-2 py-1 my-1 mx-6 text-white inline-block bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg bg-blue-300'>
              Experience
            </div>
          </div>
          <div className='font-normal px-4 py-1 -top-16 bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg bg-blue-300'>
            <div className='flex justify-between'>
              <span className='font-semibold text-blue-400'>
                The Banyan Tee
              </span>
              <span className='text-blue-400'>Jan 2024 – Mar 2024</span>
            </div>
            <div className='text-lg'>

            <div >
              Graphic Designing Intern
            </div>
            <div>
              • Enhanced Brand Identity: Created captivating brand assets, including logos and marketing materials, which elevated
              brand recognition and led to a 25% increase in social media engagement.
            </div>
            <div>
              • Enhanced Marketing Impact: Collaborated on innovative designs, increasing website traffic by 30% and conversion
              rates by 20%.
            </div>
            • Improved Conversion Rates: The strategic design initiatives and effective collaboration resulted in a 20% boost in
            conversion rates, demonstrating the impact of cohesive and creative marketing efforts.
            </div>
          </div>
        </div>

      <div className='flex sm:h-[100%] justify-evenly '>
        <div className='hidden sm:flex relative -top-14 text-2xl h-[63%] w-[50%] sm:w-[45%] sm:h-[78%] sm:mx-2 lg:w-[28%] font-semibold justify-center items-center flex-wrap sm:mix-blend-normal overflow-auto bg-opacity-10 px-1 py-2 backdrop-filter backdrop-blur-md rounded-lg bg-blue-300'>
          <div>
          TECHNOLOGIES
          </div>
          <div className='w-full flex flex-wrap justify-evenly'>
            {tools.map((e, i) => (
              <div key={i} className='flex-wrap z-10 h-full rounded-md m-2 my-2 text-center ease-out transition-all duration-200 hover:scale-125 '>
                <div className='backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg bg-blue-400 relative '> {/* Added relative positioning */}
                  <div className='hover:text-white w-full h-full mx-1'>
                    <div className='px-2 w-full flex flex-wrap'>
                      <img className='h-12 w-12 lg:h-20 lg:w-20' src={e.img} alt={e.name} />
                    </div>
                    <div className='font-semibold text-gray-300 hover:text-white text-lg'>
                      {e.name}
                    </div>
                    <div className='text-sm text-gray-700 sm:text-gray-900 hover:text-white'>
                      {e.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden sm:block sm:w-[60%] sm:h-[78%] sm:-top-14 w-full h-[68%] sm:relative absolute mx-3 sm:mx-2 mr-10 overflow-hidden font-semibold flex-wrap sm:overflow-auto bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg bg-blue-300 px-2'>
            <div className='text-2xl px-2 py-1 my-1 mx-6 text-white inline-block '>
              EXPERIENCE
            </div>
          
          <div className='hidden sm:block sm:relative font-normal p-4 text-lg lg:text-base backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg bg-blue-400 relative '>
            <div className='flex justify-between'>
              <span className='font-semibold'>
                The Banyan Tee
              </span>
              <span>Jan 2024 – Mar 2024</span>
            </div>
            <div>
              Graphic Designing Intern
            </div>
            <div>
              • Enhanced Brand Identity: Created captivating brand assets, including logos and marketing materials, which elevated
              brand recognition and led to a 25% increase in social media engagement.
            </div>
            <div>
              • Enhanced Marketing Impact: Collaborated on innovative designs, increasing website traffic by 30% and conversion
              rates by 20%.
            </div>
            • Improved Conversion Rates: The strategic design initiatives and effective collaboration resulted in a 20% boost in
            conversion rates, demonstrating the impact of cohesive and creative marketing efforts.
          </div>
        </div>
      </div>


        <div ref={changeRef} onClick={education} className='w-full flex items-center justify-center translate-y-20 hover:scale-110'>
          <div className='sm:hidden absolute z-10 flex justify-center items-center cursor-pointer w-10 h-10 border p-2 rounded-full'>
            <svg className=' text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="white">
              <path d="M4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18C19.6309 17.0302 18.2632 15.997 16.6177 15.5476C14.5636 14.9865 12.2696 15.2542 10.1528 15.2542C10.1528 15.972 10.4675 18.0982 9.51139 18.4351C8.64251 18.7413 8.18956 17.9409 6.77353 16.5199L4.80823 14.5477C3.60275 13.338 3 12.7332 3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>


        <div className="absolute bottom-10 sm:hidden left-0 right-0 text-center">
          <button
            onClick={scrollToThirdPage}
            className="px-2 py-3 font-semibold text-white bg-black rounded-lg hover:bg-white">
            <svg className='hover:text-black text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

      </div>
    </>
  )
}

export default Skill

