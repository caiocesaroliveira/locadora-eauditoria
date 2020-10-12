import React, { useContext } from 'react'
import { ClienteContext } from '../../contexts/Cliente/ClienteContext'
import { ClienteContextType } from '../../contexts/Cliente/ClienteContextType'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

interface AddClienteForm {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

export const AddCliente: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<AddClienteForm>()
  const { addCliente } = useContext<ClienteContextType>(ClienteContext)
  let history = useHistory()

  const onSubmit = (newCliente: AddClienteForm, e: any) => {
    addCliente(newCliente)
    history.push('/clientes')
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
