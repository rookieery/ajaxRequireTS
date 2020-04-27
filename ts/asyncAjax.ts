import { Ajax as Ajax1 } from './promiseAjax';

namespace Ajax {
  export class AsyncAjax extends Ajax1.PromiseAjax {
    public static async getAsyncJSON(url: string, HTTPMethodType: string, headerMap: Map<string, string>) {
      const response = await this.getPromiseJSON(url, HTTPMethodType, headerMap);
      return response;
    }
  }
}