import reducers from '../reducers';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      validToken: null,
      token: null,
      data: {
        activity: {},
        completed: {}
      },
      user: {}
    });
  });
  // it('Should invalidate token', () => {

  // })
});
