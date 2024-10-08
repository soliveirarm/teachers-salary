import Input from "./Input"
import Title from "./Title"
import AddClassBtn from "./AddClassBtn"
import SelectClass from "./SelectClass"

export default function AddClass({
  name,
  quantity,
  duration,
  setName,
  setQuantity,
  setDuration,
  handleSubmit,
}) {
  return (
    <div>
      <Title title="Adicionar aula" />

      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-4">
        <SelectClass name={name} setName={setName} />
        <Input
          label="Duração (min):"
          placeholder="Progression 2"
          id="class-duration"
          value={duration}
          onChange={setDuration}
        />
        <Input
          label="Quantidade de Aulas:"
          placeholder="5"
          id="class-quantity"
          value={quantity}
          onChange={setQuantity}
        />
        <AddClassBtn />
      </form>
    </div>
  )
}
