import {ID, Response} from '../../../../../../_metronic/helpers'

export type Client = {
    id: ID;
    name: string;
    username: string;
    email: string;
//     address: string;
//     phone: string;
//     website: string;
//     company: string;
}

export type ClientQueryResponse = Response<Array<Client>>

export const initialUser: Client = {
    id: 1,
    name: 'jp',
    username: 'jp_1',
    email: 'ar@gmail.com',
}
