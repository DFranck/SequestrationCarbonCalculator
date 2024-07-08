// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const SpeciesSequestrationBarChart = ({ chartData }) => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart
//         data={chartData}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="species" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar
//           dataKey="maxSequestration"
//           fill="#d0d0d0"
//           name="Potentiel de Séquestration Maximale"
//         />
//         {chartData.map((entry, index) => (
//           <Bar
//             key={`individual-bar-${index}`}
//             dataKey="totalSequestration"
//             fill="#82ca9d"
//             name="Séquestration Individuelle"
//           >
//             {entry.individual.map((data, subIndex) => (
//               <Cell key={`cell-${index}-${subIndex}`} fill="#82ca9d" />
//             ))}
//           </Bar>
//         ))}
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default SpeciesSequestrationBarChart;
