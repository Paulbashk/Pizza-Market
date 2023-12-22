export function findIndexByKeyObject<T extends object, B>(
  array: T[],
  key: keyof T,
  value: B,
): number;
export function findIndexByKeyObject<T extends object, B>(
  object: T,
  key: keyof T,
  value: B,
): number;
export function findIndexByKeyObject<T extends object, B>(
  collection: T[] | T,
  key: keyof T,
  value: B,
): number {
  if (Array.isArray(collection)) {
    return collection.findIndex(item => item[key] === value);
  }
  return Object.values(collection).findIndex(item => item[key] === value);
}
