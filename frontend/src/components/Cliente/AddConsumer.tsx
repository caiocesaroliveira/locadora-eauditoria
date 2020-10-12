import React, { useContext } from 'react'
import { ConsumerContext } from '../../contexts/Consumer/ConsumerContext'
import { ConsumerContextType } from '../../contexts/Consumer/ConsumerContextType'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

interface AddConsumerForm {
  id: number
  name: string
  cpf: string
  birthdate: string
}

export const AddConsumer: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<AddConsumerForm>()
  const { addConsumer } = useContext<ConsumerContextType>(ConsumerContext)
  let history = useHistory()

  const onSubmit = (newConsumer: AddConsumerForm, e: any) => {
    addConsumer(newConsumer)
    history.push('/consumers')
  }

  return (
    <form onSubmit={handleSubmit<AddConsumerForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="name"
            placeholder="Informe o nome"
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
            ref={register}
          />
          {errors.birthdate && <span>Campo obrigatório</span>}
        </div>

        <button className="uk-button uk-button-primary">Salvar</button>
      </fieldset>
    </form>
  )
}
