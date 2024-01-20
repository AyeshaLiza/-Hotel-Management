import React from 'react';

const RoomSummary = ({my_modal_5, changedDate, summary, handleConfirm}) => {

  return (
    <div>
  <dialog id={my_modal_5} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
              <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                {
                  summary && <>

                    <h1>Your Room: {summary?.roomTitle}</h1>
                    <h1>Date: {changedDate}</h1>

                    <h3 className="font-bold text-lg">{summary?.price}</h3>
                    <p className="py-4">{summary?.roomDetail}</p>

                  </>
                }
                <div className="modal-action">
                  <form method="dialog" className="">
                    <button onClick={handleConfirm} className="btn">Comfirm Booking</button>
                  </form>
                </div>

              </div>
            </dialog>      
    </div>
  );
};

export default RoomSummary;