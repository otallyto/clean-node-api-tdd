import { MongoClient } from 'mongodb'

export class MongoHelper {
  client: MongoClient

  async connect (url: string): Promise<any> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  async disconnect (): Promise<any> {
    await this.client.close()
  }
}
