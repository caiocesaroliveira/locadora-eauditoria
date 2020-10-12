import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ConsumerContext } from '../../contexts/Consumer/ConsumerContext'
import { ConsumerContextType } from '../../contexts/Consumer/ConsumerContextType'
import Consumer from '../../models/Consumer'

interface ConsumerListItemProps {
  consumer: Consumer
}

export const ConsumerListItem: React.FC<ConsumerListItemProps> = ({
  consumer,
}) => {
  const { removeConsumer } = useContext<ConsumerContextType>(ConsumerContext)

  const onRemove = (cliente: Consumer) => {
    removeConsumer(cliente)
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">{consumer.id}</td>
      <td className="uk-width-auto">{consumer.name}</td>
      <td className="uk-width-auto">{consumer.cpf}</td>
      <td className="uk-width-auto">{consumer.birthdate}</td>
      <td className="uk-width-auto">
        <Link to={`/clientes/edit/${consumer.id}`}>
          <button
            className="uk-icon-button uk-button-primary uk-margin-small-right"
            uk-icon="file-edit"
          ></button>
        </Link>
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(consumer)}
        ></button>
      </td>
    </tr>
  )
}
