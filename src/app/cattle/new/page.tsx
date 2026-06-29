"use client";

import CattleForm from "@/components/cattle/CattleForm";
import { createCattle } from "@/services/cattle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function AddCattlePage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createCattle,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cattle"],
      });
      router.push("/cattle");
    },
  });

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Add Cattle</h2>

      <CattleForm onSubmit={(values) => mutation.mutate(values)} />
    </>
  );
}
