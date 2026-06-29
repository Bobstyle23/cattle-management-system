import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="h-80">{children}</CardContent>
    </Card>
  );
}
