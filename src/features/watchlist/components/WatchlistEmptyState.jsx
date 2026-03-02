import React from 'react'

function WatchlistEmptyState() {
  return (
    <div className="flex justify-center items-center mt-[20rem]">
          {" "}
          <p className="text-3xl text-center text-red-600 font-bold shadow-2xl">
            {" "}
            No Movies are added to the WatchList
          </p>{" "}
        </div>
  )
}

export default WatchlistEmptyState
