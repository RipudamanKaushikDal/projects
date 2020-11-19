import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  const baseUrl = "https://tinderback-end.herokuapp.com/tinder/cards";

  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseUrl);

      setPeople(res.data);
    }
    getData();
  }, []);

  console.log(people);

  const swiped = (direction, nametoDelete) => {
    console.log("removing " + nametoDelete);
  };

  const outOfFrame = (nametoDelete) => {
    console.log(nametoDelete + " left the screen");
  };

  return (
    <div className="tindercards">
      <div className="card__container">
        {people.map((character) =>
          "name" && "url" in character ? (
            <TinderCard
              className="swipe"
              key={character.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                className="cardContent"
                style={{ backgroundImage: `url(${character.url})` }}
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ) : (
            false
          )
        )}
      </div>
    </div>
  );
}

export default TinderCards;
