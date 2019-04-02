//beforeAll
//afterAll
//beforeEach
//afterEach
//为作用域钩子

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));
test("", () => console.log("1 - test"));
describe("Scoped / Nested block", () => {
    beforeAll(() => console.log("2 - beforeAll"));
    afterAll(() => console.log("2 - afterAll"));
    beforeEach(() => console.log("2 - beforeEach"));
    afterEach(() => console.log("2 - afterEach"));
    test("", () => console.log("2 - test"));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

//********************* */
// description和test的执行顺序
describe("outer", () => {
    console.log("describe outer-a");

    describe("describe inner 1", () => {
        console.log("describe inner 1");
        test("test 1", () => {
            console.log("test for describe inner 1");
            expect(true).toEqual(true);
        });
    });

    console.log("describe outer-b");

    test("test 1", () => {
        console.log("test for describe outer");
        expect(true).toEqual(true);
    });

    describe("describe inner 2", () => {
        console.log("describe inner 2");
        test("test for describe inner 2", () => {
            console.log("test for describe inner 2");
            expect(false).toEqual(false);
        });
    });

    console.log("describe outer-c");
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2


//************ */
//只测试一条数据
//test.only可以只执行该文件内这一条数据
// test.only('this will be the only test that runs', () => {
//     expect(true).toBe(false);
//   });