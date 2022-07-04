import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Card = ({ title, iconURL }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="glassmorphism relative grid place-items-center py-3 box-border w-full h-full cursor-pointer">
      <p className="m-0 text-sm">{title}</p>
      <img className="w-8 m-2" src={iconURL} />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-green-500" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
};

export default Card;
