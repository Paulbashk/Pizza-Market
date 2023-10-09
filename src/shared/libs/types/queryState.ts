export type QueryState<OtherState = {}> = {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
} & OtherState;
