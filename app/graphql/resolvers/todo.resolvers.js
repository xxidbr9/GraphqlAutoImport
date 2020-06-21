import Todos from "../../models/Todos";
import { find, filter } from "lodash";

export default {
  Query: {
    findTodos: async () => {
      return (await Todos).data;
    },
    findTodoById: async (_root, { id }, _context, _info) => {
      const data = (await Todos).data;
      if (!data) throw new Error("cant find id");
      return await find(data, { id });
    }
  },
};
