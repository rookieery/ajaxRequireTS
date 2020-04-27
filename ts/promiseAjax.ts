export namespace Ajax {
  export class PromiseAjax {
    public static getPromiseJSON(url: string, HTTPMethodType: string, headerMap: Map<string, string>) {
      const promise = new Promise(((resolve, reject) => {
        const handler = function () {
          if (this.status >= 200 && this.status <= 299) {
            resolve(this.response);
          } else if (this.status >= 300 && this.status <= 399) {
            reject(new Error(`${this.status} = Redirects!`));
          } else if (this.status >= 400 && this.status <= 499) {
            reject(new Error(`${this.status} = Client Error!`));
          } else if (this.status >= 500 && this.status <= 599) {
            reject(new Error(`${this.status} = Server Error!`));
          }
        };
        const client = new XMLHttpRequest();
        client.open(HTTPMethodType, url);
        headerMap.forEach((value, key) => {
          client.setRequestHeader(key, value);
        });
        client.onload = handler;
        client.send();
      }));
      return promise;
    }
  }
}
