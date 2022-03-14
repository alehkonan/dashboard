import { calculateAmount } from './calculateAmount';

describe('calculate amount', () => {
  it('should return amount if value is valid', () => {
    const amount = calculateAmount([
      { amount: 12000, date: '2022-12-14' },
      { amount: 13000, date: '2022-12-14' },
    ]);

    expect(amount).toEqual(25000);
  });
  it('should return 0 if value is not valid', () => {
    const amount = calculateAmount('dfdffdv');

    expect(amount).toEqual(0);
  });
  it('should return 0 if there is no param', () => {
    const amount = calculateAmount();

    expect(amount).toEqual(0);
  });
});
