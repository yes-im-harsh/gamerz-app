import { useState } from "react";

const Selection = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {};
  console.log(month);

  return (
    <div className="mb-12 flex flex-wrap justify-center">
      <select
        className="select select-warning w-full max-w-xs mr-4"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option disabled selected>
          Pick a month
        </option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
      <select
        className="select select-warning w-full max-w-xs mr-4"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option disabled selected>
          Pick a year
        </option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
      <div>
        <button class="btn" onClick={handleSubmit}>
          Go
        </button>
      </div>
    </div>
  );
};

export default Selection;
