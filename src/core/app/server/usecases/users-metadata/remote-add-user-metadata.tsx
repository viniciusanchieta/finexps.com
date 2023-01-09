import { PrismaClient } from '@prisma/client';
import { HttpStatusCodeEnum } from '~/core/app/server/protocols';
import { AddUserMetadata } from '~/core/domain/server';

export class RemoteAddUserMetadata implements AddUserMetadata {
  constructor(private readonly prismaClient: PrismaClient) {}

  async run(params: AddUserMetadata.Params): Promise<AddUserMetadata.Response> {
    const { userId, code, category, expiresAt } = params;

    const registerUserMetadata = await this.prismaClient.userMetadata.create({
      data: {
        code,
        category,
        expiresAt,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    return {
      statusCode: HttpStatusCodeEnum.CREATED,
      code: registerUserMetadata.code
    };
  }
}

export namespace RemoteAddUserMetadata {
  export type Params = AddUserMetadata.Params;
  export type Response = AddUserMetadata.Response;
}
