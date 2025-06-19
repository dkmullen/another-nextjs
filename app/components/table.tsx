export default function Table<T>(arr: T[], key: keyof T): T[] {
  console.log(arr, key);
  return arr;
}
