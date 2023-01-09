import { HttpStatusCodeEnum } from '~/core/app/server';

export interface AddUser {
  run: (params: AddUser.Params) => Promise<AddUser.Response>;
}

export namespace AddUser {
  export type Params = {
    email: string;
    name: string;
    password: string;
  };

  export type Response = {
    statusCode: HttpStatusCodeEnum;
    activationCode?: string;
  };
}
