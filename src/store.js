import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBooksUsersStore = create(
  persist(
    (set) => ({
      books: [],
      users: [],
      setBooks: (books) => set({ books }),
      setUsers: (users) => set({ users }),
    }),
    {
      name: "books-users",
    }
  )
);

export default useBooksUsersStore;
