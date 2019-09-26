import { getPersons } from './swapi';
import httpHelper from './httpHelper';

jest.mock('./httpHelper');
describe('Persons', () => {
  test('Get single person', async () => {
    // arrange
    const time = 500;
    const id = 1;
    const person = { id: 1, name: 'Luke Skywalker' };
    // const mock = jest.spyOn(main, 'httpGet').mockImplementation();
    httpHelper.mockResolvedValueOnce({ data: person });

    // action
    const personGet = await getPersons(time, id);

    // assert

    expect(httpHelper).toHaveBeenCalled();
    expect(personGet).toEqual(person);
  });
});
