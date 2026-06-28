import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Cattle } from "@/entities/Cattle";

interface Props {
  cattle: Cattle[];
}

function calculateAge(date: string) {
  const birthDate = new Date(date);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return `${age} years`;
}

export default function CattleTable({ cattle }: Props) {
  if (!cattle.length) {
    return (
      <div className="rounded-lg border p-10 text-center">
        <h3 className="font-semibold">No cattle found</h3>

        <p className="text-sm text-muted-foreground">
          Add your first cattle to get started.
        </p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tag</TableHead>
          <TableHead>Breed</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {cattle.map((cow) => (
          <TableRow key={cow.id}>
            <TableCell>{cow.tagNumber}</TableCell>

            <TableCell>{cow.breed}</TableCell>

            <TableCell>{cow.gender}</TableCell>

            <TableCell>{calculateAge(cow.dateOfBirth)}</TableCell>

            <TableCell>{cow.status}</TableCell>

            <TableCell className="space-x-2 text-right">
              <Button variant="outline" size="sm">
                Edit
              </Button>

              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
