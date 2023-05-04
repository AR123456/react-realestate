import React from "react";
import { useSelector } from "react-redux";
const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h2>note</h2>
      <div className="note" style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7" : "#fff",
        color: note.isStaff ? "#fff" : "#000"
    }}></div>
    </div>
  );
};

export default NoteItem;
