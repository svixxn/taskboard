import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
  }

  const submit = async () => {
    "use server";
    redirect("/app/workspace/1");
  };

  return (
    <div className="flex justify-center items-center">
      {true ? (
        <div className="mx-auto max-w-md text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            No Workspaces
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Started with Your First Workspace
          </h1>
          <p className="mt-4 text-muted-foreground">
            It looks like you haven&apos;t created any workspaces yet.
            Let&apos;s get you started!
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4">Create Workspace</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form action={submit}>
                <DialogHeader>
                  <DialogTitle>New Workspace</DialogTitle>
                  <DialogDescription>
                    Create a new workspace to start collaborating with your
                    team.
                  </DialogDescription>
                </DialogHeader>
                <Input
                  id="name"
                  placeholder="My amazing workspace"
                  className="my-4"
                />
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div>Workspace {i}</div>
              <div>Members: 3</div>
              <div>Projects: 2</div>
              <div>Tasks: 5</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
