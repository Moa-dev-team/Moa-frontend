import React, { useRef, useEffect } from "react";
import styles from "./AutoExpandingTextArea.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the stylesheet

export default function AutoExpandingTextArea({ className, ...props }) {
  const quillRef = useRef(null);

  useEffect(() => {
    autoResize();
  }, []);

  const autoResize = () => {
    const quill = quillRef.current;
    if (!quill) return;
  
    const editor = quill.getEditor();
    const scrollHeight = editor.scroll.domNode.scrollHeight;
    const editorHeight = editor.root.offsetHeight;
  
    if (scrollHeight > editorHeight) {
      editor.root.style.height = Math.min(scrollHeight, 1000) + 10 + "px";

    } else if (editorHeight < 160) {
      editor.root.style.height = "150px";
    }
  };
  

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{"header" : 1}],
      [{"header" : 2}],
      [{ "list": "ordered" }, { "list": "bullet" }],
      [{ "indent": "-1" }, { "indent": "+1" }],
      [{ "color": [] }],
      ["link", "image"],
    ],
  };

  return (
    <React.Fragment>
      <ReactQuill
        {...props}
        ref={quillRef}
        className={`form-control ${styles["text-area"]} ${className}`}
        modules={modules}
        onChange={autoResize}
      />
    </React.Fragment>
  );
}
