import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      value={value}
      modules={modules}
      onChange={onChange}
      theme={"snow"}
    />
  );
}

export default Editor;
