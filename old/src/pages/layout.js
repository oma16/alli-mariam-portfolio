import React from 'react';
import Nav from '../components/nav';
import Social from '../components/social';
import { StaticImage } from 'gatsby-plugin-image';
import Footer from '../components/footer';

export default function Layout({ children }) {
    const [theme, setTheme] = React.useState('dark');
      const [isOpen, setIsOpen] = React.useState(false);
    
      const handleMenuClick = () => {
        setIsOpen(!isOpen);
      };
      const handleClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // console.log(newTheme);
        if (typeof window !== 'undefined') {
          // Access localStorage here
          localStorage.setItem('theme-ui-color-mode', newTheme);
        }
      };
    
      React.useEffect(() => {
        setTheme(localStorage.getItem('theme-ui-color-mode'));
      }, []);
      if (typeof document !== 'undefined') {
        if (theme === 'dark') {
          document.body.className = 'bg-gray-400 text-gray-100';
        } else {
          document.body.className = 'bg-gray-300 text-gray-200';
        }
      }
    
  return (
    <div className='w-full'>
      <div
        className={`fixed shadow-2xl z-20 border-b py-5 flex w-full px-5 top-0 md:px-28 lg:px-28 justify-between  ${
          theme === 'dark'
            ? 'border-gray-100 bg-gray-400'
            : 'border-gray-200 bg-gray-300'
        }`}
      >
        <div className={`md:hidden`}>
          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={theme === 'dark' ? 'flex' : 'hidden'}
          >
            <StaticImage src="../images/menu.svg" alt="menu" />
          </div>

          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={theme === 'dark' ? 'hidden' : 'flex'}
          >
            <StaticImage src="../images/menu-l.svg" alt="menu" />
          </div>
        </div>

        <div
          className={`flex fixed top-0 left-0 rounded-tr-lg rounded-br-lg flex-col md:flex-row md:static px-10 md:px-0 z-20 w-10/12 md:w-full md:justify-between md:items-center  ${
            theme === 'dark'
              ? ' md:bg-gray-400 bg-white text-gray-100'
              : ' md:bg-gray-300 bg-white text-gray-100 md:text-gray-200'
          } ${isOpen ? 'flex ' : 'hidden md:flex'}`}
        >
          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={`md:hidden self-end mt-8`}
          >
            <StaticImage src="../images/close.svg" alt="close" />
          </div>
          <Nav />
          <hr className="md:hidden flex mt-5 text-gray-300" />
          <Social
            theme={theme}
            className="relative my-16 inline-flex w-full items-center  justify-between  md:hidden"
          />
        </div>
        <div>
          <div
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleClick}
            className={theme === 'dark' ? 'flex' : 'hidden'}
          >
            <StaticImage src="../images/icon-moon-m.svg" alt="moon" />
          </div>

          <div
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleClick}
            className={theme === 'dark' ? 'hidden' : 'flex'}
          >
            <StaticImage src="../images/icon-sun.svg" alt="sun" />
          </div>
        </div>
      </div>

      <Social theme={theme} className="fixed hidden md:flex" />
      {children}
      <Footer />
    </div>
  );
}
