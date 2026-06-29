import { Cattle } from "@/entities/Cattle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "../cattle/StatusBadge";

interface Props {
  cattle: Cattle[];
}

export default function RecentCattleTable({ cattle }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Added</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tag</TableHead>

              <TableHead>Breed</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Added</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {cattle.map((cow) => (
              <TableRow key={cow.id}>
                <TableCell>{cow.tagNumber}</TableCell>

                <TableCell>{cow.breed}</TableCell>

                <TableCell>
                  <StatusBadge status={cow.status} />
                </TableCell>

                <TableCell>
                  {new Date(cow.createdAt!).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
