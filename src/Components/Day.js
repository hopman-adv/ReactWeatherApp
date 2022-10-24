import { getDay, getMonth, getYear } from "../Utilities/convert-utils";
import Temperature from "./Temperature";

export default function Day(props) {
  const { date, data, ...rest } = props;
  const timeseries = data.properties.timeseries;

  const dayTimeseries = timeseries.filter((value) => {
    return value.time.substring(0, 10) === date;
  });

  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);

  const dayTemperatures = dayTimeseries.map(
    (value) => value.data.instant.details.air_temperature
  );
  const minTemp = Math.min(...dayTemperatures);
  const maxTemp = Math.max(...dayTemperatures);

  return (
    <>
      <h2>
        Den: {day}.{month}.{year}
      </h2>
      <h3>Průměrné teploty:</h3>
      <ul>
        <li>Minimální teplota: <b>{minTemp}</b>º C.</li>
        <li>Maximální teplota: <b>{maxTemp}</b>º C.</li>
      </ul>
      <h3>Hodinové teploty:</h3>
      <ul>
        {dayTimeseries.map((hour, index) => (
          <li key={index}>
            <Temperature hourData={dayTimeseries[index]} />
          </li>
        ))}
      </ul>
    </>
  );
}
