export default function TemperatureTable(props) {
  const { dayTemperatures, day, ...rest } = props;
console.log(dayTemperatures);
  const morn = dayTemperatures.filter((time, index) =>
    ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"].includes(time[1])
  );
  console.log(morn);
  const fore = dayTemperatures.filter((time, index) =>
    ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00"].includes(time[1])
  );
  const after = dayTemperatures.filter((time, index) =>
    ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].includes(time[1])
  );
  const night = dayTemperatures.filter((time, index) =>
    ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"].includes(time[1])
  );

  return (
    <>
      <div className="temperatures">
        <h3>Hodinové teploty</h3>
        <div className="all-temp-boxes">
          {morn.length > 0 && (
            <div>
              <p>Ráno</p>
              <ul className="temp-list">
                {morn.map((tmp, index) => (
                  <li key={index}>
                    {tmp[1]} - {tmp[2]}º C
                  </li>
                ))}
              </ul>
            </div>
          )}
          {fore.length > 0 && (
            <div>
              {<p>Dopoledne</p>}
              <ul className="temp-list">
                {fore.map((tmp, index) => (
                  <li key={index}>
                    {tmp[1]} - {tmp[2]}º C
                  </li>
                ))}
              </ul>
            </div>
          )}
          {after.length > 0 && (
            <div>
              <p>Odpoledne</p>
              <ul className="temp-list">
                {after.map((tmp, index) => (
                  <li key={index}>
                    {tmp[1]} - {tmp[2]}º C
                  </li>
                ))}
              </ul>
            </div>
          )}
          {night.length > 0 && (
            <div>
              {night.length > 0 && <p>Večer</p>}
              <ul className="temp-list">
                {night.map((tmp, index) => (
                  <li key={index}>
                    {tmp[1]} - {tmp[2]}º C
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
