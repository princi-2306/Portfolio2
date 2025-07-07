import { useEffect, useState, useRef } from 'react';
// import gsap from 'gsap';
import img from "../assets/s1.png"
import img2 from "../assets/s2.png"

let autoSlide = true;
let slideDuration = 2000;
const slider = [
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
  {
    image: img,
    title: "Book Review",
    description: "A website which keeps tracks of book read, genre , and latest in book world. Explore all your taste here.",
    link: "https://github.com/princi-2306/Book-Reviews"
  },
  // {
  //   image: "https://www.billboard.com/wp-content/uploads/media/streaming-illustration-v-2019-billboard-1548.jpg",
  //   title: "OXZ Thunder",
  //   description: "OXZ Thunder is a music streaming website built using JavaScript and various libraries. It offers a dynamic and interactive user experience for discovering and enjoying music.",
  //   link: "https://github.com/THUNDERBLD/OXZ-Thunder"
  // },
  // {
  //   image: "https://www.kualitee.com/wp-content/uploads/2021/03/Untitled-design-11.png",
  //   title: "GUI Using Tkinter",
  //   description: "A GUI-based chemical kinetics calculation helper, built with Python and Tkinter, provides an interactive interface for solving and visualizing chemical kinetics problems.",
  //   link: "https://github.com/THUNDERBLD/GUI"
  // }
];

function Project() {


  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = () => setCurrent((e) => (e === 0 ? slider.length - 1 : e - 1));
  const next = () => setCurrent((e) => (e === slider.length - 1 ? 0 : e + 1));

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
      top: 778,
      behavior: 'smooth'
    });
  };

  const scrollToFourthPage = () => {
    window.scrollTo({
      top: 2450,
      behavior: 'smooth'
    });
  };



  return (
    <>
      <div className="relative border-none w-screen h-screen bg-black">
        <div className='absolute sm:hidden border-none w-screen h-screen bg-black'>
          <div className="logo top-0 absolute w-full h-full">
            <img className="object-bottom w-full h-full" src="https://i.pinimg.com/736x/69/98/78/699878ddc2dc61fa3ac6986b4eb72abd.jpg" alt="" />
          </div>
        </div>
        <div className='absolute w-full h-full hidden sm:flex justify-center'>
          <img className="h-full object-fill w-full" src="https://coolbackgrounds.io/images/backgrounds/black/black-radial-gradient-bb05ed79.jpg" alt="" />
        </div>
        <div style={{ "height": "100vh" }} className="absolute w-full h-full hidden sm:flex justify-center">
          <img style={{ "width": "600px", "height":"100vh" }}  className="object-bottom translate-y-100 scale-125 translate-y-44" src="https://raw.githubusercontent.com/THUNDERBLD/Material/main/drakKnight.png" alt="" />
        </div>
        <div className='absolute top-12 sm:top-4 mix-blend-difference left-0 right-0'>
          <div className='about-text sm:text-blue-400 text-red-500 z-10 text-3xl flex justify-center text-center px-3 py-2 font-semibold mx-7 my-4'>
            PROJECTS
          </div>
        </div>
        <div className="absolute sm:hidden top-0 left-0 right-0 text-center">
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

        <div className='relative left-0 right-0 top-28 sm:top-24 flex justify-center'>
          <div className='about-text z-10 text-base text-center flex m-4 py-1 lg:inline-block justify-center px-1 backdrop-filter backdrop-blur-sm rounded-md bg-opacity-20'>
            THE CODES OF THESE PROJECTS ARE UPLOADED ON MY GITHUB, PLEASE CLICK ON THE CAROUSEL IMAGE OR GITHUB LOGO TO ACCESS IT.
          </div>
        </div>

        <div>
          <div className="m-auto mt-4 p-4 sm:w-[80vw] sm:h-[60vh] lg:h-[70vh] rounded-md flex justify-center items-center h-[50vh] relative w-full overflow-hidden top-24"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div style={{ transform: `translateX(-${current * 100}%)` }} className={`flex transition-transform ease-out duration-500 w-full h-full`}>
              {slider.map((e, i) => (
                <div className="relative hover:scale-105 ease-out duration-700 px-4 transition-all min-w-full h-full" key={i}>
                  <a target='_blank' href={e.link}>
                    <img src={e.image} alt={e.title} className='object-cover rounded-lg w-full h-full' />
                  </a>
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-black bg-opacity-50 text-white">
                    <h3 className="text-lg font-semibold mx-2">{e.title}</h3>
                    <p className="text-sm mx-2">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute mix-blend-difference p-1 w-full flex justify-between items-center">
              <button onClick={prev} className="rotate-180 border-2 p-2 rounded-full shadow-lg hover:bg-white">
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
            <div className="absolute bottom-0 mt-2">
              <div className="gap-2 flex justify-center items-center ">
                {slider.map((_, i) => (
                  <div key={i} className={`border bg-white w-2 h-2 rounded-full ${current === i ? "p-1" : "bg-opacity-50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 sm:bottom-8 lg:-bottom-2 left-0 right-0 text-center">
          <div className='w-full flex justify-center my-4'>
            <a href="https://github.com/THUNDERBLD" target='_blank'>
              <div className='z-10 relative rounded-full hover:scale-110 duration-300 bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                  <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
          <button
            onClick={scrollToFourthPage}
            className="px-2 sm:hidden py-3 font-semibold text-white bg-black rounded-lg hover:bg-white">
            <svg className='hover:text-black text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Project
