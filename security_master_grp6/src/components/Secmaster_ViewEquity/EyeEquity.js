import React, { useState } from "react";

const EquityPopup = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Tab 1",
    "Tab 2",
    "Tab 3",
    "Tab 4",
    "Tab 5",
    "Tab 6",
    "Tab 7",
    "Tab 8",
  ];

  const tabContent = [
    {
      data: [
        { label: "Field 1", value: "Value 1" },
        { label: "Field 2", value: "Value 2" },
        // ... add more fields and values
      ],
    },
    {
      data: [
        // ... add data for Tab 2
      ],
    },
    // ... add more tab content
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-200 overflow-x-auto">
        <div className="flex pb-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-semibold ${
                index === activeTab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          {tabContent.map((tab, index) => (
            <div
              key={index}
              className={`${activeTab === index ? "block" : "hidden"} mb-6`}
            >
              <h2 className="text-lg font-semibold mb-3">{tab.title}</h2>
              <table className="w-full">
                <tbody>
                  {tab.data.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={`${
                        itemIndex % 2 === 0 ? "bg-gray-100" : ""
                      } border-b`}
                    >
                      <td className="px-4 py-2 font-semibold text-gray-700">
                        {item.label}
                      </td>
                      <td className="px-4 py-2">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <button
          className="mt-6 mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EquityPopup;
