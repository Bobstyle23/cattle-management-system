import { Badge } from "@/components/ui/badge";
import { Status } from "@/entities/Status";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: Status;
}

const statusStyles = {
  HEALTHY: "bg-green-100 text-green-800 hover:bg-green-100",
  SICK: "bg-red-100 text-red-800 hover:bg-red-100",
  PREGNANT: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  SOLD: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  DECEASED: "bg-gray-500 text-gray-50 hover:bg-gray-800 ",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge className={cn("font-medium px-2 py-1", statusStyles[status])}>
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </Badge>
  );
}
