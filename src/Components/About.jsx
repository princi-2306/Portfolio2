import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import Skill from './Skill';

function About() {
  const aboutMeRef = useRef(null);
  const hiRef = useRef(null);
  const availableRef = useRef(null);
  const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const LearnRef = useRef(null);
  const imgRef2 = useRef(null);

  const scrollToSecondPage = () => {
    window.scrollTo({
      top: 780,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(aboutMeRef.current, {
      opacity: 1,
      duration: 2,
      ease: 'power3.inOut',
    })
      .to(hiRef.current, {
        opacity: 1,
        delay:1,
        duration: 2,
        ease: 'power3.inOut',
      })
      .to(availableRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
      })
      .to(LearnRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
      })
      .to([quoteRef1.current, quoteRef2.current], {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
      })
      .to(imgRef2.current, {
        opacity: 1,
        y:-380,
        duration: 2,
        ease: 'power3.inOut',
      })

  }, []);

  return (
    <>
      <div className="relative sm:bg-neutral-950 border-none w-screen h-screen ">
        <div className='z-10'>
          <div className="absolute w-full h-full sm:hidden">
            <img className="object-bottom w-full h-full rounded-lg" src="https://wallpapers.com/images/hd/programming-iphone-three-dots-codes-u240bmd7iih31kus.jpg" alt="" />
          </div>
          
          {/* Mid screen bg */}
          <div className='absolute w-full h-full hidden sm:block'>
            <img className="object-bottom w-full h-full" src="https://coolbackgrounds.io/images/backgrounds/black/black-trianglify-b6181ec2.jpg" alt="" />
          </div>

          <div className='absolute w-full h-full hidden sm:flex translate-y-96 justify-center'>
            <img ref={imgRef2} className="object-bottom opacity-0" src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/model.png" alt="" />
          </div>
          
          <div className="mix-blend-difference sm:mix-blend-normal">
            <div>
              <div ref={aboutMeRef} className="about-text mix-blend-difference opacity-0 text-3xl sm:mt-16 mt-24 flex justify-center backdrop-filter text-center px-3 py-1 font-semibold my-4">
                ABOUT <span className='text-blue-500'>ME</span> 
              </div>
            </div>
            <div ref={hiRef} className="about-text opacity-0 z-10 text-2xl p-3 font-semibold mx-6 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg bg-blue-200">
              <span className='text-4xl'>HELLO</span>
              <div>
                I'M PRIYANSHI <span className='text-blue-500 animate-pulse'>MAURYA</span>
              </div>
              <div className="text-lg md:hidden">
                Web Development and Design Expert | Skilled in ReactJS, Java, Python and Figma | Delivering quality web solutions <span className='hidden sm:inline-block'> With a broad skill set and experience, I'm confident in my ability to tackle a variety of web development projects effectively.</span>
              </div>
              <div className='hidden md:block text-lg'>
              Hello! I'm a web developer with a strong focus on frontend development. My expertise spans a range of technologies, including frontend frameworks like ReactJS and Redux, as well as backend tools such as MongoDB and Express.js. As a freelancer, I create websites accoding to clint requirement specialize in enhancing website's Search Engine Optimization (SEO) strategies.  <span className='text-gray-900'>  With a broad skill set and experience, I'm confident in my ability to tackle a variety of web development projects effectively.</span>
              </div>
            </div>
            <div ref={availableRef} className="about-text opacity-0 z-10 text-2xl p-3 sm:w-80 font-semibold mx-6 my-3 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg bg-blue-200">
              AVAILABLE TO <span className='text-blue-500'>WORK AS</span>
              <div className="text-lg">
              &#x2022; Freelancing
              </div>
              <div className="text-lg">
              &#x2022; Part Time Work
              </div>
            </div>
            {/* LEARN MORE BUTTON */}
            <div className='flex justify-end'>
              <button ref={LearnRef} className='z-10 opacity-0 text-lg px-3 font-semibold mx-3'>
                <a target='_blank' href="https://pbs.twimg.com/media/GTZ2y3EXIAA8F4q?format=jpg&name=900x900" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">LEARN MORE</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              </button>
            </div>

            <div ref={quoteRef1} className="about-text sm:hidden opacity-0 z-10 text-lg p-3 mx-6 text-center ">
              <div className='p-3 rounded-xl z-30'>
                Great web developers are like artists creating intuitive and engaging experiences from lines of code.
              </div>
            </div>
            <div ref={quoteRef2} className="about-text font-semibold font-CoolFont1 text-slate-900 hidden sm:block opacity-0 z-10 text-lg p-3 my-3 mx-16 text-center ">
              <div className='p-3 z-30 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-2xl bg-blue-200'>
                Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? 
              </div>
            </div>
          </div>

          <div>
            <div className="absolute sm:hidden bottom-32 left-0 right-0 text-center">
              <button
                onClick={scrollToSecondPage}
                className="px-2 py-3 font-semibold text-white bg-white rounded-lg hover:bg-black"
              >
                <svg className='hover:text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
