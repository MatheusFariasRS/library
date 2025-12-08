import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  description: string;
  genres: Genre[];
}

const API_URL = "https://library-dl32.onrender.com/books";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBooks(data.content || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(String(err));
      })
      .finally(() => setLoading(false));
  }, []);

  const fetchBookDetails = (id: number) => {
    setLoading(true);
    fetch(`https://library-dl32.onrender.com/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setSelectedBook(data))
      .catch((err) => {
        console.error("Fetch details error:", err);
        setError(String(err));
      })
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Library Books</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "salmon" }}>Error: {error}</p>}

      {!selectedBook && !loading && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((b) => (
            <li
              key={b.id}
              onClick={() => fetchBookDetails(b.id)}
              style={{
                cursor: "pointer",
                marginBottom: 8,
                border: "1px solid #ccc",
                padding: 8,
              }}
            >
              <strong>{b.title}</strong> —{" "}
              {b.genres.map((g) => g.name).join(", ")}
            </li>
          ))}
        </ul>
      )}

      {selectedBook && (
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setSelectedBook(null)}>← Back</button>
          <h2>{selectedBook.title}</h2>
          <p>{selectedBook.description}</p>
          <p>
            <strong>Genres:</strong>{" "}
            {selectedBook.genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
