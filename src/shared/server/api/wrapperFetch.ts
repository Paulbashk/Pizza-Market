export const wrapperFetch = <Response>(
  url: RequestInfo,
  options: RequestInit | undefined = undefined,
): Promise<Response> =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<Response>;
  });
