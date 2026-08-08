import { Fragment, useEffect, useState } from "react";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { useSelector } from "react-redux";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* hide the search modal */
  const handleOpenEvent = (item) => {
    const link = `/event-details/${item?.eventTypeId}/${item?.eventId}`;
    setSearchText("");
    setData([]);
    navigate(link);
  };

  return (
    <Fragment>
      <div
        onClick={() => setShowSearch(false)}
        className="fixed h-screen z-40 bg-black/50 top-0 left-0 w-full bottom-0 right-0"
      />
      <div className=" fixed top-0 left-0 w-full bg-white px-3 py-3 flex items-center z-50 ">
        <svg
          onClick={() => setShowSearch(false)}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 256 256"
          className="w-4 h-4 mr-2 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z" />
        </svg>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search events..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 outline-none"
          defaultValue
        />
        <svg
          onClick={() => setSearchText("")}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="w-8 h-8 text-[grey]  cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
        </svg>
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="w-6 h-6 "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z" />
        </svg> */}
      </div>
      {data?.length > 0 && searchText?.length > 2 && (
        <div className=" fixed top-[56px] left-0 w-full bg-white z-40 h-[70vh] overflow-auto ">
          {data?.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => handleOpenEvent(item)}
                className="px-4 py-2 border-b border-gray-200 text-sm"
              >
                <div className="text-[#2789ce] font-medium">
                  {item?.openDate?.split(" ")[0]}
                </div>
                <div className="mt-1">
                  <span className="text-[#777] mr-2">
                    {" "}
                    {item?.openDate?.split(" ")[1]}
                  </span>
                  <span className="text-[#2789ce] text-[17px] font-bold">
                    {" "}
                    {item?.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Search;
