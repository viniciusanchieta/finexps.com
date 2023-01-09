import { RemoteSendEmail } from './remote-send-email';

jest.mock('~/core/infra/emails', () => {
  return {
    createTransport: jest.fn(() => {
      return {
        sendMail: jest.fn(() => {
          return {
            response: 'OK'
          };
        })
      };
    })
  };
});

const makeSut = () => {
  const sut = new RemoteSendEmail();
  return {
    sut
  };
};

describe('Remote send email', () => {
  it('should send email', async () => {
    const { sut } = makeSut();
    const response = await sut.run({
      to: 'test@test.test',
      subject: 'test',
      html: '<h1>test</h1>'
    });
    expect(response).toEqual({
      statusCode: 200
    });
  });
});
