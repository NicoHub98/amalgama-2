import { useEffect } from "react";
import useBooksUsersStore from "./store";
import booksJson from "./utils/books.json";
import usersJson from "./utils/users.json";

function App() {
  // Get the books and users from the store
  const { books, setBooks, users, setUsers } = useBooksUsersStore();

  useEffect(() => {
    // Check if books and users are empty
    // If they are, call the api to set them (in this case, with the json object)
    if (books.length === 0 && users.length === 0) {
      setBooks(booksJson);
      setUsers(usersJson);
    }
  }, []);

  return (
    <div>
      <h1>Amalgama - Ejercicio 2</h1>

      <h2 style={{ borderTop: "1px solid black" }}>Libros</h2>
      {books.response && books.response.length > 0 ? (
        books.response.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author.name}</p>
          </div>
        ))
      ) : (
        <p>No hay libros</p>
      )}

      <h2 style={{ borderTop: "1px solid black" }}>Usuarios</h2>
      {users.response && users.response.length > 0 ? (
        users.response.map((user) => (
          <div key={user.id}>
            <h3>{user.nickname}</h3>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios</p>
      )}
    </div>
  );
}

export default App;
