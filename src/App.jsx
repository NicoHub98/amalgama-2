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

    console.log(books);
    console.log(users);
  }, []);

  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("books-users")));
  // }, []);

  return <div>Amalgama - ejercicio 2</div>;
}

export default App;
