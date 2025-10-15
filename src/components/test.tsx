import { useState } from "react";

export default function TestApi() {
  const [response, setResponse] = useState<string>("");

  async function handleClick() {
    try {
      const res = await fetch("/api/test.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Reiden" }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse("Erro: " + String(err));
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={handleClick}
        style={{ background: "#333", color: "white", padding: "0.5rem 1rem" }}
      >
        Testar API
      </button>

      {response && (
        <pre style={{ background: "#eee", padding: "1rem", marginTop: "1rem" }}>
          {response}
        </pre>
      )}
    </div>
  );
}
