import axios from 'axios';
import { fetchUsers } from './user';

jest.mock('axios');
describe('user api', function () {
  test('should fetch users', async () => {
    axios.get.mockResolvedValue({
      data: [],
    });

    const users = await fetchUsers();

    expect(users).toEqual([]);
  });
});
