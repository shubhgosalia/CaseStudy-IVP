import React, { useState } from "react";

const EyeEquity = ({ item, onClose }) => {
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
        { label: "Equity Name", value: `${item.Security_Name}` },
        { label: "Equity Description", value: `${item.Security_Description}` },
        { label: "Has Position", value: `${item.Has_Position}` },
        { label: "Is Active", value: `${item.Is_Active_Security}`},
        { label: "Round Lot size", value:`${item.Lot_Size}` },
        { label: "Bloomberg Unique Name", value: `${item.BBG_Unique_Name}` },
      ],
    },
    {
      data: [
        { label: "CUSIP", value:`${item.CUSIP}`},
        { label: "ISIN", value: `${item.ISIN}` },
        { label: "SEDOL", value: `${item.SEDOL}` },
        { label: "Bloomberg Ticker", value:`${item.Bloomberg_Ticker}` },
        { label: "Bloomberg Unique Id", value:`${item.Bloomberg_Unique_ID}` },
        { label: "Bloomberg Global Id", value: `${item.BBG_Global_ID}`},
        { label: "Bloomberg Ticker and Exchange", value:`${item.Ticker_and_Exchange}` },
      ],
    },

    {
      data: [
        { label: "Is ADR", value: `${item.Is_ADR_Flag}` },
        { label: "ADR Underlying Ticker", value: `${item.ADR_Underlying_Ticker}` },
        { label: "ADR Underlying Currency", value: `${item.ADR_Underlying_Currency}` },
        { label: "Shares Per ADR", value: `${item.Shares_Per_ADR}` },
        { label: "IPO Date", value: `${item.IPO_Date}` },
        { label: "Price Currency", value: `${item.Pricing_Currency}` },
        { label: "Settle Days", value: `${item.Settle_Days}` },
        { label: "Shares Outstanding", value: `${item.Settle_Days}`},
        { label: "Voting Rights Per Share", value: `${item.Voting_Rights_Per_Share}` },
      ],
    },
    {
      data: [
        { label: "20 Day Average", value:  `${item.Average_Volume___20D}`  },
        { label: "Beta", value:  `${item.Beta}` },
        { label: "Short Interest", value: `${item.Short_Interest}`  },
        { label: "YTD Return", value:  `${item.Return___YTD}`  },
        { label: "90 Day Price Volatility", value: `${item.Volatility___90D}`  },
      ],
    },
    {
      data: [
        { label: "Form PF Asset Class", value: `${item.PF_Asset_Class}` },
        { label: "Form PF Country", value: `${item.PF_Country}` },
        { label: "Form PF Credit Rating", value: `${item.PF_Credit_Rating}` },
        { label: "Form PF Currency", value:`${item.PF_Currency}`},
        { label: "Form PF Instrument", value:`${item.PF_Instrument}` },
        { label: "Form PF Liquidity Profile", value: `${item.PF_Liquidity_Profile}`},
        { label: "Form PF Maturity", value: `${item.PF_Maturity}` },
        { label: "Form PF NAICS Code", value: `${item.PF_NAICS_Code}` },
        { label: "Form PF Region", value: `${item.PF_Region}` },
        { label: "Form PF Sector", value: `${item.PF_Sector}` },
        { label: "Form PF Sub Asset Class", value: `${item.PF_Sub_Asset_Class}` },
      ],
    },

    {
      data: [
        { label: "Issue Country", value: `${item.Country_of_Issuance}` },
        { label: "Exchange", value: `${item.Exchange}` },
        { label: "Issuer", value: `${item.Issuer}` },
        { label: "Issue Currency", value: `${item.Issue_Currency}` },
        { label: "Trading Currency", value: `${item.Trading_Currency}` },
        { label: "Bloomberg Industry Sub Group", value: `${item.BBG_Industry_Sub_Group}` },
        { label: "Bloomberg Industry Group", value: `${item.Bloomberg_Industry_Group}` },
        { label: "Bloomberg Industry Sector", value: `${item.Bloomberg_Sector}`},
        { label: "Country of Incorporation", value: `${item.Country_of_Incorporation}` },
        { label: "Risk Currency", value: `${item.Risk_Currency}` },
      ],
    },

    {
      data: [
        { label: "Open Price", value: `${item.Open_Price}` },
        { label: "Close Price", value: `${item.Close_Price}` },
        { label: "Volume", value: `${item.Volume}` },
        { label: "Last Price", value: `${item.Last_Price}` },
        { label: "Ask Price", value: `${item.Ask_Price}` },
        { label: "Bid Price", value: `${item.Bid_Price}` },
        { label: "PE Ratio", value: `${item.PE_Ratio}` },
      ],
    },

    {
      data: [
        { label: "Declared Date", value: `${item.Dividend_Declared_Date}` },
        { label: "Ex Date", value: `${item.Dividend_Ex_Date}` },
        { label: "Record Date", value: `${item.Dividend_Record_Date}` },
        { label: "Pay Date", value: `${item.Dividend_Pay_Date}` },
        { label: "Amount", value: `${item.Dividend_Amount}`},
        { label: "Frequency", value:`${item.Frequency}`},
        { label: "Dividend Type", value:`${item.Dividend_Type}`},
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
        <div className="max-h-80 overflow-y-auto">
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

export default EyeEquity;
