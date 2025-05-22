import Image from "next/image";
import { SignedIn,SignedOut,SignInButton,UserButton,SignUpButton } from "@clerk/nextjs";
import ModeToggle from "@/components/ui/ModeToggle";
export default function Home() {
  return (
    <div>
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
    </div>
  );
}
