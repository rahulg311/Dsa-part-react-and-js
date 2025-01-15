import React, { useEffect, useRef, useState } from "react";

const Learn = () => {
  const cardRefs = useRef([]); // To store refs of cards
  const [activeItem, setActiveItem] = useState(0);

  const nav = ["option1", "option2", "option3", "option4", "option5", "option6"];

  // Handle scroll to highlight active menu item
  const handleScroll = () => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveItem(index);
      }
    });
  };

  // Scroll to a particular card when menu item is clicked
  const handleClick = (index) => {
    setActiveItem(index);
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // next method active current page  in scrool 
//     let currentIndex = cardRefs.current[index]

// if (currentIndex) {
//   // Calculate the offset to center the element in the window
//   const rect = currentIndex.getBoundingClientRect();
//   const elementTop = rect.top + window.scrollY;
//   const windowHeight = window.innerHeight;

//   // Scroll to the position that centers the element
//   const offset = elementTop - (windowHeight / 2) + (rect.height / 2);
//   window.scrollTo({
//       top: offset,
//       behavior: "smooth"
//   });


  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation Menu */}
      <div className="row">
        <div className="col-md-12 position-fixed z-1 bg-light" style={{ top: 0 }}>
          {nav.map((n, index) => (
            <a
              key={index}
              onClick={() => handleClick(index)}
              className={`px-5 p-4 ${
                activeItem === index ? "bg-danger text-white" : ""
              }`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
            >
              {n}
            </a>
          ))}
        </div>

        {/* Cards Section */}
        <div className="col-md-12" style={{ paddingTop: "70px" }}>
          {nav.map((n, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              id={`card-${index}`}
              className="card mt-5"
              key={index}
              style={{ width: "18rem" }}
            >
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">Card {index + 1}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  {n}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
