import { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../assets/girl.png'


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

function Skill2() {
  
  const textRefs = useRef([]);
  const arrowRefs = useRef([]);

  useEffect(() => {
    const wheel = (e) => {
      const direction = e.deltaY > 0 ? -300 : 0;
      const rotation = e.deltaY > 0 ? 180 : 0;

      gsap.to(textRefs.current, {
        xPercent: direction,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });
      gsap.to(arrowRefs.current, {
        rotate: rotation,
        duration: 0.5,
      });
    };

    const screen = bodyRef.current;
    if (screen) {
      screen.addEventListener('wheel', wheel);
    }

    return () => {
      if (screen) {
        screen.removeEventListener('wheel', wheel);
      }
    };
  }, []);


  const Headref = useRef(null)
  const hiRef = useRef(null);
  //   const hiRef1 = useRef(null);
  const bodyRef = useRef(null);
  const Edu1 = useRef(null);
  const changeRef = useRef(0)


  const education = () => {
    // hiRef1.current.style.display = 'none';
    Edu1.current.style.display = 'block';
    changeRef.current.style.display = 'none';
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
    // tl.set(hiRef1.current, { x: -100, opacity: 0 });
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
        start: "top 30%"
      }
    })
      .to(hiRef.current, {
        x: 0,
        opacity: 1,
        duration: 4,
        stagger: 0.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: hiRef.current,
          scroller: "body",
          // markers: true,
          scrub: 3,
          start: "top 30%",
        }
      })

  }, [Headref]);


  return (
    <>
      <div ref={bodyRef} className="relative border-none w-screen h-screen bg-black">
        <div>
          <div style={{ "height": "90vh" }} className="absolute z-10 w-full h-full hidden sm:flex justify-center">
            <img className="object-bottom translate-y-20" src={img} alt="" />
          </div>
        </div>
        <div className='thunder absolute z-0'>
          <div className='h-screen flex overflow-x-hidden items-center'>
            <div className='absolute scroller w-full -translate-x-1/2 text-7xl font-semibold h-24 flex'>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} ref={(el) => (textRefs.current[i] = el)} className='text px-10 bg-black flex flex-shrink-0 items-center'>
                  EXPLORE BEYOND <span className='text-blue-500'> THE LIMITS </span>
                  <div ref={(el) => (arrowRefs.current[i] = el)} className="img px-4">
                    <svg width="75" height="50" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z" fill="white" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full absolute top-4 flex z-20 justify-end px-10">
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

        <div className=' -top-12 mb-6 sm:top-4 mt-6 left-0 right-0 '>
          <div ref={Headref} className="about-text z-10 text-3xl flex justify-center text-center px-3 font-semibold mx-7 my-6 sm:my-1  ">
            <div className='sm:text-gray-300 my-2 text-4xl'>
              TECHNICAL SKILLS
            </div>
          </div>
          <div ref={hiRef} className="about-text z-10 flex justify-evenly text-lg px-3 font-semibold mx-6 ">
            <div className='text-xl font-normal px-1 text-center'>
              Web development is the art of combining creativity and technical skills to build seamless user experiences.
            </div>
          </div>
        </div>

        <div className='flex sm:h-[100%] '>
          <div className='flex text-2xl w-[30%] h-[73%] mx-8 font-semibold z-20 justify-center items-center flex-wrap sm:mix-blend-normal overflow-auto bg-opacity-10 px-1 py-2 backdrop-filter backdrop-blur-md rounded-lg '>
            <div className='rounded-lg bg-blue-400 bg-opacity-10 px-2 py-1 my-2 backdrop-filter backdrop-blur-md '>
              TECHNOLOGIES
            </div>
            <div className='w-full flex flex-wrap justify-evenly'>
              {tools.map((e, i) => (
                <div key={i} className='flex-wrap z-10 h-full rounded-md m-2 my-2 text-center ease-out transition-all duration-200 hover:scale-125 '>
                  <div className='backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg bg-blue-400 relative '> {/* Added relative positioning */}
                    <div className='hover:text-white w-full h-full mx-1'>
                      <div className='px-2 w-full flex flex-wrap'>
                        <img className='h-14 w-14 hover:scale-125' src={e.img} alt={e.name} />
                      </div>
                      <div className='font-semibold active:text-blue-800 text-gray-400 hover:text-white text-lg'>
                        {e.name}
                      </div>
                      <div className='text-sm text-gray-600 hover:text-white'>
                        {e.experience}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex w-full justify-end z-20'>
            {/* <div className='w-[35%] h-[70%] mx-8 px-2 font-semibold flex justify-end flex-wrap overflow-auto bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg'>
              <div className='text-2xl w-full justify-center px-2 py-1 mt-2 text-white inline-block '>
                <div className='flex'>
                  <div className='rounded-lg bg-blue-400 bg-opacity-10 px-2 py-1 my-2 backdrop-filter backdrop-blur-md inline-block'>
                    EXPERIENCE
                  </div>
                </div>
              </div>
              <div className='font-normal px-4 py-2 text-lg hover:scale-1 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg bg-blue-400 relative '>
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
            </div> */}
          </div>
        </div>


        <div ref={changeRef} onClick={education} className='w-full flex items-center justify-center translate-y-20 hover:scale-110'>
          <div className='sm:hidden absolute z-10 flex justify-center items-center cursor-pointer w-10 h-10 border p-2 rounded-full'>
            <svg className=' text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="white">
              <path d="M4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18C19.6309 17.0302 18.2632 15.997 16.6177 15.5476C14.5636 14.9865 12.2696 15.2542 10.1528 15.2542C10.1528 15.972 10.4675 18.0982 9.51139 18.4351C8.64251 18.7413 8.18956 17.9409 6.77353 16.5199L4.80823 14.5477C3.60275 13.338 3 12.7332 3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>


        <div className="absolute bottom-4 sm:hidden left-0 right-0 text-center">
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

export default Skill2
