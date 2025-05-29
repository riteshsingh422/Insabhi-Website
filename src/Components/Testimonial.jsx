import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { gsap } from 'gsap';
import './Testimonial.css';

const Testimonial = () => {
  const carouselRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // State to track touch coordinates for swipe detection
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const testimonialData = [
    {
      id: 1,
      name: 'Santosh T',
      profession: 'Owner',
      review: 'Partnering with Sachin for 7+ years has been invaluable. He nurtured a skilled team at Insabhi through personal training. I confidently recommend their dedication',
      dpImage: 'img/dp1.jpg',
    },
    {
      id: 2,
      name: 'Gurneet Jolly',
      profession: 'Director',
      review: 'Since 2018, Insabhi’s work has been phenomenal, offering invaluable system enhancement recommendations. Sachin’s talent & reliability make them highly professional & recommended.',
      dpImage: 'img/dp2.jpg',
    },
    {
      id: 3,
      name: 'Mohammed Alkhatib',
      profession: 'Owner',
      review: 'Sachin showed professionalism developing our website on time, extending support beyond our contract & assisting us even late hours when needed.',
      dpImage: 'img/dp3.jpg',
    },
    {
      id: 4,
      name: 'Samir Sal',
      profession: 'Office Accountant',
      review: 'Working with Insabhi is refreshing. Their expertise & dedication are invaluable. They consistently demonstrate commitment as our reliable tech partner.',
      dpImage: 'img/dp4.jpeg',
    },
  ];

  const initCardEvents = (cardEl, index) => {
    const updateCard = (e) => {
      const box = cardEl.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      const angle = Math.atan2(e.pageX - centerX, 0) * (15 / Math.PI);
      gsap.set(cardEl, { '--current-card-rotation-offset': `${angle}deg` });
    };

    const resetCard = () => {
      gsap.set(cardEl, { '--current-card-rotation-offset': '0deg' });
    };

    cardEl.addEventListener('pointermove', updateCard);
    cardEl.addEventListener('pointerout', resetCard);
    return () => {
      cardEl.removeEventListener('pointermove', updateCard);
      cardEl.removeEventListener('pointerout', resetCard);
    };
  };

  // Initialize card animations (runs once on mount)
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    const init = () => {
      gsap.timeline()
        .to(cardsContainer.children, {
          delay: 0.15,
          duration: 0.5,
          stagger: { ease: 'power4.inOut', from: 'right', amount: 0.1 },
          '--card-translateY-offset': '0%',
        });
    };

    init();

    const currentCard = cardsContainer.querySelector('.current--card');
    initCardEvents(currentCard, 0);

    return () => {
      const currentCard = cardsContainer.querySelector('.current--card');
      if (currentCard) {
        currentCard.removeEventListener('pointermove', () => {});
        currentCard.removeEventListener('pointerout', () => {});
      }
    };
  }, []); // Empty dependency array to run only on mount

  // Handle swipe functionality
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    const handleTouchStart = (e) => {
      e.preventDefault(); // Prevent default scrolling
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent default scrolling
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const diffX = touchStartX.current - touchEndX.current;
        const swipeThreshold = 50; // Minimum swipe distance to trigger a change

        if (Math.abs(diffX) > swipeThreshold) {
          if (diffX > 0) {
            // Swipe left: go to next card
            const nextIndex = (activeIndex + 1) % testimonialData.length;
            handleCardClick(nextIndex);
          } else {
            // Swipe right: go to previous card
            const prevIndex = (activeIndex - 1 + testimonialData.length) % testimonialData.length;
            handleCardClick(prevIndex);
          }
        }
      }
      // Reset touch coordinates
      touchStartX.current = null;
      touchEndX.current = null;
    };

    cardsContainer.addEventListener('touchstart', handleTouchStart);
    cardsContainer.addEventListener('touchmove', handleTouchMove);
    cardsContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      cardsContainer.removeEventListener('touchstart', handleTouchStart);
      cardsContainer.removeEventListener('touchmove', handleTouchMove);
      cardsContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex]); // Dependency on activeIndex for swipe updates

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleSelect = (index) => {
    setActiveIndex(index);

    const cards = cardsContainerRef.current.children;
    const bgImages = document.querySelectorAll('.testimonial__bg__image');
    const currentCard = cards[index];

    // Reset all cards and background images
    Array.from(cards).forEach((card) => {
      card.classList.remove('current--card', 'previous--card', 'next--card');
    });
    Array.from(bgImages).forEach((bg) => {
      bg.classList.remove('current--image', 'previous--image', 'next--image');
    });

    // Set current card and background image
    currentCard.classNameList.add('current--card');
    bgImages[index].classList.add('current--image');

    // Set previous and next cards and background images
    const prevIndex = (index - 1 + testimonialData.length) % testimonialData.length;
    const nextIndex = (index + 1) % testimonialData.length;

    cards[prevIndex].classList.add('previous--card');
    cards[nextIndex].classList.add('next--card');
    bgImages[prevIndex].classList.add('previous--image');
    bgImages[nextIndex].classList.add('next--image');

    // Update card events
    Array.from(cards).forEach((card, i) => {
      card.removeEventListener('pointermove', () => {});
      card.removeEventListener('pointerout', () => {});
      if (i === index) {
        initCardEvents(card, i);
      }
    });
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase">Testimonials</h4>
          <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
        </div>
        <div className="app">
          <div className="cardList">
            <div className="cards__wrapper" ref={cardsContainerRef}>
              {testimonialData.map((item, index) => (
                <div
                  key={item.id}
                  className={`card ${index === activeIndex ? 'current--card' : index === (activeIndex + 1) % testimonialData.length ? 'next--card' : 'previous--card'}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card__content">
                    <img
                      src={item.dpImage}
                      alt="Profile"
                      className="card__dp"
                    />
                    <h1 className="text name">{item.name}</h1>
                    <h4 className="text profession">{item.profession}</h4>
                    <p className="text review">{item.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial__bg">
            {testimonialData.map((item, index) => (
              <div
                key={item.id}
                className={`testimonial__bg__image ${index === activeIndex ? 'current--image' : index === (activeIndex + 1) % testimonialData.length ? 'next--image' : 'previous--image'}`}
              >
                <img src={item.bgImage} alt="Background" />
              </div>
            ))}
          </div>
        </div>
        <Carousel
          ref={carouselRef}
          interval={4000}
          controls={false}
          indicators={true}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          style={{ display: 'none' }}
        >
          {testimonialData.map((item) => (
            <Carousel.Item key={item.id}>
              <div style={{ visibility: 'hidden' }} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
