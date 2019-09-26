import mailSystem from './mailSystem';
import smtpTransport from './smtpTransport';
import repository from './repository';

test('should handle...', () => {
  // arrange
  const to = 'wouter.delaet@euri.com';
  const subject = 'Fubar';
  const model = { name: 'Wouter' };

  const mock = jest.spyOn(smtpTransport, 'send').mockImplementation();

  // act
  mailSystem.sendWelcomeMail(to, subject, model);

  // assert
  expect(mock).toHaveBeenCalledWith(
    expect.objectContaining({
      toAddress: to,
      subject,
      body: `Hello ${model.name}, with this mail I...`,
    }),
  );
});

test('it should send it to the back end', () => {
  // arrange
  const backend = { transfer: jest.fn() };
  const mail = [
    { id: 123, to: 'peter.cosemans@gmail.com', body: 'aaaa...' },
    { id: 123, to: 'wim.vanhoye@euri.com', body: 'bbb...' },
  ];

  const mock = jest.spyOn(repository, 'getMails').mockImplementation(() => mail);

  // act
  mailSystem.transferMails(backend);

  // assert
  expect(mock).toHaveBeenCalledWith();
  expect(backend.transfer).toHaveBeenCalledWith([mail[1]]);
});
