import mockedCategories from '../__mocks__/categories';
import * as api from '../Service/api';

describe('Check result api', () => {
  it('check create function select Categories api', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => mockedCategories,
    });

    return api.getCategories().then((categories) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(categories).toEqual(mockedCategories);
    });
  });
});
