import { HttpStatusCodeEnum } from '~/core/app/server/protocols';

export interface SendEmail {
  run: (params: SendEmail.Params) => Promise<SendEmail.Response>;
}

export namespace SendEmail {
  export type Params = {
    from?: string;
    to: string;
    subject: string;
    html: string;
  };

  export type Response = {
    statusCode: HttpStatusCodeEnum;
  };
}
