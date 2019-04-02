test('calls the callback after 1 second', () => {
    const timerGame = require('./timerGame');
    //mock一个函数
    const callback = jest.fn();
    //每次测试之前手动调用
    jest.useFakeTimers();

    timerGame(callback);
  
    // 此时还不能被调用
    expect(callback).not.toBeCalled();
  
    // 快进到所有定时器执行
    jest.runAllTimers();
  
    // 此时回调应该被调用
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });