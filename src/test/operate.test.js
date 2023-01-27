import operate from '../logic/operate';

describe('Tests for the calculator operations', () => {
  it('Addition: 3 + 4 = 7', () => {
    expect(operate('3', '4', '+')).toBe('7');
  });
  it('Subtraction: 7 - 4 = 3', () => {
    expect(operate('7', '4', '-')).toBe('3');
  });
  it('Multiplication: 2 x 4 = 8', () => {
    expect(operate('2', '4', 'x')).toBe('8');
  });
  it('Division: 8 ÷ 4 = 2', () => {
    expect(operate('8', '4', '÷')).toBe('2');
  });
  it("Division with 0: 8 ÷ 0 = Can't divide by 0.", () => {
    expect(operate('8', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('Remainder: 12 % 5 = 2', () => {
    expect(operate('12', '5', '%')).toBe('2');
  });
  it("Remainder with 0: 12 % 0 = Can't find modulo, can't divide 0.", () => {
    expect(operate('12', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
