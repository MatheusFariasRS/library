import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  description: string;
  genres: Genre[] | null;
}

const API_BASE =
  import.meta.env.VITE_API_BASE ?? "https://library-dl32.onrender.com";
const BOOKS_URL = `${API_BASE}/books`;

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // inicializa true
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBooks() {
      setError(null); // ok chamar aqui
      try {
        const res = await fetch(BOOKS_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setBooks(Array.isArray(data?.content) ? data.content : []);
      } catch (err: any) {
        if (err.name === "AbortError") {
          // requisição abortada, sem tratar
        } else {
          console.error("Fetch error:", err);
          setError(err.message ?? String(err));
        }
      } finally {
        setLoading(false); // apenas aqui
      }
    }

    // chama a função async (a atualização de loading já não será uma mudança síncrona logo no efeito)
    loadBooks();

    return () => controller.abort();
  }, []);

  const fetchBookDetails = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/books/${id}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setSelectedBook(data);
    } catch (err: any) {
      console.error("Fetch details error:", err);
      setError(err.message ?? String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 900 }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 16 }}>Library Books</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "salmon" }}>Error: {error}</p>}

      {!selectedBook && !loading && (
        <>
          {books.length === 0 ? (
            <p>No books found.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {books.map((b) => (
                <li
                  key={b.id}
                  onClick={() => fetchBookDetails(b.id)}
                  style={{
                    cursor: "pointer",
                    marginBottom: 8,
                    border: "1px solid #ccc",
                    padding: 12,
                    borderRadius: 6,
                    background: "#fff",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{b.title}</div>
                  <div style={{ color: "#444", marginTop: 6 }}>
                    {b.genres && b.genres.length > 0
                      ? b.genres.map((g) => g.name).join(", ")
                      : "No genres"}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {selectedBook && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "#7e7a4aff",
          }}
        >
          <button
            onClick={() => setSelectedBook(null)}
            style={{ marginBottom: 12 }}
          >
            ← Back
          </button>
          <h2 style={{ marginTop: 0 }}>{selectedBook.title}</h2>
          <p>{selectedBook.description}</p>
          <p>
            <strong>Genres:</strong>{" "}
            {selectedBook.genres && selectedBook.genres.length > 0
              ? selectedBook.genres.map((g) => g.name).join(", ")
              : "No genres"}
          </p>
        </div>
      )}
    </div>
  );
}
