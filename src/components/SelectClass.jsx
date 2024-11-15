import classes from "../data/classes.json"

export function SelectClass({ name, setName }) {
  return (
    <>
      <label htmlFor="cna-classes" className="input-label">
        Turma:
      </label>
      <select
        value={name}
        onChange={setName}
        className="select"
        name="cna-classes"
        id="cna-classes"
      >
        <option value="" default disabled>
          Selecionar
        </option>
        {classes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  )
}
