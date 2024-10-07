import React from "react";

function TableRow({ participant }) {
    // console.log(participant)
    return (
        <tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
            <td className="Student_Name p-3 uppercase">{participant["User Name"]}
            {participant["All Skill Badges & Games Completed"] == "Yes"?'🏅':''}
            </td>

            {/* <td className="Student_Email p-3">{participant["Student Email"]}</td> */}

            <td className="Redemption_Status p-3 relative">
                <div
                    className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${participant["Access Code Redemption Status"] == "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["Access Code Redemption Status"] == "Yes" ? "Done" : "Pending"}
                </div>
            </td>

            <td className="Institution mob:hidden relative p-3">
                <div
                    className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${participant["All Skill Badges & Games Completed"] ==
                        "Yes"
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
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${participant["All Skill Badges & Games Completed"] == "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["All Skill Badges & Games Completed"] == "Yes"
                        ? "Yes"
                        : "No !"}
                </div>
            </td>

            <td className="# of Skill Badges Completed mob:hidden p-3 text-center">
                <div 
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
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
                </div>

            </td>

            <td className="# of Arcade Games Completed mob:hidden p-3 text-center">
                <div 
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
                        participant["# of Arcade Games Completed"] == 3
                        ? "bg-green-200 text-green-600"
                        : participant["# of Arcade Games Completed"] == 2
                        ? "bg-blue-200 text-blue-600"
                        : participant["# of Arcade Games Completed"] == 1
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["# of Arcade Games Completed"]}
                </div>

            </td>

            <td className="Arcade Game Completion mob:hidden p-3 text-center">
                <div
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${participant["# of Arcade Games Completed"] == 1
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                        }`}
                >
                    {participant["# of Arcade Games Completed"] == 1 
                        ? "Completed"
                        : "Not Completed"}
                </div>

            </td>



        </tr>
    );
}

export default TableRow;
