import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <>
      <div
        className="list"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.text.substring(0, 30)}
        </li>
        <div>
          <div style={{ display: "flex", lineHeight: "2.3" }}>
            <span
              className="pointer edit"
              onClick={() => props.onEdit(props.id)}
              role="img"
              aria-label="done"
            >
              <i className="fa fa-pencil editIcon" aria-hidden="true"></i>
              <button>Edit</button>
            </span>
            <span
              className="pointer"
              onClick={handleClick}
              role="img"
              aria-label="done"
            >
              <i className="fa fa-thumb-tack pinIcon" aria-hidden="true"></i>
              <button>Cancel</button>
            </span>
            <span
              className="pointer delete"
              onClick={() => props.onDelete(props.id)}
              role="img"
              aria-label="delete"
            >
              <i className="fa fa-trash deleteIcon" aria-hidden="true"></i>
              <button>Delete</button>
            </span>
          </div>
        </div>
      </div>
      {props.onShow && (
        <div>
          <input
            type="text"
            className="editTask"
            onChange={props.onEditChange}
          />
          <span
            className="saveTask pointer"
            onClick={() => props.onSave(props.id)}
            disabled={!props.checkSaveButton}
            role="img"
            aria-label="done"
          >
            ✅
          </span>
          <span
            className="cancelTask pointer"
            onClick={() => props.onCancel(props.id)}
            disabled={!props.checkSaveButton}
            role="img"
            aria-label="done"
          >
            ❌
          </span>
        </div>
      )}
    </>
  );
}

export default ToDoItem;
