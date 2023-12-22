export function findByKeyObject<T extends object, B>(
  array: T[],
  key: keyof T,
  value: B,
): T | undefined;
export function findByKeyObject<T extends object, B>(
  object: T,
  key: keyof T,
  value: B,
): T | undefined;
export function findByKeyObject<T extends object, B>(
  collection: T[] | T,
  key: keyof T,
  value: B,
): T | undefined {
  if (Array.isArray(collection)) {
    return collection.find(item => item[key] === value);
  }
  return Object.values(collection).find(item => item[key] === value);
}

// export const findByKeyObject = <T extends object, B>(
//   array: T[],
//   key: keyof T,
//   value: B,
// ): T | undefined => array.find(item => item[key] === value);
