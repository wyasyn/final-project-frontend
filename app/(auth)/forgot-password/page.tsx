"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { resetPassword } from "@/app/actions/userActions";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Initial loading state
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Try to reset password
      const response = await resetPassword(email);

      const { message, error } = response;

      if (error) {
        setError(error); // Handle specific error from the response
      } else if (message) {
        // Password reset email sent successfully
        setSuccess(true);
        router.push("/login");
      }
    } catch (err) {
      // Handle error and display a message
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      // Stop loading no matter what
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="font-serif">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error ? (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : success ? (
              <Alert>
                <AlertDescription>
                  If an account exists for {email}, we have sent a password
                  reset link.
                </AlertDescription>
              </Alert>
            ) : null}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          className="w-full"
          type="submit"
          disabled={isLoading || success}
          onClick={handleSubmit}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Sending Reset Link" : "Send Reset Link"}
        </Button>
        <div className="text-center text-sm">
          Remembered your password?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Back to login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
