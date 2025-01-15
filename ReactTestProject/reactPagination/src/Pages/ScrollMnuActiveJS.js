import React, { useEffect, useState } from "react";

const Learn = () => {
  const [active, setActive] = useState(null);
  const nav = ["option1", "option2", "option3", "option4", "option5", "option6"];

  useEffect(() => {
    const queryCards = document.querySelectorAll(".card");

    const handleScroll = () => {
      queryCards.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        console.log("window.innerHeigh",)
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    setActive(index);

    const targetElement = document.getElementById(`card-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="row">
        {/* Navigation Links */}
        <div className="col-md-12 position-fixed z-1 bg-light">
          {nav.map((n, index) => (
            <a
              key={index}
              onClick={() => handleClick(index)}
              className={`px-5 p-4 ${
                active === index ? "bg-danger text-white transition-all" : ""
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
              id={`card-${index}`}
              className="card mt-5  vh-100"
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
