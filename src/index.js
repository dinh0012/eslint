const a = (b, c, d, e, f, g, h) => ({ b, c, d, e, f, g, h });
const b = true;
b && a(1, 2, 4, '5');

const c = () => {
  const a = 1 + 2;
  const b = 2;

  return a + b;
};
if (b) {
}
c();
