"use client";

import CattleForm from "@/components/cattle/CattleForm";
import { createCattle } from "@/services/cattle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddCattlePage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCattle,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cattle"],
      });
    },
  });

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Add Cattle</h2>

      <CattleForm onSubmit={(values) => mutation.mutate(values)} />
    </>
  );
}
