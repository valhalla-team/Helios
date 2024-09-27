// profilecardfallback.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileCardFallback() {
  return (
    <Card className="relative overflow-hidden transition-all duration-300">
      <CardContent className="relative z-10 p-4">
        <div className="flex flex-col items-center space-y-4 gap-2">
          <Skeleton className="w-32 h-32 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-6 rounded-sm" />
            <Skeleton className="w-36 h-4 rounded-sm" />
            <Skeleton className="w-24 h-4 rounded-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}