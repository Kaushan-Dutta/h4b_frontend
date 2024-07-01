import React, { useCallback, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext";
import QRCode from "qrcode.react";

const SectionTable = ({ content, excludedColumns, additionalCols }) => {
  const getKeys = () => {
    if (!content || content.length === 0) return [];
    return Object.keys(content[0]);
  };

  const keys = getKeys();
  const filteredKeys = keys.filter((ele) => !excludedColumns?.includes(ele));

  const { auth } = useAuth();



  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {filteredKeys?.map((key, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {key}
              </th>
            ))}
            {additionalCols?.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {content?.map((item, id) => (
            <tr key={id} className="hover:bg-gray-100">
              {filteredKeys?.map((key, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {item[key]}
                </td>
              ))}
              {additionalCols?.map((col, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTable;
