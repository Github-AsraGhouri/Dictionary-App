export const ADD_DICT = 'ADD_TODO'

let nextDictId = 0;

export function addDict(text) {
   return {
      type: ADD_DICT,
      id: nextDictId++,
      text
   };
}