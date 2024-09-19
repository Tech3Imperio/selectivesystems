import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='bg-gray-800 -mt-8 text-white h-screen flex justify-start items-center pt-60 flex-col' style={styles.container}>
      <h1 className='poppins-regular' style={styles.title}>404</h1>
      <h2 className='poppins-regular' style={styles.subtitle}>Page Not Found</h2>
      <p className='font-raleway' style={styles.text}>Sorry, the page you are looking for does not exist.</p>
      {/* <Link to="/" style={styles.homeLink}>Go to Home</Link> */}
      <button className="w-[11rem] h-[3.8rem] poppins-regular border rounded-[2.5rem] hover:bg-[#25D366] hover:scale-110 text-[#25D366] hover:text-white transition-transform duration-700 flex items-center justify-center mx-auto mt-7">
          <Link
            to="/"
            className="text-xl flex items-center justify-center space-x-2 "
          >
            <FaArrowLeft />
            <span>Go To Home</span>
          </Link>
        </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    // marginTop: '5rem',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '2.7rem',
    // margin: '1rem 0',
  },
  text: {
    fontSize: '0.897rem',
  },
  homeLink: {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    backgroundColor: '#01124A',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};

export default PageNotFound;
