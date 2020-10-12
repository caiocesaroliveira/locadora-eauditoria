import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import AppContextType from '../../contexts/AppContextType'
import { useForm } from 'react-hook-form'

interface AddClienteForm {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

const AddCliente: React.FC = () => {
  const { addCliente } = useContext<AppContextType>(AppContext)
  const { register, handleSubmit, errors } = useForm<AddClienteForm>()

  const onSubmit = (data: AddClienteForm, e: any) => {
    addCliente(data)
    e.target.reset()
    window.location.href = '/clientes'
  }

  return (
    <form onSubmit={handleSubmit<AddClienteForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="nome"
            placeholder="Informe o nome"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="cpf"
            placeholder="Informe o cpf"
            ref={register}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="date"
            name="dataNascimento"
            placeholder="Informe a data de nascimento"
            ref={register}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>

        <button className="uk-button uk-button-primary">Salvar</button>
      </fieldset>
    </form>
  )
}
export default AddCliente
