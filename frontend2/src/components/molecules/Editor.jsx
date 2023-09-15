import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor({ introduction, onChange, isModifying }) {
  return (
    <div data-color-mode="light">
      {isModifying ? (
        <MDEditor
          className="min-h-[290px]"
          value={introduction || ""}
          onChange={onChange}
          height={240}
        />
      ) : (
        <MDEditor.Markdown
          className="p-4 min-h-[290px] border rounded-sm"
          source={introduction}
          style={{ whiteSpace: "pre-wrap" }}
        />
      )}
    </div>
  );
}
