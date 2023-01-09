import { NextApiRequest } from 'next';
import handler from './register';

const defaultBody = {
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
            statusCode: 201
          };
        })
      };
    }),
    RemoteSendEmail: jest.fn(() => {
      return {
        run: jest.fn(() => {
          return {
            statusCode: 201
          };
        })
      };
    }),
    RemoteAddUser: jest.fn(() => {
      return {
        run: jest.fn(() => {
          return {
            statusCode: 201
          };
        })
      };
    })
  };
});

jest.mock('@react-email/render', () => {
  return {
    render: jest.fn(() => {
      return {
        html: '<h1>test</h1>'
      };
    })
  };
});

jest.mock('~/core/infra', () => {
  return {
    apiLogger: jest.fn(() => {
      return {
        error: 'test'
      };
    })
  };
});

describe('Register', () => {
  it('should create a user', async () => {
    const req = {
      body: defaultBody
    } as NextApiRequest;

    const res = {
      status: jest.fn(() => {
        return {
          end: jest.fn()
        };
      })
    } as any; // eslint-disable-line
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should return 400 when error', async () => {
    const req = {
      error: defaultBody
    } as any; // eslint-disable-line
    const res = {
      status: jest.fn(() => {
        return {
          end: jest.fn()
        };
      })
    } as any; // eslint-disable-line
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
