const sortByOrder = <T extends string | number>(
  type: 'DESC' | 'ASC',
  itr: T[] | object,
) =>
  (typeof itr === 'object' ? Object.values(itr) : itr).sort(
    (a: T, b: T): number => {
      const getValue = (value: string | number) =>
        typeof value === 'string' ? value.toLowerCase() : value;

      const params = {
        a: getValue(a),
        b: getValue(b),
      };

      type === 'ASC'
        ? params.a < params.b
          ? -1
          : 1
        : params.a > params.b
        ? -1
        : 1;

      return 0;
    },
  );

export default sortByOrder;
