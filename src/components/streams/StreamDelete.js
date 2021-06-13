import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button ">Cancel</button>
    </>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
