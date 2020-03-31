export default function getDate(value) {
  const TIME = new Date(value * 1000);
  const DATE = `${TIME.getDate()}`.padStart(2, '0');
  const MONTH = `${TIME.getMonth() + 1}`.padStart(2, '0');
  const YEAR = TIME.getFullYear();

  return `${YEAR}-${MONTH}-${DATE}`;
}
