import { Sub } from "../types";

//Le decimos de que tipo son las Props
//Props tiene un subs de tipo array que posee los objetos que vemos ahi adentro

interface Props {
  subs: Array<Sub>;
}
//Le decimos a List que es un comoponente de React ya que no soporta todos los parametros en Typescript
const List: React.FunctionComponent<Props> = ({ subs }) => {
  return (
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
  );
};

export default List;
