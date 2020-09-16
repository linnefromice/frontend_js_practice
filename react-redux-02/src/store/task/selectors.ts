// reducerからstate取得した際に、何かした加工したいときに使用する？
// https://github.com/jthegedus/re-ducks-examples/blob/master/re-ducks-todos/src/state/ducks/todos/selectors.js
import { Tasks } from "./types"

// Temp
const getTasks = (tasks: Tasks) => tasks
export default {
    getTasks
}