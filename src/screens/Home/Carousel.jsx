import { useState, useEffect } from 'react';

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); //to set back to index 0
        setShow(true);
      }, 500); // set to match fade out time
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div
      className='carousel'
      style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s' }}
    >
      <img src={data[currentIndex].image} alt='carousel' />
      <p>{data[currentIndex].text}</p>
    </div>
  );
}

//carousel ref: academy.dream-coding.com
