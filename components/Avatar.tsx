import getUser from "@/app/actions/userActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import images from "@/constants/images";

export async function AvatarInfo() {
  let imageSrc;
  const user = await getUser();

  if (user?.image_url) {
    imageSrc = user.image_url;
  } else {
    imageSrc = images.placeholder.src;
  }
  if (!imageSrc) return;
  return (
    <div className="flex items-center gap-3">
      <p className="capitalize text-foreground font-serif font-medium hidden md:block tracking-wider">
        {user?.first_name && user.first_name}
      </p>
      <Avatar>
        <AvatarImage src={imageSrc} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
