import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // @ts-expect-error
  client: null as MongoClient,
  async connect (url: string): Promise<any> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<any> {
    await this.client.close()
  },
  getColletion (name: string): Collection {
    return this.client.db().collection(name)
  }
}
