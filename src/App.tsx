import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

// useRef es un hook que guarda un valor sin renderizar
// un state puede tener varios estados, por lo que re comienda separlos ya que pueden ir cambiando y de esta
// forma solo seleccionamos el que queremos utilizar
//Este estado guarda una lista de Sub

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

// Estado inicial del array
const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];
// Los array en typescript son parametrizables
// en este ejemplo useState recibe el array de tipo subs
function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  //le pasamos lo que queremos guardar en divRef en este caso el HTMLdivElement
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Mis Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
