import React from "react";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <div class="controls grid place-items-center w-full lg:w-2/6 mt-8 lg:my-0">
      <div class="controls grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 grid-rows-2 md:grid-rows-1 lg:grid-rows-2 max-w-full w-full">
        <Card
          title="Lights"
          iconURL="https://img.icons8.com/pastel-glyph/64/000000/light--v1.png"
        />
        <Card
          title="Cleaning"
          iconURL="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-robot-vacuum-cleaner-internet-of-things-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
        />
        <Card
          title="Music"
          iconURL="https://img.icons8.com/ios-glyphs/90/000000/infrared-beam-sending.png"
        />
        <Card
          title="Motion sensor"
          iconURL="https://img.icons8.com/ios-glyphs/90/000000/infrared-beam-sending.png"
        />
      </div>
    </div>
  );
};

export default CardsContainer;
