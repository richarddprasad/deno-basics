import { assertEquals } from "./deps.ts";

Deno.test("example test", () => {
  const n = 1 + 2;
  assertEquals(n, 3);
});

Deno.test("example test 2", () => {
  const n = 1 * 2;
  assertEquals(n, 2);
  // assertEquals(n, 3);
});
