import { LOGIN} from "../utils/commonType.js";

export const requestLoginAction = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

