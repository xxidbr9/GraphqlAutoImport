import Users from '../../models/Users'
import { find, filter } from "lodash";

export default {
  Query: {
    findUsers: async () => {
      return (await Users).data;
    },
    findUserById: async (_root, { id }, _context, _info) => {
      const data = (await Users).data;
      if (!data) throw new Error("cant find id");
      return await find(data, { id });
    }
  },
};
