import React from "react";
import { Link } from "react-router-dom";

export const IplTeam = () => {
  var teams = [
    { id: 1, name: "Chennai Super Kings" },
    { id: 2, name: "Mumbai Indians" },
    { id: 3, name: "Royal Challengers Bengaluru" },
    { id: 4, name: "Rajasthan Royals" },
    { id: 5, name: "Lucknow Super Giants" },
    { id: 6, name: "Gujarat Titans" },
    { id: 7, name: "Sunrisers Hyderabad" },
    { id: 8, name: "Delhi Capitals" },
    { id: 9, name: "Kolkata Knight Riders" },
    { id: 10, name: "Punjab Kings" },
  ];

  const teamColors = {
    1: "#F9CD05",   // CSK - Yellow
    2: "#004BA0",   // MI - Blue
    3: "#D71920",   // RCB - Red
    4: "#EA1A85",   // RR - Pink
    5: "#00AEEF",   // LSG - Light Blue
    6: "#1C1C3C",   // GT - Dark Navy
    7: "#F15A22",   // SRH - Orange
    8: "#17479E",   // DC - Blue
    9: "#3A225D",   // KKR - Purple
    10: "#D71920",  // PBKS - Red
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="iplid">Id</th>
            <th>Team Name</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((t) => (
            <tr
              key={t.id}
              style={{
                backgroundColor: teamColors[t.id],
                color: "white",
                fontWeight: "bold",
                margin:"50px"
              }}
            >
              <td>{t.id}</td>
              <td>
                <Link
                  to={`/ipldetails/${t.name}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {t.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
