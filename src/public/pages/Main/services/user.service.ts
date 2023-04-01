import http from '../../../shared/functions/http-common';
import {Iinfo} from "../../../shared/redux/user/IUser";
import s from '../../../shared/functions/consts';

class UserService {
    sendDataUser = (request: Iinfo) =>
        http.post<any>(`${s.API_URL}solicitud`, request, {  });
}

export default  new UserService();