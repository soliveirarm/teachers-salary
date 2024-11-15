import { Input } from "./Input"
import { Title } from "./Title"
import { SelectClass } from "./SelectClass"

import { RxPlusCircled } from "react-icons/rx"

export function AddClass({
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

const AddClassBtn = () => (
  <button className="flex center font-semibold gap-2 rounded py-2 px-8 transition hover:scale-105 bg-sky-500 text-white hover:ring-2 hover:text-sky-500 hover:ring-sky-500 hover:bg-slate-50">
    <RxPlusCircled size={28} />
    <span>Adicionar</span>
  </button>
)
