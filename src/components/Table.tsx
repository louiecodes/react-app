import { MantineProvider } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import "@mantine/core/styles.css";

//simple data example - Check out https://www.mantine-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara X",
    age: 25,
  },
];

function Table() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
  });

  return (
    <MantineProvider
      theme={{
        colorScheme: "light",
        primaryColor: "blue",
      }}
    >
      <MantineReactTable table={table} />
    </MantineProvider>
  );
}
export default Table;
