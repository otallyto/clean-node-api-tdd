import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // @ts-expect-error
  uri: null as string,
  // @ts-expect-error
  client: null as MongoClient,
  async connect (url: string): Promise<any> {
    this.uri = url
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<any> {
    await this.client.close()
    this.client = null
  },
  async getColletion (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },
  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }

}
