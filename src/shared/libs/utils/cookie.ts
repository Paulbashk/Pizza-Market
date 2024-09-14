/* eslint-disable max-len */
type TCookieKey = string;
type TCookieValue = string | number | boolean | object;

export function saveToCookie(
  name: TCookieKey,
  value: TCookieValue,
  expirationHours: number | undefined = 7 * 24,
): void {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + expirationHours * 60 * 60 * 1000,
  );

  const cookieValue: string = JSON.stringify(value);

  document.cookie = `${name}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/;`;
}

export function getCookieData(key: TCookieKey): string {
  const cookiesString = document.cookie;
  const cookiesArray = cookiesString.split('; ');

  const cookieData = cookiesArray.find(cookie => {
    const [cookieKey] = cookie.split('=');
    return cookieKey === key;
  });

  return cookieData ? cookieData.split('=')[1] : '';
}
