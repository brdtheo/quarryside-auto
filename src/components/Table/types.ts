type TableRow = {
  name: string;
  data: string | string[];
};

export type TableProps = {
  rows: TableRow[];
};
