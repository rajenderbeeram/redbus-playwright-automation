export function getNextSaturday(): Date {
  const today = new Date();
  const day = today.getDay();
  const diff = (6 + 7 - day) % 7 || 7;
  today.setDate(today.getDate() + diff);
  return today;
}