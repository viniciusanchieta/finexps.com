import { HttpStatusCodeEnum } from '~/core/app/server/protocols';
import { SendEmail } from '~/core/domain/server';
import {
  EMAIL_FROM,
  EMAIL_HOST,
  EMAIL_PASS,
  EMAIL_PORT,
  EMAIL_USER
} from '~/core/infra';
import { createTransport } from '~/core/infra/emails';

export class RemoteSendEmail implements SendEmail {
  async run(params: SendEmail.Params): Promise<SendEmail.Response> {
    const { to, subject, from = EMAIL_FROM, html } = params;

    const transporter = createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    await transporter.sendMail({
      to,
      subject,
      from,
      html
    });

    return {
      statusCode: HttpStatusCodeEnum.OK
    };
  }
}

export namespace RemoteAddUser {
  export type Params = SendEmail.Params;
  export type Response = SendEmail.Response;
}
