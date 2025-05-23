import {
  Box,
  Divider,
  Skeleton,
  Stack,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@mui/material";

export default function TableSkeleton() {
  return (
    <>
      <Box p={1}>
        <Stack direction="row" gap={1.5} justifyContent="end">
          <Skeleton width={40} />
          <Skeleton width={40} />
          <Skeleton width={40} />
          <Skeleton width={40} />
        </Stack>
      </Box>
      <Divider />
      <TableContainer sx={{ height: "calc(100vh - 175px)" }}>
        <Table>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell width={100}>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
