// const ItemActivity = () => {
//   const activities = [
//     { event: "List", price: "10.4209 POL", from: "SailorJJJ", date: "2m ago" },
//     { event: "List Expired", price: "10.4296 POL", from: "SailorJJJ", date: "17m ago" },
//     { event: "List", price: "10.4631 POL", from: "SailorJJJ", date: "32m ago" },
//     { event: "List Expired", price: "10.495 POL", from: "SailorJJJ", date: "47m ago" },
//     { event: "List Expired", price: "10.5263 POL", from: "SailorJJJ", date: "1h ago" },
//     { event: "List", price: "10.557 POL", from: "SailorJJJ", date: "1h ago" },
//   ];

//   return (
//     <div className="col-span-2 w-full overflow-hidden border border-zinc-700 rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4 mt-4">Item Activity</h2>
//       <div className="w-full overflow-x-hidden">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b border-gray-700">
//               <th className="p-3">Event</th>
//               <th className="p-3">Price</th>
//               <th className="p-3">From</th>
//               <th className="p-3">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {activities.map((activity, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-800 hover:bg-gray-900"
//               >
//                 <td className="p-3">{activity.event}</td>
//                 <td className="p-3 font-semibold">{activity.price}</td>
//                 <td className="p-3 text-blue-400">{activity.from}</td>
//                 <td className="p-3">{activity.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ItemActivity;

import { useState } from "react";

const ItemActivity = () => {
  const [activeTab, setActiveTab] = useState("activity"); // Default tab is activity

  const activities = [
    { event: "List", price: "10.4209 POL", from: "SailorJJJ", date: "2m ago" },
    {
      event: "List Expired",
      price: "10.4296 POL",
      from: "SailorJJJ",
      date: "17m ago",
    },
    { event: "List", price: "10.4631 POL", from: "SailorJJJ", date: "32m ago" },
    {
      event: "List Expired",
      price: "10.495 POL",
      from: "SailorJJJ",
      date: "47m ago",
    },
    {
      event: "List Expired",
      price: "10.5263 POL",
      from: "SailorJJJ",
      date: "1h ago",
    },
    { event: "List", price: "10.557 POL", from: "SailorJJJ", date: "1h ago" },
  ];

  const details = {
    contract_address: "0x1234567890abcdef",
    token_id: "1234567890",
    token_standard: "ERC-721",
    chain: "Ethereum",
    date_created: "Feb 14, 2023",
  };

  return (
    <div className="col-span-2 w-full overflow-hidden border border-zinc-700 rounded-lg">
      {/* Tab Navigation */}
      <div className="flex border-b border-zinc-700 mb-4">
        <button
          className={`p-3 font-semibold ${
            activeTab === "activity" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("activity")}
        >
          Item Activity
        </button>
        <button
          className={`p-3 font-semibold ${
            activeTab === "details" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "activity" && (
        <div className="w-full overflow-x-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-3">Event</th>
                <th className="p-3">Price</th>
                <th className="p-3">From</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-900"
                >
                  <td className="p-3">{activity.event}</td>
                  <td className="p-3 font-semibold">{activity.price}</td>
                  <td className="p-3 text-blue-400">{activity.from}</td>
                  <td className="p-3">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "details" && (
        <div className="p-10">
          <p className="mb-2 text-left">
            <strong>Contract Address:</strong>
            {details.contract_address}
          </p>
          <p className="mb-2 text-left">
            <strong>Token ID:</strong> {details.token_id}
          </p>
          <p className="mb-2 text-left">
            <strong>Token Standard:</strong> {details.token_standard}
          </p>
          <p className="mb-2 text-left">
            <strong>Chain:</strong> {details.chain}
          </p>
          <p className="text-left">
            <strong>Date Created:</strong> {details.date_created}
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemActivity;
