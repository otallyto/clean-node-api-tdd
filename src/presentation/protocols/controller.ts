import { HttpRequest, HttpResponse } from './index'

export interface Controller {
  handler: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
