import {useRef} from 'react'
// import gsap from 'gsap'
// import { info } from 'autoprefixer'

function Contact() {

  const infoRef = useRef(0)
  const crossRef = useRef(0)
  const bodyRef = useRef(0)
  const clicker = () => {
    infoRef.current.style.display = "block"
    crossRef.current.style.display = "none"
  }
  const reclicker = () => {
    infoRef.current.style.display = "none"
    crossRef.current.style.display = "block"
  }
  const scrollToThirdPage = () => {
    window.scrollTo({
      top: 1580,
      behavior: 'smooth'
    });
  };
  const scrollToFirstPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div ref={bodyRef} className="relative border-none w-screen h-screen bg-black">        
        <div className='absolute w-full h-full'>
          <img className="object-bottom w-full h-full" src="https://w0.peakpx.com/wallpaper/944/506/HD-wallpaper-react-hacker-programming-javascript-python-coder-software-coding-computer-science-css-web-design-html-linux-html5-programmer-laptop-tech-php-developer.jpg" alt="" />
        </div>
        <div className='absolute w-full h-full hidden sm:flex justify-center'>
          <img className="h-full w-full object-cover" src="https://img.freepik.com/free-photo/abstract-luxury-black-gradient-with-border-vignette-background-studio-backdrop-well-use-as-backdrop-background-studio-background-gradient-frame_1258-55601.jpg?w=1060&t=st=1722592318~exp=1722592918~hmac=c10fb86f700661f1a23979315edbbfabb10fb50cc7ad675234bee5dc25d63d2c" alt="" />
        </div>
        <div style={{ "height": "100vh" }} className="absolute w-full h-full hidden sm:flex justify-center">
          <img style={{ "width": "370px", "height":"100vh" }}  className="object-bottom translate-y-100 scale-125 translate-y-44" src="https://raw.githubusercontent.com/THUNDERBLD/Material/main/white-jin.png" alt="" />
        </div>

        <div className="absolute sm:hidden top-8 left-0 right-0 text-center">
          <button
            onClick={scrollToThirdPage}
            className="px-2 py-3 font-semibold text-white bg-white rounded-lg hover:bg-black">
            <svg className='hover:text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="absolute top-24 left-0 right-0">
          <div className="about-text z-10 relative text-3xl flex justify-center text-center px-3 py-2 font-bold mx-7 my-2">
            <div className="text-red-500 sm:text-red-600 sm:text-4xl">
            CONTACT
            </div>
          </div>
        <div className="w-full flex mix-blend-difference sm:mix-blend-normal justify-center ">
          <div className="z-20 text-black rounded-lg h-[60vh] bg-gray-900 sm:bg-inherit absolute w-96 mx-4 ">

            <div ref={infoRef} className='relative mix-blend-normal rounded-md transition-all ease-out duration-1000 w-full h-full hidden bg-green-200 border font-semibold text-lg text-white p-2 '>
              <div onClick={reclicker} className='cross w-5 hover:scale-110'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#000000" fill="none">
                <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              </div>

              <div className='text-white bg-black flex justify-center py-10 my-4 rounded-lg'>
                Phone : 
                <div>
                  +91 7248411115
                </div>
              </div>
              <div className='text-white bg-black flex mix-blend-normal justify-center py-10 my-4 rounded-lg'>
                Current Location : 
                <div>
                  VIT bhopal, MP
                </div>
              </div>
              <div className='text-white bg-black flex justify-center py-10 my-4 rounded-lg'>
                Email : 
                <div>
                  ayanalihaider9@gmail.com
                </div>
              </div>
            </div>

            <form action="https://formsubmit.co/ayanalihaider9@gmail.com" method="POST" ref={crossRef} className="relative font-semibold no-underline shadow-black shadow-md mix-blend-difference sm:mix-blend-normal sm:backdrop-filter sm:backdrop-blur-sm sm:rounded-md m-1 py-2 sm:bg-opacity-30 sm:bg-blue-400">
              <div className="text-lg text-white p-2 pt-4 mx-8 ">
                Message me
              </div>
              <div className="border-x-2 mx-2 my-4">
              <input type="message" name="message" className="w-80 mx-6 my-2 p-2 py-10 rounded-md" id="message" placeholder="Message" rows="4"></input>
              <input name="Subject" id="Subject" className="rounded-md w-80 mx-6 my-2 p-2 " placeholder="Subject" type="text" />
              <input name="Phone" id="Phone" className="rounded-md w-80 mx-6 my-2 p-2" placeholder="Phone No." type="text" />
              <input name="email" className=" rounded-md w-80 mx-6 p-2 my-2" id="Email" placeholder="Email" type="text" />
              <input type="hidden" name="_captcha" value="false"></input>
              </div>
              <div className="flex w-full justify-center">
                <button className="">
                <a target='_blank' href="https://pbs.twimg.com/media/GTZ2y3EXIAA8F4q?format=jpg&name=900x900" className="relative inline-block text-md group">
                  <span className="relative z-10 block px-5 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-1 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">SEND</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>

        <div>
          <div className="w-full absolute flex justify-center mix-blend-difference bottom-20 ">
            <div className="info mx-4 hover:scale-110">
              <button onClick={clicker}>
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.992 8H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </button>
            </div>
            <div className="linkedin mx-4 hover:scale-110">
              <a target='_blank' href="https://www.linkedin.com/in/faraz-mohammed-162289227/">
              <button>
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                  <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </button>
              </a>
            </div>
            <div className="intagram mx-4 hover:scale-110">
              <a target='_blank' href="https://www.instagram.com/thunder_blood_9/?next=%2F">
              <button>
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </a>
            </div>
            <div className="Twitter mx-4 hover:scale-110">
              <a target='_blank' href="https://x.com/FarazMohammmed9">
              <button>
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                  <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </a>
            </div>
            <div className="github mx-4 hover:scale-110">
              <a target='_blank' href="https://github.com/THUNDERBLD">
              <button>
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                  <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute sm:hidden bottom-8 left-0 right-0 text-center">
          <button
            onClick={scrollToFirstPage}
            className="px-2 py-3 font-semibold text-white bg-black rounded-lg hover:bg-white">
            <svg className='hover:text-black text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="Footer z-20 absolute bottom-0 bg-zinc-900 w-full h-6">
          <div className="flex text-gray-400 text-sm justify-center">
            <div>

            </div>
            <div>
            ©THUNDER BLOOD 2024 Inc. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
