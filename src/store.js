import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBooksUsersStore;
