import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); // ⬅️ Go back to the previous page
  }

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handleBack} style={{ marginBottom: "1rem" }}>
        ← Back
      </button>
      <h2>Create New boulder</h2>
    </div>
  );
}
