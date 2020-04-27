// import "amd-loader";
import { Ajax as AjaxPromise } from './promiseAjax';
import { Ajax as AjaxAsync } from './asyncAjax';

class Main {
  public static start() {
    document.getElementById('ajaxButton').addEventListener('click', Main.clickHandler);
  }

  private static async clickHandler() {
    const url = './package.json';
    const HTTPMethodType = 'GET';
    const headerMap = new Map<string, string>();
    headerMap.set('Accept', 'application/json');
    try {
      const result = await AjaxPromise.PromiseAjax.getPromiseJSON(url, HTTPMethodType, headerMap);
      alert(result);
    } catch (error) {
      alert(error);
    }
  }
}

window.onload = function () {
  Main.start();
};
