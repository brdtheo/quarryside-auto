export type PaginationProps = {
  page: number;
  pageCount: number;
  disabled?: boolean;
  onPageChange: (page: number) => void;
};
