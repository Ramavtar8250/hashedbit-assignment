import React, { useEffect, useState } from "react";

const IPLTable = () => {
  const [teams, setTeams] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();
        console.log(data);
        // Sort data by NRR (Net Run Rate)
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchTeamsData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">IPL 2022 Points Table</h1>

      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="">
            <th className="border border-gray-400 px-4 py-2">No</th>
            <th className="border border-gray-400 px-4 py-2">Team</th>
            <th className="border border-gray-400 px-4 py-2">Matches Played</th>
            <th className="border border-gray-400 px-4 py-2">Won</th>
            <th className="border border-gray-400 px-4 py-2">Losts</th>
            <th className="border border-gray-400 px-4 py-2">Tied</th>
            <th className="border border-gray-400 px-4 py-2">Points</th>
            <th className="border border-gray-400 px-4 py-2">NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ? (
            teams.map((team,i) => (
              <tr key={i}>
                <td className="border border-gray-400 px-4 py-2">
                  {team.No}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {team.Team}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {team.Matches}
                </td>
                <td className="border border-gray-400 px-4 py-2">{team.Won}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {team.Lost}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {team.Tied}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {team.Points}
                </td>
                <td className="border border-gray-400 px-4 py-2">{team.NRR}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="border border-gray-400 px-4 py-2 text-center"
              >
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IPLTable;
