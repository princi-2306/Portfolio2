import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import img from "../assets/s1.png"
import img2 from "../assets/s2.png"


let autoSlide = true;
let slideDuration = 2000;
const Webslider = [
  {
    image: img2,
    title: "BlogStar",
    description: "BlogStar is where you can read latest blogs, create your own blogs, store or edit them. Also allows built in grammar and spelling check",
    link: "https://github.com/princi-2306/Blog-App"
  },
  {
    image: img,
    title: "Book Review",
    description: "A website which keeps tracks of book read, genre , and latest in book world. Explore all your taste here.",
    link: "https://github.com/princi-2306/Book-Reviews"
  },
 
  {
     image: "https://mailsafi.com/blog/wp-content/uploads/2023/06/11667625_20945481-scaled.jpg",
     title: "Chat App",
     description: "Live chatting app, where you can create group chats, live in time chats using socket.io.",
     link: "https://github.com/princi-2306/ChatApp"
   },
  
  
  // {
  //   image: "https://media2.themorningcontext.com/media/posts_images/thibault-penin-AWOl7qqsffM-unsplash-1.jpg",
  //   title: "Netflix UI Clone",
  //   description: "Experience a sleek and intuitive Netflix-inspired UI clone, designed for seamless browsing and effortless streaming. Dive into a world of personalized recommendations and vibrant visuals, all in one place!",
  //   link: "https://github.com/THUNDERBLD/Netflix-Clone"
  // }
];
const Otherslider = [
  {
    image: img,
    title: "Book Review",
    description: "A website which keeps tracks of book read, genre , and latest in book world. Explore all your taste here.",
    link: "https://github.com/princi-2306/Book-Reviews"
  },
  {
    image: "https://mailsafi.com/blog/wp-content/uploads/2023/06/11667625_20945481-scaled.jpg",
    title: "Chat App",
    description: "Live chatting app, where you can create group chats, live in time chats using socket.io.",
    link: "https://github.com/princi-2306/ChatApp"
  },
 
  {
    image: img2,
    title: "BlogStar",
    description: "BlogStar is where you can read latest blogs, create your own blogs, store or edit them. Also allows built in grammar and spelling check",
    link: "https://github.com/princi-2306/Blog-App"
  },
 
 
];

