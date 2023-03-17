import React, { useRef, useEffect } from "react";
import styles from "./AutoExpandingTextArea.module.css";

export default function AutoExpandingTextArea({ className, ...props }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    autoResize();
  }, []);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto"; // Reset the height
    textarea.style.height = Math.max(textarea.scrollHeight, 150)+10 + "px"; // Set the new height based on scrollHeight
  };
  return (
    <React.Fragment>
      <textarea
        {...props}
        ref={textareaRef}
        className={`form-control ${styles["text-area"]} ${className}`}
        onInput={autoResize}
      />
    </React.Fragment>
  );
}
