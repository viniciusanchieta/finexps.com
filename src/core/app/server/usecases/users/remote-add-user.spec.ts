import { RemoteAddUser } from './remote-add-user';

const defaultParams = {
  email: 'test@test.com',
  name: 'test',
  password: 'test'
};

const defaultResponsePrisma = {
  id: 1,
  email: 'test@test.com',
  name: 'test',
  password: 'test',
  createdAt: new Date(),
  updatedAt: new Date()
};

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => {
      return {
        user: {
          create: jest.fn(() => {
            return defaultResponsePrisma;
          })
        }
      };
    })
  };
});

jest.mock('~/core/app/server/usecases', () => {
  return {
    RemoteAddUserMetadata: jest.fn(() => {
      return {
        run: jest.fn(() => {
          return {
            codeStatus: 201
          };
        })
      };
    })
  };
});

jest.mock('~/core/app/server/protocols', () => {
  return {
    HttpStatusCodeEnum: {
      CREATED: 201,
      BAD_REQUEST: 400
    }
  };
});

const PrismaClient = jest.requireMock('@prisma/client').PrismaClient;
const RemoteAddUserMetadata = jest.requireMock(
  '~/core/app/server/usecases'
).RemoteAddUserMetadata;

const makeSut = () => {
  const prismaClient = new PrismaClient();
  const remoteAddUserMetadata = new RemoteAddUserMetadata();
  const sut = new RemoteAddUser(prismaClient, remoteAddUserMetadata);
  return {
    sut,
    prismaClient,
    remoteAddUserMetadata
  };
};

describe('Remote add user', () => {
  it('should create a user', async () => {
    const { sut } = makeSut();
    const response = await sut.run(defaultParams);
    expect(response.statusCode).toBe(201);
  });

  it('should return empty object if user already exists', async () => {
    const { sut, prismaClient } = makeSut();
    prismaClient.user.create = jest.fn(() => {
      return null;
    });
    const response = await sut.run(defaultParams);
    expect(response.statusCode).toBe(400);
  });
});
