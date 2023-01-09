import { PrismaClient } from '@prisma/client';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCodeEnum } from '~/core/app/server/protocols';
import {
  RemoteAddUser,
  RemoteAddUserMetadata,
  RemoteSendEmail
} from '~/core/app/server/usecases';
import { apiLogger } from '~/core/infra';
import { ActivateAccountEmail } from '~/core/presentation/emails';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, name, password } = req.body;
    const sendEmail = new RemoteSendEmail();
    const register = new RemoteAddUser(
      new PrismaClient(),
      new RemoteAddUserMetadata(new PrismaClient())
    );

    const { activationCode } = await register.run({
      email,
      name,
      password
    });

    const emailHtml = render(
      <ActivateAccountEmail activationCode={activationCode} />
    );

    sendEmail.run({
      to: email,
      subject: 'Ative sua conta no Finexps',
      html: emailHtml
    });

    res.status(HttpStatusCodeEnum.CREATED).end();
  } catch (error) {
    apiLogger({
      params: req.body,
      description: error.message,
      category: 'REGISTER_USER'
    });

    res.status(HttpStatusCodeEnum.BAD_REQUEST).end();
  }
}
