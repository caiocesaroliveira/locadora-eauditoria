import React, { useContext, useEffect, useState } from 'react'
import { ConsumerContext } from '../../contexts/Consumer/ConsumerContext'
import { ConsumerContextType } from '../../contexts/Consumer/ConsumerContextType'
import { useForm } from 'react-hook-form'
import { useParams, useHistory, Link } from 'react-router-dom'

interface EditConsumerForm {
  id: number
  name: string
  cpf: string
  birthdate: string
}

interface EditConsumerParams {
  id: string
}
export const EditConsumer: React.FC = () => {
  let history = useHistory()
  const { editConsumer, consumers } = useContext<ConsumerContextType>(
    ConsumerContext
  )
  const [selectedCliente, setSelectedCliente] = useState<EditConsumerForm>({
    id: 0,
    name: '',
    cpf: '',
    birthdate: '',
  })
  const { id } = useParams<EditConsumerParams>()

  useEffect(() => {
    const selCliente = consumers.find(
      c => c.id === parseInt(id)
    ) as EditConsumerForm
    setSelectedCliente(selCliente)
  }, [])

  const { register, handleSubmit, errors } = useForm<EditConsumerForm>()

  const onSubmit = (data: EditConsumerForm, e: any) => {
    e.preventDefault()
    editConsumer(parseInt(id), data)
    history.push('/clientes')
  }

  const handleOnChange = (userKey: string, value: string) => {
    setSelectedCliente({ ...selectedCliente, [userKey]: value })
  }

  return (
    <form onSubmit={handleSubmit<EditConsumerForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="number"
            name="id"
            // disabled
            value={selectedCliente.id}
            onChange={e => handleOnChange('id', e.target.value)}
            ref={register}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="name"
            placeholder="Informe o nome"
            value={selectedCliente.name}
            onChange={e => handleOnChange('nome', e.target.value)}
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.name && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="cpf"
            placeholder="Informe o cpf"
            value={selectedCliente.cpf}
            onChange={e => handleOnChange('cpf', e.target.value)}
            ref={register}
          />
          {errors.cpf && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="date"
            name="birthdate"
            placeholder="Informe a data de nascimento"
            value={selectedCliente.birthdate}
            onChange={e => handleOnChange('dataNascimento', e.target.value)}
            ref={register}
          />
          {errors.birthdate && <span>Campo obrigatório</span>}
        </div>

        <div className="uk-margin">
          <button className="uk-button uk-button-primary uk-margin-small-right">
            Salvar
          </button>
          <Link to="/clientes">
            <button type="button" className="uk-button uk-button-default">
              Cancelar
            </button>
          </Link>{' '}
        </div>
      </fieldset>
    </form>
  )
}
