import React, { useContext } from 'react'
import { CustomerContext } from '../../contexts/Customer/CustomerContext'
import { CustomerContextType } from '../../contexts/Customer/CustomerContextType'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

interface AddCustomerForm {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

export const AddCustomer: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<AddCustomerForm>()
  const { addCustomer } = useContext<CustomerContextType>(CustomerContext)
  let history = useHistory()

  const onSubmit = (newCustomer: AddCustomerForm, e: any) => {
    addCustomer(newCustomer)
    history.push('/customers')
  }

  return (
    <form onSubmit={handleSubmit<AddCustomerForm>(onSubmit)}>
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
          {errors.cpf && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="date"
            name="dataNascimento"
            placeholder="Informe a data de nascimento"
            ref={register}
          />
          {errors.dataNascimento && <span>Campo obrigatório</span>}
        </div>
        <button className="uk-button uk-button-primary uk-margin-small-right">
          Salvar
        </button>
        <Link to="/customers">
          <button type="button" className="uk-button uk-button-default">
            Cancelar
          </button>
        </Link>{' '}
      </fieldset>
    </form>
  )
}
