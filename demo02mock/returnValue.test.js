const myMock = jest.fn();
console.log(myMock());
// > undefined


//mockReturnValueOnce
//mockReturnValue
myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

//mock值
test("first mock", () => {
    let data = myMock();
    expect(data).toEqual(10);
});
test("second mock", () => {
    let data = myMock();
    expect(data).toEqual('x');
});
test("third mock", () => {
    let data = myMock();
    expect(data).toEqual(true);
});
