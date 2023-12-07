import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContenxt = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("App contxt must be within appcontext providero");
  }

  return context;
};

const AppcontextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addToFav = (book) => {
    const oldFav = [...fav];

    const newFav = oldFav.concat(book);

    setFav(newFav);
  };

  const removeFromFav = (id) => {
    const oldFav = [...fav];
    const newFav = oldFav.filter((book) => book.rank !== id);

    setFav(newFav);
  };
  return (
    <AppContext.Provider value={{ fav, addToFav, removeFromFav }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppcontextProvider;
