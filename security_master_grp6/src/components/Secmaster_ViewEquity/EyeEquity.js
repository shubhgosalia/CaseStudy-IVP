import React, { useState } from "react";

const EquityPopup = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Equity Summary",
    "Equity Identifier",
    "Equity Details",
    "Risk",
    "Regulatory Details",
    "Reference Data",
    "Pricing Details",
    "Dividend History",
  ];

  const tabContent = [
    {
      data: [
        { label: "Equity Name", value: `${item.security_name}` },
        { label: "Equity Description", value: `${item.security_desc}` },
        { label: "Has Position", value: "None" },
        { label: "Is Active", value: "None" },
        { label: "Round Lot size", value: "None" },
        { label: "Bloomberg Unique Name", value: "None" },
      ],
    },
    {
      data: [
        { label: "CUSIP", value: "None" },
        { label: "ISIN", value: "None" },
        { label: "SEDOL", value: "None" },
        { label: "Bloomberg Ticker", value: "None" },
        { label: "Bloomberg Unique Id", value: "None" },
        { label: "Bloomberg Global Id", value: "None" },
        { label: "Bloomberg Ticker and Exchange", value: "None" },
      ],
    },

    {
      data: [
        { label: "Is ADR", value: "None" },
        { label: "ADR Underlying Ticker", value: "None" },
        { label: "ADR Underlying Currency", value: "None" },
        { label: "Shares Per ADR", value: "None" },
        { label: "IPO Date", value: "None" },
        { label: "Price Currency", value: `${item.curr}` },
        { label: "Settle Days", value: "None" },
        { label: "Shares Outstanding", value: `${item.tot_shares_out}` },
        { label: "Voting Rights Per Share", value: "None" },
      ],
    },
    {
      data: [
        { label: "20 Day Average", value: "None" },
        { label: "Beta", value: "None" },
        { label: "Short Interest", value: "None" },
        { label: "YTD Return", value: "None" },
        { label: "90 Day Price Volatility", value: "None" },
      ],
    },
    {
      data: [
        { label: "Form PF Asset Class", value: "None" },
        { label: "Form PF Country", value: "None" },
        { label: "Form PF Credit Rating", value: `${item.pf_rating}` },
        { label: "Form PF Currency", value: "None" },
        { label: "Form PF Instrument", value: "None" },
        { label: "Form PF Liquidity Profile", value: "None" },
        { label: "Form PF Maturity", value: "None" },
        { label: "Form PF NAICS Code", value: "None" },
        { label: "Form PF Region", value: "None" },
        { label: "Form PF Sector", value: "None" },
        { label: "Form PF Sub Asset Class", value: "None" },
      ],
    },

    {
      data: [
        { label: "Issue Country", value: "None" },
        { label: "Exchange", value: "None" },
        { label: "Issuer", value: "None" },
        { label: "Issue Currency", value: "None" },
        { label: "Trading Currency", value: "None" },
        { label: "Bloomberg Industry Sub Group", value: "None" },
        { label: "Bloomberg Industry Group", value: "None" },
        { label: "Bloomberg Industry Sector", value: "None" },
        { label: "Country of Incorporation", value: "None" },
        { label: "Risk Currency", value: "None" },
      ],
    },

    {
      data: [
        { label: "Open Price", value: `${item.open_price}` },
        { label: "Close Price", value: `${item.close_price}` },
        { label: "Volume", value: "None" },
        { label: "Last Price", value: "None" },
        { label: "Ask Price", value: "None" },
        { label: "Bid Price", value: "None" },
        { label: "PE Ratio", value: "None" },
      ],
    },

    {
      data: [
        { label: "Declared Date", value: `${item.div_date}` },
        { label: "Ex Date", value: "None" },
        { label: "Record Date", value: "None" },
        { label: "Pay Date", value: "None" },
        { label: "Amount", value: "None" },
        { label: "Frequency", value: "None" },
        { label: "Dividend Type", value: "None" },
      ],
    },
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
              <table className="w-full">
                <tbody>
                  {tab.data.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={`${
                        itemIndex % 2 === 0 ? "bg-gray-100" : ""
                      } border-b`}
                    >
                      <td className="px-4 py-2 font-semibold w-1/3 text-gray-700">
                        {item.label}
                      </td>
                      <td className="px-4 py-2 w-2/3">{item.value}</td>
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
