import React from 'react';
const EquityTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-20" style={{marginTop:200}}>
      
<form className='mb-10'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>

            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Edit</button>
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Delete</button>
                </td>

            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Edit</button>
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Delete</button>
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Edit</button>
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Delete</button>
                </td>

            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Edit</button>
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Delete</button>
                </td>

            </tr>
           
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Edit</button>
                </td>
                <td className="py-4">
                <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  );
}

export default EquityTable;
