"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "./ui/alert";
import { loginUser } from "@/app/actions/userActions";

export default function LoginForm() {
  const { toast } = useToast();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setSetLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSetLoading(true);
      const { error, message } = await loginUser({ identifier, password });

      if (error) {
        // Handle the error case where there's an error but no message
        setError(error);
      } else if (message) {
        // Success case with message
        toast({
          title: "Success",
          description: message,
        });
      }
    } catch (error) {
      // Handling the error in case of an exception
      if (error instanceof Error) {
        setError(error.message); // If it's an instance of Error, use its message property
      } else {
        setError("An unexpected error occurred"); // For any other type, fall back to a generic message
      }
    } finally {
      // Always turn off loading indicator and refresh router
      setSetLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif">Login</CardTitle>
          <CardDescription>
            Enter your email or username to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="emailOrUsername">Email or Username</Label>
                <Input
                  id="emailOrUsername"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="m@example.com or username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <Button disabled={loading} type="submit" className="w-full mt-3">
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>Login</>
                )}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline">
                Sign up
              </Link>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
