import { useEffect, useState } from "react";
import "./App.css";

//contrato que debe tener un objeto
interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
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
  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Mis Subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
