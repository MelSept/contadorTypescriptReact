import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub, SubsResponseFromApi } from "./types";

// useRef es un hook que guarda un valor sin renderizar
// un state puede tener varios estados, por lo que re comienda separlos ya que pueden ir cambiando y de esta
// forma solo seleccionamos el que queremos utilizar
//Este estado guarda una lista de Sub

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

// Los array en typescript son parametrizables
// en este ejemplo useState recibe el array de tipo subs
function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  //le pasamos lo que queremos guardar en divRef en este caso el HTMLdivElement
  const divRef = useRef<HTMLDivElement>(null);

  //como realizar un fecth de datos
  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch("http://localhost:3001/subs").then((res) => res.json());
    };

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        const {
          months: subMonths,
          profileUrl: avatar,
          nick,
          description,
        } = subFromApi;

        return {
          nick,
          description,
          avatar,
          subMonths,
        };
      });
    };

    //devuelve una promesa donde tenemos mapFromApiToSubs el cual recibe un parametro y le llega como argumento
    // a setSubs

    fetchSubs().then(mapFromApiToSubs).then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Mis Subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
