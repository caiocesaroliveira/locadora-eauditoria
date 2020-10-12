import Consumer from '../../models/Consumer'

export interface ConsumerContextType {
  consumers: Consumer[]
  addConsumer(consumer: Consumer): void
  editConsumer(id: number, consumer: Consumer): void
  removeConsumer(consumer: Consumer): void
}
