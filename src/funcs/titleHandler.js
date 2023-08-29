import { displayTimeProperly } from "./displayTimeProperly";

export const titleHandler = (condition, min, sec) => {
    const firstMsg = "Time to Work";
    const secMsg = "Take a Break";

  document.title = `${displayTimeProperly(min)}:${displayTimeProperly(sec)} - ${
    condition ? firstMsg : secMsg
  }`;
};
