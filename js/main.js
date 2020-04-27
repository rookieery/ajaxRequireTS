var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import "amd-loader";
import { Ajax } from './promiseAjax.js';
class Main {
    static start() {
        document.getElementById('ajaxButton').addEventListener('click', Main.clickHandler);
    }
    static clickHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = './package.json';
            const HTTPMethodType = 'GET';
            const headerMap = new Map();
            headerMap.set('Accept', 'application/json');
            try {
                const result = yield Ajax.PromiseAjax.getPromiseJSON(url, HTTPMethodType, headerMap);
                alert(result);
            }
            catch (error) {
                alert(error);
            }
        });
    }
}
window.onload = function () {
    Main.start();
};
