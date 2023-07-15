"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "feather-icons/dist/icons/x.svg";

const ReactModalAdapter = ({ show, onClose, children, title }: any) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return showModal ? (
    <>
      <div className="ReactModalAdapter fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
        <div className="w-full relative">
          <div className="h-[600px] overflow-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-xl">{title}</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => {
                  onClose();
                }}
              >
                <span className="text-black opacity-75 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                  <CloseIcon className="w-6 h-6" />
                </span>
              </button>
            </div>
            <div className="relative p-6 flex flex-wrap">{children}</div>
            {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b">
            <button
              className="text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div> */}
          </div>
        </div>
      </div>
      <div className="bg-black/50 fixed inset-0 z-20" onClick={onClose}></div>
    </>
  ) : null;
};

export default ReactModalAdapter;
