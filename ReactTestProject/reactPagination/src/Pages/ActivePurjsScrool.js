import { cleanup } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";

const Learn = () => {
  
  const nav = ["option1", "option2", "option3", "option4", "option5", "option6"];



  function handleScrool(){
    let allcard = document.querySelectorAll(".card")
    let allmenu = document.querySelectorAll(".menuIntem")
   
    // console.log("allmenu",allmenu[2])

    allcard.forEach((Item,index)=>{
      let cardindex = Item.getBoundingClientRect()

      if(cardindex.top >=0 && cardindex.top <= window.innerHeight/2 ){
        let getmenuindex= allmenu[index]
        allmenu.forEach((Item,index)=> Item.style.backgroundColor="")
        getmenuindex.style.backgroundColor="red"
       
      }
     
    })

   
  }


  const handleChange =(index)=>{
    let allcard = document.querySelectorAll(".card")
    let allmenu = document.querySelectorAll(".menuIntem")

   
    allmenu.forEach((Item,index)=> Item.style.backgroundColor="")
    allmenu[index].style.backgroundColor="red"
    allcard[index].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        // Scroll the corresponding card into view smoothly
        // const correspondingCard = document.getElementById(`card-${index}`);
        // correspondingCard.scrollIntoView({ behavior: "smooth", block: "center" });
    

  }

  useEffect(()=>{
    window.addEventListener("click",handleScrool)
    return ()=>{
        window.removeEventListener("click",handleScrool)
    }

  },[])






  return (
    <div>
      {/* Navigation Menu */}
      <div className="row">
        <div className="col-md-12 position-fixed  z-1 bg-light" style={{ top: 0 }}>
          {nav?.map((n, index) => (
            <a
              key={index}
           
              className={`px-5 menuIntem p-4  text-white" 
              }`}
              onClick={()=>handleChange(index)}
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
        <div className="col-md-12 mb-5" style={{ paddingTop: "70px" }}>
          {nav?.map((n, index) => (
            <div
              // ref={(el) => (cardRefs.current[index] = el)}
            // ref={cardRefs}
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
