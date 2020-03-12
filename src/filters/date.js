export default function getDate(value) {
  const TIME = new Date(value * 1000);
  const DATE = TIME.getDate();
  const MONTH = TIME.getMonth();
  const YEAR = TIME.getFullYear();

  return `${YEAR}/${MONTH}/${DATE}`;
}
