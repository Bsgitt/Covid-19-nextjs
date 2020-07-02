import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
export default ({ data, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ResponsiveContainer width='100%' height={500}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey='date' />
          <YAxis />
          <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
          <Line type='monotone' dataKey='confirmed' stroke='#3445dd' />
          <Line type='monotone' dataKey='deaths' stroke='#ff3405' />
          <Line type='monotone' dataKey='recovered' stroke='#23dd43' />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
