import React, { useState } from "react";

function TableRow({ participant }) {
    const [hoverCardVisible, setHoverCardVisible] = useState(false);
    const [hoverCardArcadeVisible, setHoverCardArcadeVisible] = useState(false); // New state for arcade games hover card

    return (
        <tr 
            className="border border-b-slate-200 odd:bg-white even:bg-gray-50 relative"
        >
            <td className="Student_Name p-3 uppercase">
                {participant["User Name"]}
                {participant["All Skill Badges & Games Completed"] === "Yes" ? '🏅' : ''}
            </td>

            <td className="Redemption_Status p-3 relative">
                <div
                    className={`w-fit m-auto rounded-3xl px-4 py-1 text-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg ${participant["Access Code Redemption Status"] === "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["Access Code Redemption Status"] === "Yes" ? "Done" : "Pending"}
                </div>
            </td>

            <td className="Institution mob:hidden relative p-3">
                <div
                    className={`m-auto w-fit rounded-3xl px-2 py-1 text-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg ${participant["All Skill Badges & Games Completed"] === "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-blue-200 text-blue-600"
                        }`}
                >
                    <a href={participant["Google Cloud Skills Boost Profile URL"]} target="_blank" rel="noreferrer">
                        Public Profile
                    </a>
                </div>
            </td>

            <td className="Completions_both_Pathways_relative p-3 text-center">
                <div
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg ${participant["All Skill Badges & Games Completed"] === "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["All Skill Badges & Games Completed"] === "Yes"
                        ? "Yes"
                        : "No !"}
                </div>
            </td>

            <td className="p-3 text-center relative"
             onMouseEnter={() => setHoverCardVisible(true)}
             onMouseLeave={() => setHoverCardVisible(false)}>
                <div 
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                        participant["# of Skill Badges Completed"] >= 15
                        ? "bg-green-200 text-green-600"
                        : participant["# of Skill Badges Completed"] >= 10
                        ? "bg-blue-200 text-blue-600"
                        : participant["# of Skill Badges Completed"] >= 2
                        ? "bg-yellow-200 text-yellow-600"
                        : "bg-red-200 text-red-600"
                    }`}
                >
                    {participant["# of Skill Badges Completed"]}

                    {/* Hover card for displaying Skill Badge names */}
                    {hoverCardVisible && (
                        <div 
                            className="absolute text-green-500 left-1/2 z-0 transform -translate-x-1/2 -translate-y-full w-80 px-4 py-2 min-h-24 p-4 rounded-lg flex flex-col justify-center items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200 transition-opacity duration-300 ease-in-out gap-5"
                            style={{ top: "-10px" }} // Adjust this value to move the card further above the row
                        >
                            {participant["Names of Completed Skill Badges"] ? (
                                <p className="text-blue-800 text-sm text-center p-4">
                                    {participant["Names of Completed Skill Badges"]}
                                </p>
                            ) : (
                                <p className="text-blue-800 text-sm text-center">
                                    No Skill Badges Completed
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </td>

            <td className="# of Arcade Games Completed mob:hidden p-3 text-center relative"
                onMouseEnter={() => setHoverCardArcadeVisible(true)} // Show arcade hover card on mouse enter
                onMouseLeave={() => setHoverCardArcadeVisible(false)} // Hide arcade hover card on mouse leave
            >
                <div 
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg ${
                        participant["# of Arcade Games Completed"] === 3
                        ? "bg-green-200 text-green-600"
                        : participant["# of Arcade Games Completed"] === 2
                        ? "bg-blue-200 text-blue-600"
                        : participant["# of Arcade Games Completed"] === 1
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["# of Arcade Games Completed"]}
                    
                    {/* Hover card for displaying Arcade Game names */}
                    {hoverCardArcadeVisible && (
                        <div 
                            className="# of Arcade Games Completed absolute text-green-500 left-1/2 z-0 transform -translate-x-1/2 -translate-y-full w-60 h-24 p-4 rounded-lg flex flex-col justify-center items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200 transition-opacity duration-300 ease-in-out"
                            style={{ top: "-10px" }} // Adjust this value to move the card further above the row
                        >
                            {participant["Names of Completed Arcade Games"] ? (
                                <p className="Names of Completed Arcade Games text-blue-800 text-sm text-center">
                                    {participant["Names of Completed Arcade Games"]}
                                </p>
                            ) : (
                                <p className="Names of Completed Arcade Games text-blue-800 text-sm text-center">
                                    No Arcade Games Completed
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </td>

            <td className="Arcade Game Completion mob:hidden p-3 text-center">
                <div
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg ${participant["# of Arcade Games Completed"] === 1
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["# of Arcade Games Completed"] === 1 
                        ? "Completed"
                        : "Not Completed"}
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
