"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { E164Number } from "libphonenumber-js/core";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import RedStar from "./RedStar";
import { Alert, AlertDescription } from "./ui/alert";
import { createUser } from "@/app/actions/userActions";

export default function RegistrationForm() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [secureUrl, setSecureUrl] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [career, setCareer] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setSetLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast({
        variant: "destructive",
        title: "Password Error",
        description: "Passwords do not match.",
      });
      return;
    }

    try {
      setSetLoading(true);
      const data = {
        email,
        username,
        password,
        first_name: firstName || undefined,
        middle_name: middleName || undefined,
        last_name: lastName || undefined,
        career: career || undefined,
        phone_number: (phoneNumber as string) || undefined,
        date_of_birth: date ? format(date, "yyyy-MM-dd") : undefined,
        image_url: secureUrl || undefined,
      };

      const response = await createUser(data);
      if (response?.error) {
        setError(response.error);
      } else {
        router.refresh();
      }
    } catch (error) {
      setError(error as string);
    } finally {
      setSetLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold font-serif">
            Create an Account
          </CardTitle>
          <CardDescription>Fill in your details to register</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  Email <RedStar />
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center">
                  Username <RedStar />
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center">
                  Password <RedStar />
                </Label>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center" htmlFor="confirm_password">
                  Confirm Password <RedStar />
                </Label>
                <Input
                  id="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middle_name">Middle Name</Label>
                <Input
                  id="middle_name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  id="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="career">Career</Label>
              <Input
                id="career"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone_number">Phone Number</Label>
              <PhoneInput
                defaultCountry="UG"
                onChange={(value) =>
                  setPhoneNumber(value as E164Number | undefined)
                }
                value={phoneNumber}
                id="phone_number"
                type="tel"
                placeholder="75269541452"
                className="input-phone "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile_pic">Profile Picture</Label>
              <div>
                <div>
                  <CldUploadWidget
                    onSuccess={(result) => {
                      const info = result.info as CloudinaryUploadWidgetInfo;
                      setSecureUrl(info.secure_url);
                    }}
                    onQueuesEnd={(result, { widget }) => {
                      widget.close();
                    }}
                    uploadPreset="personal finance"
                  >
                    {({ open }) => {
                      function handleOnClick() {
                        setSecureUrl(null);
                        open();
                      }
                      return (
                        <Button
                          onClick={handleOnClick}
                          type="button"
                          variant="outline"
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          {secureUrl ? "Change image" : "Upload image"}
                        </Button>
                      );
                    }}
                  </CldUploadWidget>
                </div>

                {secureUrl ? (
                  <div>
                    <Image
                      width={320}
                      height={320}
                      src={secureUrl}
                      alt="Profile picture"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <Button
                      onClick={() => setSecureUrl(null)}
                      type="button"
                      variant="outline"
                    >
                      Remove image
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>Register</>
              )}
            </Button>
            <p className="text-xs text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
