import { UserMetadataCategoryEnum } from '~/core/domain/server';
import { RemoteAddUserMetadata } from './remote-add-user-metadata';

const defaultParams = {
  code: 'TEST',
  category: UserMetadataCategoryEnum.ACTIVATE_ACCOUNT,
  expiresAt: new Date(),
  userId: '1'
};

const defaultResponsePrisma = {
  id: 1,
  code: 'TEST',
  category: UserMetadataCategoryEnum.ACTIVATE_ACCOUNT,
  expiresAt: new Date(),
  createdAt: new Date()
};

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => {
      return {
        userMetadata: {
          create: jest.fn(() => {
            return defaultResponsePrisma;
          })
        }
      };
    })
  };
});

const PrismaClient = jest.requireMock('@prisma/client').PrismaClient;

const makeSut = () => {
  const prismaClient = new PrismaClient();
  const sut = new RemoteAddUserMetadata(prismaClient);
  return {
    sut,
    prismaClient
  };
};

describe('Remote add user metadata', () => {
  it('should create a user metadata', async () => {
    const { sut } = makeSut();
    const response = await sut.run(defaultParams);
    expect(response).toEqual({
      statusCode: 201,
      code: 'TEST'
    });
  });
});
