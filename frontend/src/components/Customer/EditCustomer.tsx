import React, { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../../contexts/Customer/CustomerContext'
import { CustomerContextType } from '../../contexts/Customer/CustomerContextType'
import { useForm } from 'react-hook-form'
import { useParams, useHistory, Link } from 'react-router-dom'

interface EditCustomerForm {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

interface EditCustomerParams {
  id: string
}
export const EditCustomer: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<EditCustomerForm>({
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: '',
  })

  const { editCustomer, customers } = useContext<CustomerContextType>(
    CustomerContext
  )

  const { register, handleSubmit, errors } = useForm<EditCustomerForm>()

  const { id } = useParams<EditCustomerParams>()
  let history = useHistory()

  useEffect(() => {
    const customer = customers.find(
      c => c.id === parseInt(id)
    ) as EditCustomerForm
    setSelectedCustomer(customer)
  }, [])

  const onSubmit = (data: EditCustomerForm, e: any) => {
    e.preventDefault()
    editCustomer(parseInt(id), data)
    history.push('/customers')
  }
  const handleOnChange = (userKey: string, value: string) => {
    setSelectedCustomer({ ...selectedCustomer, [userKey]: value })
  }

  return (
    <form onSubmit={handleSubmit<EditCustomerForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="number"
            name="id"
            // disabled
            value={selectedCustomer.id}
            onChange={e => handleOnChange('id', e.target.value)}
            ref={register}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="nome"
            placeholder="Informe o nome"
            value={selectedCustomer.nome}
            onChange={e => handleOnChange('nome', e.target.value)}
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
            value={selectedCustomer.cpf}
            onChange={e => handleOnChange('cpf', e.target.value)}
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
            value={selectedCustomer.dataNascimento}
            onChange={e => handleOnChange('dataNascimento', e.target.value)}
            ref={register}
          />
          {errors.dataNascimento && <span>Campo obrigatório</span>}
        </div>

        <div className="uk-margin">
          <button className="uk-button uk-button-primary uk-margin-small-right">
            Salvar
          </button>
          <Link to="/customers">
            <button type="button" className="uk-button uk-button-default">
              Cancelar
            </button>
          </Link>{' '}
        </div>
      </fieldset>
    </form>
  )
}
