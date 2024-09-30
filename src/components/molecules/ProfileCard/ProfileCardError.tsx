import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

export function ProfileCardError() {
  return (
    <Card className="relative overflow-hidden transition-all duration-300">
      <CardContent className="relative z-10 p-4">
        <div className="flex flex-col items-center space-y-2 gap-2">
          <Avatar className="bg-accent flex justify-center items-center w-32 h-32">
            <RefreshCw
              className="h-16 w-16 stroke-background fill-accent"
              aria-label={"Error loading user data"}
            />
          </Avatar>
          <div className="space-y-2 text-center md:text-start">
            <h2 className="mt-2 text-xl font-semibold">Bruno Santos</h2>
            <p className="text-sm text-muted-foreground">
              bmdevelop@outlook.fr
            </p>
            <p className="text-sm text-muted-foreground">France</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}