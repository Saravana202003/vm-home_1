
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jun",
    user: 150,
    company: 10,
    amt: 2400,
    visitors: 200,
  },
  {
    name: "jul",
    user: 300,
    company: 20,
    amt: 2400,
    visitors: 400,
  },
  {
    name: "aug",
    user: 725,
    company: 40,
    amt: 2400,
    visitors: 700,
  },
  {
    name: "sep",
    user: 1005,
    company: 60,
    amt: 2400,
    visitors: 1500,
  },      
  {
    name: "oct",
    user: 700,
    company: 85,
    amt: 2400,
    visitors: 2500,
  },
  {
    name: "nov",
    user: 2000,
    company: 115,
    amt: 2400,
    visitors: 4500,
  },
  {
    name: "dec",         
    user: 2500,
    company: 150,
    amt: 2400,
    visitors: 4000,
  },                                                                                                                                        
];

export default function Achart() {
  return (
    <ResponsiveContainer width="100%" height='60%' aspect={3}>      
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />                                                                    
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="user"
        stroke="#504ac6"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="visitors" stroke="#84d888" />
      <Line type="monotone" dataKey="company" stroke="#282740" />
    </LineChart>
    </ResponsiveContainer>
  );
}
