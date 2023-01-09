import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { HttpStatusCodeEnum } from '~/core/app/server/protocols';
import { RemoteAddUserMetadata } from '~/core/app/server/usecases';
import { AddUser, UserMetadataCategoryEnum } from '~/core/domain/server';
import { JWT_SECRET, PasswordUtil } from '~/core/infra';

export class RemoteAddUser implements AddUser {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly remoteAddUserMetadata: RemoteAddUserMetadata
  ) {}

  async run(params: AddUser.Params): Promise<AddUser.Response> {
    const { email, name, password } = params;
    const hashedPassword = await PasswordUtil.hash({
      password,
      salt: 10
    });
    const userRegister = await this.prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    if (!userRegister) {
      return { statusCode: HttpStatusCodeEnum.BAD_REQUEST };
    }

    const { id } = userRegister;
    const tokenActivateAccount = jwt.sign({ id }, JWT_SECRET, {
      expiresIn: '30m'
    });
    const dateNowWith30Minutes = new Date().setMinutes(
      new Date().getMinutes() + 30
    );

    const { code } = await this.remoteAddUserMetadata.run({
      category: UserMetadataCategoryEnum.ACTIVATE_ACCOUNT,
      code: tokenActivateAccount,
      expiresAt: new Date(dateNowWith30Minutes),
      userId: id
    });

    return {
      statusCode: HttpStatusCodeEnum.CREATED,
      activationCode: code
    };
  }
}

export namespace RemoteAddUser {
  export type Params = AddUser.Params;
  export type Response = AddUser.Response;
}
