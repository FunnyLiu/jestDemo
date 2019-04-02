jest.mock('node-fetch');
import fetch from 'node-fetch';
//模拟了node-fetch，但通过requireActual取真实的module，而不是mock的
const {Response} = jest.requireActual('node-fetch');

import {createUser} from './createUser';

test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('4')));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});