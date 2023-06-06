import React, { useEffect, useState } from 'react';
import './App.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {
  const [countdown, setCountdown] = useState(10); // 20 seconds per slide
  const [activeSlide, setActiveSlide] = useState(0); // Active slide index

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          return prevCountdown;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleSlideChange = (nextSlide: number) => {
    setActiveSlide(nextSlide);
    setCountdown(10); 
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={800}
            naturalSlideHeight={500}
            totalSlides={3}
            className="carousel-provider"
            currentSlide={activeSlide}
            isPlaying={countdown > 0}
            interval={10000}
            infinite
          >
            <Slider className="carousel-slider">
            <Slide index={0}>
                <img src="https://worldmapwithcountries.net/wp-content/uploads/2018/07/winter_world_physical_giclee_lg.jpg" alt="Image 2" className="slide-image" />
              </Slide>
              <Slide index={1}>
                <img src="https://th.bing.com/th/id/R.f7d6c414da1692a7bb90d575435d1cc4?rik=S9eZCgPyWBvN%2fA&riu=http%3a%2f%2fwww.worldofmaps.net%2fuploads%2fpics%2fsatellitenkarte-usa.jpg&ehk=bASLnV5mLcie9reVmWfslxhRxjGH7SwaZ6%2fFxHMBMew%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" className="slide-image" />
              </Slide>
              <Slide index={2}>
                <img src="https://th.bing.com/th/id/R.77706f43e41f4dc8a79f906fe7acb8a7?rik=mF3t4fWwC4ws0w&riu=http%3a%2f%2fimages.spaceref.com%2fmodis%2fimage01072013_500m.jpg&ehk=A7Q9ZDRFaBSeKaLhHj5RBE%2b3Y85I8N4hJY4NQOrscww%3d&risl=&pid=ImgRaw&r=0" alt="Image 3" className="slide-image" />
              </Slide>
            </Slider>
            <ButtonBack className="carousel-button" onClick={() => handleSlideChange(activeSlide - 1)}>
              Back
            </ButtonBack>
            <ButtonNext className="carousel-button" onClick={() => handleSlideChange(activeSlide + 1)}>
              Next
            </ButtonNext>
          </CarouselProvider>
        </div>
        <div className={`countdown-box ${countdown === 0 ? 'countdown-box-red' : ''}`}>
          <h1>{formatTime(countdown)}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
