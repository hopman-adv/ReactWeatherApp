import useSWR from "swr";
import Day from "./Day";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Month() {
  //const { data, error } = useSWR("http://0.0.0.0:3001/temp", fetcher);
  const { data, error } = useSWR("https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=270&lat=50.05963&lon=14.44646", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const allDays = data.properties.timeseries.map((day) => {
    return day.time.substring(0, 10);
  });

  const weekDays = [...new Set(allDays)];

  return (
    <>
      <ul>
        {weekDays.map((day, index) => (
          <Day key={index} date={weekDays[index]} data={data} />
        ))}
      </ul>
    </>
  );
}
