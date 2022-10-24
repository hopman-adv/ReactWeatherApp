export default function Temperature (props) {
  const { hourData, ...rest } = props;

  if (!hourData) return <div>loading...</div>
  
  const time = hourData.time.substring(11, 16);
  const temp = hourData.data.instant.details.air_temperature;

  return <>
    <div><b>{time}</b> - teplota: <b>{temp}º C</b>.</div>
  </>;

}