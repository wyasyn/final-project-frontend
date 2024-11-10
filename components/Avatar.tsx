import getUser from "@/app/actions/userActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import images from "@/constants/images";

export async function AvatarInfo() {
  const user = await getUser();

  return (
    <div className="flex items-center gap-3">
      <p className="capitalize text-foreground font-serif font-medium hidden md:block tracking-wider">
        {user?.first_name ? user.first_name : user?.username}
      </p>
      <Avatar>
        <AvatarImage
          src={user?.image_url || images.placeholder.src}
          alt="@shadcn"
        />
        <AvatarFallback>{`${user?.first_name && user.first_name[0]}${
          user?.last_name && user.last_name[0]
        }`}</AvatarFallback>
      </Avatar>
    </div>
  );
}
