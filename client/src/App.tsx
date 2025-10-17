import "./App.css";
import { useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { trpc } from "./utils/trpc";
import { Suspense } from "react";

function App() {
  const hello = useSuspenseQuery(trpc.greeting.queryOptions());

  const onClick = () => hello.refetch();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {hello.status === "success" && hello.data.text}
        {hello.status === "error" && "Oops!"}
      </Suspense>
      <button onClick={onClick}>Refetch!</button>
    </div>
  );
}

export default App;

