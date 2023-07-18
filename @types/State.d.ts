export type States = {
  SortBy?: string;
  IsAsc?: boolean;
  setIsAsc?: React.Dispatch<React.SetStateAction<boolean>>;
  setSortBy?: React.Dispatch<React.SetStateAction<string>>;
}