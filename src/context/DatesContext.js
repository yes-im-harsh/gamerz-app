import { createContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [newmonth, setNewmonth] = useState("03");
  const [newyear, setNewyear] = useState("21");

  return (
    <DateContext.Provider
      value={{ newmonth, newyear, setNewmonth, setNewyear }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
