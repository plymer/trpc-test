import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { publicProcedure, router } from "./trpc.js";
import { z } from "zod";

const appRouter = router({
  greeting: publicProcedure
    // This is the input schema of your procedure
    // 💡 Tip: Try changing this and see type errors on the client straight away
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      // This is what you're returning to your client

      return {
        text: `Hello, ${input?.name ?? "world!"}`,
        // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
      };
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

createHTTPServer({
  middleware: cors(),
  router: appRouter,
}).listen(3000);

console.log(`tRPC server listening on http://localhost:3000`);

