import React, { useState,useEffect } from "react";
// import { tableData } from "../../data";
import EquityRow from "./EquityRow";
import axios from "axios";

const EquityTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;

  const[equity,setEquity]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:53388/api/values`).then(response=>{
            console.log(response)
            setEquity(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])


  const pageCount = Math.ceil(
    equity.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.Security_Name.toLowerCase().includes(search) ||
        item.Security_Description.toLowerCase().includes(search) ||
        item.Pricing_Currency.toLowerCase().includes(search) ||
        item.Total_Shares_Outstanding.toLowerCase().includes(search) ||
        item.Open_Price.toLowerCase().includes(search) ||
        item.Close_Price.toLowerCase().includes(search) ||
        item.Dividend_Declared_Date.toLowerCase().includes(search) ||
        item.PF_Credit_Rating.toLowerCase().includes(search);
    }).length / recordsPerPage
  );

  const numbers = [...Array(pageCount).keys()].slice(0);

  const prevPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-20 mr-20 mb-5">
      <form className="mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by any field..."
            required
          />
        </div>
      </form>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Equity Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Pricing Currency
            </th>
            <th scope="col" className="px-6 py-3">
              Total Shares Outstanding
            </th>
            <th scope="col" className="px-6 py-3">
              Open Price
            </th>
            <th scope="col" className="px-6 py-3">
              Close Price
            </th>
            <th scope="col" className="px-6 py-3">
              Dividend Date
            </th>
            <th scope="col" className="px-6 py-3">
              PF Credit Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              View
            </th>
          </tr>
        </thead>

        <tbody>
          {equity
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.Security_Name.toLowerCase().includes(search) ||
                    item.Security_Description.toLowerCase().includes(search) ||
                    item.Pricing_Currency.toLowerCase().includes(search) ||
                    item.Total_Shares_Outstanding.toLowerCase().includes(search) ||
                    item.Open_Price.toLowerCase().includes(search) ||
                    item.Close_Price.toLowerCase().includes(search) ||
                    item.Dividend_Declared_Date.toLowerCase().includes(search) ||
                    item.PF_Credit_Rating.toLowerCase().includes(search);
            })
            .slice(lastIndex, lastIndex + recordsPerPage)
            .map((item, i) => (
              <EquityRow item={item} i={i} />
            ))}
        </tbody>
      </table>

      <nav className="mt-5 mb-5" aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-md">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prevPage}
            >
              Prev
            </a>
          </li>

          {numbers.map((n, i) => (
            <li key={i}>
              <a
                href="#"
                className={` ${
                  currentPage === n ? "text-blue-800 bg-blue-200" : ""
                } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => changeCurrPage(n)}
              >
                {n}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EquityTable;
