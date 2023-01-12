import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./components/context/Context";
import data from "./data/Data";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ForBasket from "./components/forbasket/ForBasket";
import Blogpage from "./pages/Blogpage";
import AboutUs from "./pages/AboutUs";
import closeIcon from "./components/imgs/closeIcon.jpg";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);
  const [maindata] = useState(data);
  const [order, setOrder] = useState(false);
  const [serachData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      setSearchData(searchInput);
    }
  }, [searchInput]);

  const handleBasket = () => {
    setOrder(!order);
  };

  const clearBasket = (e, id) => {
    e.stopPropagation();
    setBasket((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleInput = (e) => {
    e.stopPropagation();
    if (e.target.value === " ") {
      return;
    }
    setSearchInput(e.target.value);
  };

  const drawSearch = () => {
    setSearchData(
      maindata.filter((item) => {
        return (
          item.title === searchInput ||
          item.title.toLowerCase() === searchInput ||
          item.title.toUpperCase() === searchInput
        );
      })
    );
  };

  return (
    <Context.Provider
      value={{
        maindata,
        setBasket,
        basket,
        handleBasket,
        handleInput,
        drawSearch,
        serachData,
        clearBasket,
      }}
    >
      <div className="App">
        {order ? (
          <div className="basketPage">
            <img src={closeIcon} alt="closeIcon" onClick={handleBasket} />

            {basket.map((item) => {
              return <ForBasket key={item.id} {...item} />;
            })}
            <div className="total">
              Ընդհանուր{" "}
              {basket.reduce((prev, curr) => {
                prev += curr.price;
                return prev;
              }, 0)}{" "}
              դր
              <button>Պատվիրել</button>
            </div>
          </div>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/blog" element={<Blogpage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
