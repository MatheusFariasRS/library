import { useEffect, useState } from "react";

// Definições de tipos para os dados da API
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

const API_BASE = "https://library-dl32.onrender.com";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  // Buscar lista de livros
  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.content);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Buscar detalhes do livro selecionado
  const fetchBookDetails = (id: number) => {
    setLoading(true);
    fetch(`${API_BASE}/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Library Books</h1>
      {loading && <p>Loading...</p>}

      {!selectedBook && (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              onClick={() => fetchBookDetails(book.id)}
            >
              <strong>{book.title}</strong> -{" "}
              {book.genres.map((g) => g.name).join(", ")}
            </li>
          ))}
        </ul>
      )}

      {selectedBook && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "15px",
            maxWidth: "600px",
          }}
        >
          <button onClick={() => setSelectedBook(null)}>← Back to list</button>
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

export default App;
