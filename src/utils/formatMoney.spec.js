import { formatMoney } from './formatMoney';

describe('format money', () => {
  it('should return dollars without decimals', () => {
    const dollars = formatMoney(10000);

    expect(dollars).toEqual('$100');
  });
  it('should return value if param is a string', () => {
    const dollars = formatMoney('12150');

    expect(dollars).toEqual('$121.50');
  });
  it('should return $0 if there is no param', () => {
    const dollars = formatMoney();

    expect(dollars).toEqual('$0');
  });
  it('should return $0 if param is not valid', () => {
    const dollars = formatMoney('dfhvjbdfjhv');

    expect(dollars).toEqual('$0');
  });
});
