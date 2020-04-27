// import "amd-loader";
import { Ajax } from './promiseAjax';

class Main {
  public static start() {
    document.getElementById('ajaxButton').addEventListener('click', Main.clickHandler);
  }

  private static async clickHandler() {
    const url = './package.json';
    const HTTPMethodType = 'GET';
    const headerMap = new Map();
    headerMap.set('Accept', 'application/json');
    try {
      const result = await Ajax.PromiseAjax.getPromiseJSON(url, HTTPMethodType, headerMap);
      alert(result);
    } catch (error) {
      alert(error);
    }
  }
}

window.onload = function () {
  Main.start();
};