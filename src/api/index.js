import { httpClient } from "./httpClient";
import { todosApi } from "./todosApi";

export function apiFactory(http) {
  return {
    todos: todosApi(http)
  };
}

const http = httpClient("http://172.105.57.233:9000");
export const api = apiFactory(http);
