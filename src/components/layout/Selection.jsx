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
        <option value="01" >January</option>
        <option value="01" >February</option>
        <option value="01" >March</option>
        <option value="01" >April</option>
        <option value="01" >May</option>
        <option value="01" >June</option>
        <option value="01" >July</option>
        <option value="01" >September</option>
        <option value="01" >October</option>
        <option value="01" >November</option>
        <option value="01" >December</option>
      </select>
      <select
        className="select select-warning w-full max-w-xs mr-4"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option disabled selected>
          Pick a year
        </option>
        <option value="01" >2000</option>
        <option value="01" >2001</option>
        <option value="01" >2002</option>
        <option value="01" >2003</option>
        <option value="01" >2004</option>
        <option value="01" >2005</option>
        <option value="01" >2006</option>
        <option value="01" >2007</option>
        <option value="01" >2008</option>
        <option value="01" >2009</option>
        <option value="01" >2010</option>
        <option value="01" >2011</option>
        <option value="01" >2012</option>
        <option value="01" >2013</option>
        <option value="01" >2014</option>
        <option value="01" >2015</option>
        <option value="01" >2016</option>
        <option value="01" >2017</option>
        <option value="01" >2018</option>
        <option value="01" >2019</option>
        <option value="01" >2020</option>
        <option value="01" >2021</option>
        <option value="01" >2022</option>
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
