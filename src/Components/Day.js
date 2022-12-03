import { getDay, getMonth, getYear, getTime } from "../Utilities/convert-utils";
import Temperature from "./Temperature";
import TemperatureTable from "./TemperatureList";

export default function Day(props) {
  const { date, data, timeTemp, ...rest } = props;
  const timeseries = data.properties.timeseries;
  
  //console.log(timeTemp);
  console.log(date);

  const dayTemperatures = timeTemp.filter(day => {
    return day[0] === date;
  });

  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);

  const onlyTemperatures = dayTemperatures.map(i => i[2]);
  const minTemp = Math.min(...onlyTemperatures);
  const maxTemp = Math.max(...onlyTemperatures);

  return (
    <>
      <div className="flex-h2">
        <div className="container-basic-info">
          <h2>
            {day}.{month}.{year}
          </h2>
          <div>
            <h3>
              Min <b>{minTemp}</b>º C.
            </h3>
            <h3>
              Max <b>{maxTemp}</b>º C.
            </h3>
          </div>
        </div>
        <TemperatureTable dayTemperatures={dayTemperatures} day={day+"."+month+"."+year} />
      </div>
    </>
  );
}
