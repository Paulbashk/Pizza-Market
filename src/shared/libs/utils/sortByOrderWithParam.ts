const sortByOrderWithParam = <T extends Record<string, string | number>>(
  type: 'DESC' | 'ASC',
  itr: T[] | object,
  param: string,
) =>
  (typeof itr === 'object' ? Object.values(itr) : itr).sort(
    (a: T, b: T): number => {
      const getValue = (value: string | number) =>
        typeof value === 'string' ? value.toLowerCase() : value;

      const params = {
        a: getValue(a[param]),
        b: getValue(b[param]),
      };

      if (params.a < params.b) {
        return type === 'ASC' ? -1 : 1;
      }

      if (params.a > params.b) {
        return type === 'ASC' ? 1 : -1;
      }

      return 0;
    },
  );

export default sortByOrderWithParam;
