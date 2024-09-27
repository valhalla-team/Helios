import { Bot } from "lucide-react";

interface ProfileCardErrorProps {
  error: boolean;
}

export function ProfileCardError({ error }: ProfileCardErrorProps) {
  return (
    <Bot
      className="mr-2"
      aria-label={error ? "Error loading user data" : "No user data available"}
    />
  );
}