function Project2() {
  
  const textRefs = useRef([]);
  const arrowRefs = useRef([]);
  const bodyRefs = useRef(0);

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

    const screen = bodyRefs.current;
    if (screen) {
      screen.addEventListener('wheel', wheel);
    }

    return () => {
      if (screen) {
        screen.removeEventListener('wheel', wheel);
      }
    };
  }, []);


  const wordRef1 = useRef(0)
  const wordRef2 = useRef(0)

  useEffect(() => {
    if (wordRef1.current) {
      const word = wordRef1.current.textContent.split('');
      let clutter = '';
      word.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      wordRef1.current.innerHTML = clutter;
    }
    if (wordRef2.current) {
      const word = wordRef2.current.textContent.split('');
      let clutter = '';
      word.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      wordRef2.current.innerHTML = clutter;
    }

    const spans1 = wordRef1.current.querySelectorAll('span');
    const spans2 = wordRef2.current.querySelectorAll('span');

    const tl = gsap.timeline();
    tl.from([spans1, spans2], {
      y: 100,
      opacity: 0,
      duration: 3,
      delay: 1,
      ease: 'elastic.out',
      stagger: 0.3,
      repeat:-1
    })
    .to([spans1, spans2],{
      y: 100,
      opacity: 0,
      duration: 3,
      delay: 1,
      ease: 'elastic.in',
      stagger: 0.3,
      repeat:-1
    })

  }, []);


  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = () => setCurrent((e) => (e === 0 ? Webslider.length - 1 : e - 1));
  const next = () => setCurrent((e) => (e === Webslider.length - 1 ? 0 : e + 1));
  const prev1 = () => setCurrent((e) => (e === 0 ? Otherslider.length - 1 : e - 1));
  const next1 = () => setCurrent((e) => (e === Otherslider.length - 1 ? 0 : e + 1));

  useEffect(() => {
    if (!autoSlide || isHovered) {
      return;
    } else {
      const s = setInterval(next, slideDuration);
      return () => clearInterval(s);
    }
  }, [isHovered]);

  const scrollToSecondPage = () => {
    window.scrollTo({
      top: 730,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <div ref={bodyRefs} className="relative border-none w-screen h-screen bg-black">
        <div style={{ "height": "100vh" }} className="absolute z-20 w-full h-full hidden sm:flex justify-center">
          {/* <img style={{ "width": "500px", "height": "100vh" }} className="object-bottom translate-y-100 scale-125 translate-y-44"  alt="" /> */}
        </div>
        <div className='absolute top-2 mix-blend-difference left-0 right-0'>
          <div ref={wordRef1} className='about-text text-gray-300 z-10 text-7xl flex justify-center text-center px-3 pt-2 font-semibold mx-7 my-4'>
            CRAFTING
          </div>
        </div>
        <div className='flex w-full justify-end'>
          <div className="absolute z-20 mx-10 my-6">
            <button
              onClick={scrollToSecondPage}
              className="px-2 py-3 font-semibold text-white bg-white rounded-lg hover:bg-black">
              <svg className='hover:text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className='relative z-20 left-0 right-0 top-20 flex justify-center'>
          <div ref={wordRef2} className='about-text text-gray-100 z-10 w-[90%] text-4xl font-semibold text-center flex m-4 py-1 lg:inline-block justify-center px-2'>
          THE TOMORROW'S WEB EXPERIENCE INTO<span className='text-blue-500'> REALITY </span>
          </div>

        </div>

        <dir className="text-xl absolute font-semibold left-52 translate-y-24">
          WEB DEVELPOMENT
        </dir>
        <div className='absolute z-20'>
          <div className="m-auto mt-4 w-[40vw] h-[58vh] rounded-md flex justify-center items-center relative overflow-hidden top-36"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div style={{ transform: `translateX(-${current * 100}%)` }} className={`flex justify-start transition-transform ease-out duration-500 w-full h-full`}>
              {Webslider.map((e, i) => (
                <div className="relative hover:scale-105 ease-out duration-700 px-10 transition-all min-w-full h-full" key={i}>
                  <a target='_blank' href={e.link}>
                    <img src={e.image} alt={e.title} className='center rounded-lg w-full h-full' />
                  </a>
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-black bg-opacity-50 text-white">
                    <h3 className="text-lg font-semibold mx-8">{e.title}</h3>
                    <p className="text-sm mx-8 mb-4">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute mix-blend-difference px-2 w-full flex justify-between items-center">
              <button onClick={prev} className="rotate-180 border-2 p-2 mt-2 rounded-full shadow-lg hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={next} className="border-gray-200 border-2 p-2 rounded-full shadow-lg hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-1 mt-2">
              <div className="gap-2 flex justify-center items-center ">
                {Webslider.map((_, i) => (
                  <div key={i} className={`border bg-white w-2 h-2 rounded-full ${current === i ? "p-1" : "bg-opacity-50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <dir className="text-xl absolute font-semibold right-60 translate-y-24">
          OTHER PROJECTS
        </dir>
        <div className='thunder absolute z-0'>
          <div className='h-screen flex overflow-x-hidden items-center'>
            <div className='absolute scroller w-full -translate-x-1/2 text-7xl font-semibold h-24 flex'>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} ref={(el) => (textRefs.current[i] = el)} className='text px-10 bg-black flex flex-shrink-0 items-center'>
                  priya <span className='text-blue-500'> nshi</span> 
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
        <div className='absolute right-4 z-20'>
          <div className="m-auto mt-4 w-[40vw] h-[58vh] rounded-md flex justify-center items-center relative overflow-hidden top-36"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div style={{ transform: `translateX(-${current * 100}%)` }} className={`flex justify-start transition-transform ease-out duration-500 w-full h-full`}>
              {Otherslider.map((e, i) => (
                <div className="relative hover:scale-105 ease-out duration-700 px-10 transition-all min-w-full h-full" key={i}>
                  <a target='_blank' href={e.link}>
                    <img src={e.image} alt={e.title} className=' center rounded-lg w-full h-full' />
                  </a>
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-black bg-opacity-50 text-white">
                    <h3 className="text-lg font-semibold mx-8">{e.title}</h3>
                    <p className="text-sm mx-8 mb-4">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute mix-blend-difference px-2 w-full flex justify-between items-center">
              <button onClick={prev1} className="rotate-180 border-2 p-2 rounded-full shadow-lg hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={next1} className="border-gray-200 border-2 p-2 rounded-full shadow-lg hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-1 mt-2">
              <div className="gap-2 flex justify-center items-center ">
                {Otherslider.map((_, i) => (
                  <div key={i} className={`border bg-white w-2 h-2 rounded-full ${current === i ? "p-1" : "bg-opacity-50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-full'>
          <div className="absolute z-20 hover:scale-110 duration-200 bottom-80 -translate-x-4">
            <a href="https://github.com/princi-2306" target='_blank'>
              <div className='z-10 rounded-full bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" color="#000000" fill="none">
                  <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Project2
