//************ */
//基础函数准备

const returnValue = "peanut butter";

const fetchDataWithCB = function(cb) {
    setTimeout(() => {
        cb(returnValue);
    }, 2000);
};

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(returnValue);
        }, 1000);
    });
};

//********************8 */

//回调方式的异步
//通过done来标识完成，未设置done则失败
test("the data is peanut butter", done => {
    function callback(data) {
        expect(data).toBe("peanut butter");
        done();
    }

    fetchDataWithCB(callback);
});

//*************** */
//基于promise的异步

//如果是promise，直接then即可
test("the data is peanut butter", () => {
    return fetchDataWithPromise().then(data => {
        expect(data).toBe("peanut butter");
    });
});

//**************** */
//基于async、await的异步
//直接用async、await标准语法即可
test("the data is peanut butter", async () => {
    expect.assertions(1);
    const data = await fetchDataWithPromise();
    expect(data).toBe("peanut butter");
});
