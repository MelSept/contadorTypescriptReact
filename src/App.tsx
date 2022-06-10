import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

//contrato que debe tener un objeto
interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}
// un state puede tener varios estados, por lo que re comienda separlos ya que pueden ir cambiando y de esta
// forma solo sellecionamos el que queremos utilizar

interface AppState {
  subs: Array<Sub>;
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

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Mis Subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
