import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img from '../assets/profile.jpg'

function Navbar() {
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  
  const ulRef1 = useRef(null);
  const ulRef2 = useRef(null);

  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  
  const LinkedinRef = useRef(null);
  
  useEffect(() => {

    const tl = gsap.timeline()
    // Ensure the initial y position is set offscreen
    gsap.set([navRef1.current, navRef2.current], { y: -100 });

    tl.to([navRef1.current, navRef2.current], {
      y: 0,
      delay: 1,
      duration: 2,
      ease: 'power3.out'
    });

    gsap.set([imgRef1.current, imgRef2.current], { y: -50, opacity: 0 });

    tl.to([imgRef1.current, imgRef2.current], {
      y: 0,
      delay:2,
      opacity: 2,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.5
    });

    gsap.set(LinkedinRef.current, { y: -50, opacity: 0 });

    tl.to(LinkedinRef.current, {
      y: 0,
      opacity: 2,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.5
    });


    gsap.set([ulRef1.current.children, ulRef2.current.children], { y: -50, opacity: 0 });

    tl.to([ulRef1.current.children, ulRef2.current.children], {
      y: 0,
      delay:1,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.5
    });
  }, []);

  const scrollToFirstPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSecondPage = () => {
    window.scrollTo({
      top: 740,
      behavior: 'smooth'
    });
  };
  const scrollToThirdPage = () => {
    window.scrollTo({
      top: 1500,
      behavior: 'smooth'
    });
  };
  const scrollToFourthPage = () => {
    window.scrollTo({
      top: 3000,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div >
        <nav ref={navRef1} className="navbar flex sm:hidden justify-evenly flex-wrap ">
          <div ref={imgRef1} className="logo my-5 mx-1">
            <img className="z-10 w-10 h-10 rounded-full mt-1" src={img} alt="" />
          </div>
          <ul ref={ulRef1} className="flex my-5 p-1 flex-wrap justify-evenly backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg gap-1 text-lg font-sans font-semibold shadow-sm shadow-white">
            <li>
              <a href='#about1'>
                  <div href="#" className="relative px-2 py-1 overflow-hidden font-medium text-gray-600 rounded-xl shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About</span>
                  </div>
              </a>
            </li>
            <li>
              <a href="#skill1">
                  <div href="#_" className="relative px-2 py-1 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Skills</span>
                  </div>
              </a>
            </li>
            <li>
              <a href='#project1'>
              <div href="#_" className="relative px-2 py-1 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Projects</span>
              </div>
              </a>
            </li>
            <li>
              <a href='#contact1'>
                  <div href="#_" className="relative px-2 py-1 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contact</span>
                  </div>
              </a>
            </li>
          </ul>
          <button className='mr-2' ref={LinkedinRef}>
            <a target='_blank' href="https://www.linkedin.com/in/priyanshi-maurya-87141a2a4/">
              <div className="border rounded-full p-2 my-6 mx-2 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="black">
                  <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </button>
        </nav>

        <div ref={navRef2} className='hidden sm:block sm:h-16 py-3 w-full transition-all ease-out duration-500 border-white'>
            <div className='nav flex justify-evenly items-center text-xl'>
              <div ref={imgRef2} className='flex gap-1'>
                <img className='h-10 rounded-full' src={img} alt="" />
                <div className='py-1 rounded-md px-2 underline mx-2 '>
                  PRIYANSHI | <span className='text-blue-400'> DEVELOPER </span>
                </div>
              </div>
              <div ref={ulRef2} className='font-CoolFont1 flex mx-3 gap-1 md:gap-10 font-semibold'>
                <div className=''>
                  <a onClick={scrollToFirstPage} className="relative px-3 py-2 overflow-hidden font-medium text-gray-600 rounded-xl shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About</span>
                  </a>
                </div>

                <div className=''>
                  <a onClick={scrollToSecondPage} className="relative px-4 py-2 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Skills</span>
                  </a>
                </div>

                <div>
                  <a onClick={scrollToThirdPage} className="relative px-3 py-2 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Projects</span>
                  </a>
                </div>

                <div>
                  <a onClick={scrollToFourthPage} className="relative px-3 py-2 overflow-hidden font-medium text-gray-600 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}

export default Navbar;
