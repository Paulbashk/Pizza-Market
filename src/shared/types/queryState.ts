export type TQueryState<OtherState = {}> = {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
} & OtherState;
