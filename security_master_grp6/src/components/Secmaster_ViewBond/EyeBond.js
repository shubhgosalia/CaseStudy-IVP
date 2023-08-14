import React, { useState } from "react";

const EyeBond = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Bond Summary",
    "Bond Identifier",
    "Bond Details",
    "Risk",
    "Regulatory Details",
    "Reference Data",
    "Put Schedule",
    "Pricing and Analytics",
    "Call Schedule"
  ];

  const tabContent = [
    {
      data: [
        { label: "Bond Name", value: `${item.Security_Name}` },
        { label: "Bond Description", value: `${item.Security_Description}` },
        { label: "Asset Type", value: `${item.Asset_Type}` },
        { label: "Investment Type", value: `${item.Investment_Type}`},
        { label: "Trading Factor", value:`${item.Trading_Factor}` },
        { label: "Pricing Factor", value: `${item.Pricing_Factor}` },

      ],
    },
    {
      data: [
        { label: "ISIN", value: `${item.ISIN}` },
        { label: "Bloomberg Ticker", value: `${item.BBG_Ticker}` },
        { label: "Bloomberg Unique Id", value: `${item.BBG_Unique_ID}` },
        { label: "CUSIP", value:`${item.CUSIP}`},
        { label: "SEDOL", value: `${item.SEDOL}` },
      ],
    },

    {
      data: [
        { label: "First Coupan Date", value: `${item.First_Coupon_Date}` },
        { label: "Coupan Cap", value: `${item.Cap}` },
        { label: "Coupan Floor", value: `${item.Floor}` },
        { label: "Coupan Frequency", value: `${item.Coupon_Frequency}` },
        { label: "Coupan Rate", value: `${item.Coupon}` },
        { label: "Coupan Type", value: `${item.Coupon_Type}` },
        { label: "Float Spread", value: `${item.Spread}` },
        { label: "Is Callable", value: `${item.Callable_Flag}`},
        { label: "Is Fix to Float", value: `${item.Fix_to_Float_Flag}` },
        { label: "Is Putable", value: `${item.Putable_Flag}` },
        { label: "Issue Date", value: `${item.Issue_Date}` },
        { label: "Last Reset Date", value: `${item.Last_Reset_Date}` },
        { label: "Maturity Date", value: `${item.Maturity}` },
        { label: "Maximum Call Notice Days", value: `${item.Call_Notification_Max_Days}` },
        { label: "Maximum Put Notice Days", value: `${item.Put_Notification_Max_Days}` },
        { label: "Penultimate Coupan Date", value: `${item.Penultimate_Coupon_Date}` },
        { label: "Reset Frequency", value: `${item.Reset_Frequency}` },
        { label: "Has Position", value: `${item.Has_Position}` },
      ],
    },
    {
      data: [
        { label: "Duration", value:  `${item.Macaulay_Duration}`  },
        { label: "Volatility 30D", value:  `${item.C30D_Volatility}` },
        { label: "Volatility 90D", value: `${item.C90D_Volatility}`  },
        { label: "Convexity", value:  `${item.Convexity}`  },
        { label: "Average Volume 30D", value: `${item.C30Day_Average_Volume}`  },
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
        { label: "Bloomberg Industry Group", value: `${item.Bloomberg_Industry_Group}` },
        { label: "Bloomberg Industry Sub Group", value: `${item.Bloomberg_Industry_Sub_Group}` },
        { label: "Bloomberg Sector", value: `${item.Bloomberg_Industry_Sector}` },
        { label: "Issue Country", value: `${item.Country_of_Issuance}` },
        { label: "Issue Currency", value: `${item.Issue_Currency}` },
        { label: "Issuer", value: `${item.Issuer}` },
        { label: "Risk Currency", value: `${item.Risk_Currency}` },
      ],
    },

    {
      data: [

        { label: "Put Date", value: `${item.Put_Date}` },
        { label: "Put Price", value: `${item.Put_Price}` },
      ],
    },

    {
      data: [
        { label: "Ask Price", value: `${item.Ask_Price}` },
        { label: "High Price", value: `${item.High_Price}` },
        { label: "Low Price", value: `${item.Low_Price}` },
        { label: "Open Price", value: `${item.Open_Price}` },
        { label: "Volume", value: `${item.Volume}` },
        { label: "Bid Price", value: `${item.Bid_Price}` },
        { label: "Last Price", value: `${item.Last_Price}` },
      ],
    },

    {
      data: [
        { label: "Call Date", value: `${item.Call_Date}` },
        { label: "Call Price", value: `${item.Call_Price}` },
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

export default EyeBond;
