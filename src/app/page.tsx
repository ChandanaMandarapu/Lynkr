import Image from "next/image";
import { SignedIn,SignedOut,SignInButton,UserButton,SignUpButton } from "@clerk/nextjs";
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
    </div>
  );
}
