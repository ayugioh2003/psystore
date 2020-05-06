export default function currency(value) {
  const result = value
    .toString()
    .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function replace(
      all,
      pre,
      groupOf3Digital,
    ) {
      return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
    });
  return `$${result}`;
}
