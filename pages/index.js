import useSWR from "swr";
import fetch from "unfetch";
import DataTable from "react-data-table-component";
import columns from "../components/DataTableColumns";
import DataChart from "../components/DataChart";
import TimeSeriesCharts from "../components/TimeSeriesCharts";

const apiUrl = "https://api.covid19api.com/summary";
const fecther = (url) => fetch(url).then((r) => r.json());
const IndexPage = () => {
  const { data, error } = useSWR(apiUrl, fecther);
  const timeSeriesUrl = "https://pomber.github.io/covid19/timeseries.json";
  const { data: timeseries } = useSWR(timeSeriesUrl, fecther);

  if (!data) {
    return <h2>Not Found</h2>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className='container'>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap");
          * {
            font-family: "Patrick Hand", cursive;
          }
          .container {
            width: 820px;
            margin: 0 auto;
          }
          .title {
            text-align: center;
          }
        `}
      </style>
      <h2 className='title'>COVID-19 with Nextjs</h2>
      <DataTable
        title='COVID-19 Sammary'
        columns={columns}
        data={data.Countries}
        pagination={true}
      />
      <DataChart data={data.Countries} title='Summary' />
      <TimeSeriesCharts data={timeseries.Thailand} title='Thailand-Summary' />
      <TimeSeriesCharts data={timeseries.US} title='United State-Summary' />
      <TimeSeriesCharts data={timeseries.Italy} title='Italy-Summary' />
      <TimeSeriesCharts data={timeseries.Japan} title='Japan-Summary' />
      <TimeSeriesCharts data={timeseries.Australia} title='Australia-Summary' />
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
};
export default IndexPage;
