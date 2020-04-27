import { Ajax as AjaxPromise } from './promiseAjax';

export namespace Ajax {
  export class AsyncAjax extends AjaxPromise.PromiseAjax {
    public static async getAsyncJSON(url: string, HTTPMethodType: string, headerMap: Map<string, string>) {
      const response = await this.getPromiseJSON(url, HTTPMethodType, headerMap);
      return response;
    }
  }
}
