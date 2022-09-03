import React, { useRef } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import "easymde/dist/easymde.min.css";
const Markdown = () => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <section style={{ margin: "0 auto", paddingInline: "200px" }}>
      <div style={{ paddingTop: "100px" }}>
        <SimpleMdeReact
          style={{ background: "aqua" }}
          value={value}
          onChange={setValue}
          options={options}
        />
      </div>
      <ReactMarkdown>{value}</ReactMarkdown>
    </section>
  );
};

export default Markdown;
