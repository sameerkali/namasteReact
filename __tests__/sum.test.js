import Sum from "../src/components/Others/sum";

test("this is sum test", () => {
  const sum = Sum(1,8);
  expect(sum).toBe(9);
});
