import { useState, useContext } from "react";
import DateContext from "../../context/DatesContext";

const Selection = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const { setNewmonth, setNewyear } = useContext(DateContext);
  console.log(month);
  console.log(year);

  setNewmonth(month);
  setNewyear(year);

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
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="07">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select
        className="select select-warning w-full max-w-xs mr-4"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option disabled selected>
          Pick a year
        </option>
        <option value="00">2000</option>
        <option value="01">2001</option>
        <option value="02">2002</option>
        <option value="03">2003</option>
        <option value="04">2004</option>
        <option value="05">2005</option>
        <option value="06">2006</option>
        <option value="07">2007</option>
        <option value="08">2008</option>
        <option value="09">2009</option>
        <option value="10">2010</option>
        <option value="11">2011</option>
        <option value="12">2012</option>
        <option value="13">2013</option>
        <option value="14">2014</option>
        <option value="15">2015</option>
        <option value="16">2016</option>
        <option value="17">2017</option>
        <option value="18">2018</option>
        <option value="19">2019</option>
        <option value="20">2020</option>
        <option value="21">2021</option>
        <option value="22">2022</option>
      </select>
      {/* <div>
        <button class="btn" onClick={handleSubmit}>
          Go
        </button>
      </div> */}
    </div>
  );
};

export default Selection;
