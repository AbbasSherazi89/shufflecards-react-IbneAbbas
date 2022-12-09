import React, { useState } from "react";

const Cards = () => {

  const [click, setClick] = useState(true);
  const [picks, setPicks] = useState(true);
  const [boxData, setDoxData] = useState(false);
  const [medals, setMedals] = useState(1);

  const cards = ["card1", "card2", "card3", "card4"];

  const selectRandCard = () => {
    let item = cards[Math.floor(Math.random() * cards.length)];
    console.log(item);
    setClick(false);
    setDoxData(item);
  };

  const probability = () => {
    const set = { 1: 0.1, 2: 0.3, 3: 0.5 };
    setPicks(false);
    // get probabilities sum:
    let sum = 0;
    for (let j in set) {
      sum += set[j];
    }


    setMedals(pick_random());

    const pick_random = () => {
      let pick = Math.random() * sum;
      for (let j in set) {
        pick -= set[j];
        if (pick <= 0) {
          return j;
        }
      }
    };

  };

  return (
    <>
      <div className="container">
        {click ? (
          <>
            <div className="row row1">
              <h1 className="text-center py-4">Buy Card</h1>
              {cards.map((val, index) => {
                return (
                  <div className="col-md-3 col-6">
                    <div className="card bg-light mb-3">
                      <div className="card-header text-center" key={index}>
                        <h3 className="card-text text-center">
                          <span className="text-success">{val}</span>
                        </h3>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
            <button
              className="btn btn-outline-success"
              onClick={() => selectRandCard()}
            >
              Buy
            </button>

            </div>
          </>
        ) : picks ? (
          <>
            <h1>Mystery box</h1>
            <div className="col-md-3 col-6">
              <div className="card bg-light mb-3">
                <div className="card-header text-center">{boxData}</div>
                <div className="card-body">
                  <h3 className="card-text text-center">
                    <span className="text-success">Congratiolation</span>
                  </h3>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-success" onClick={() => probability()}>
              Get a card
            </button>
          </>
        ) : (
          <div>
            {medals === 1
              ? "Gold"
              : medals === 2
              ? "Silver"
              : medals === 3
              ? "Bronze"
              : null}
          </div>
          
        )}
      </div>
    </>
  );
};

export default Cards;
