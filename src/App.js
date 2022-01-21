import "./App.css";
import Bau from "./assets/bau.png";
import Ca from "./assets/ca.png";
import Cua from "./assets/cua.png";
import Ga from "./assets/ga.png";
import Huou from "./assets/huou.png";
import Tom from "./assets/tom.png";
import BatDia from "./assets/batdia.png";
import { useEffect, useState } from "react";

const dataDefault = [
  {
    img: Bau,
  },
  {
    img: Bau,
  },
  {
    img: Bau,
  },
  {
    img: Ca,
  },
  {
    img: Ca,
  },
  {
    img: Ca,
  },
  {
    img: Cua,
  },
  {
    img: Cua,
  },
  {
    img: Cua,
  },
  {
    img: Ga,
  },
  {
    img: Ga,
  },
  {
    img: Ga,
  },
  {
    img: Huou,
  },
  {
    img: Huou,
  },
  {
    img: Huou,
  },
  {
    img: Tom,
  },
  {
    img: Tom,
  },
  {
    img: Tom,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [lax, setLax] = useState(false);
  const [open, setOpen] = useState(false);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleOnClick = () => {
    if (open) {
      let dt = [];
      const dataShuffle = shuffle(dataDefault);
      for (let i = 0; i <= 2; i++) {
        dt.push(dataShuffle[i]);
      }
      setData(dt);
      setOpen(false);
    }
  };

  useEffect(() => {
    let dt = [];
    const dataShuffle = shuffle(dataDefault);
    for (let i = 0; i <= 2; i++) {
      dt.push(dataShuffle[i]);
    }
    setData(dt);
  }, []);

  const handleLax = () => {
    setLax(true);
    setTimeout(() => {
      setLax(false);
      setOpen(true);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="container">
        {data &&
          data?.map((item, index) => (
            <img
              className="item-container"
              key={index}
              alt="img"
              src={item.img}
            />
          ))}
      </div>
      <div className="button" onClick={handleLax}>
        Lắc
      </div>
      <div className={`bat ${lax ? "lux" : ""}`} onClick={handleOnClick}>
        <img src={BatDia} alt="bat" />
      </div>
    </div>
  );
}

export default App;
