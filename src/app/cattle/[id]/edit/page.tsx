"use client";

import CattleForm from "@/components/cattle/CattleForm";
import { CattleFormValues } from "@/entities/CattleFormValues";
import { getCattleById, updateCattle } from "@/services/cattle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function EditPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["cattle", id],
    queryFn: () => getCattleById(id as string),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: CattleFormValues) =>
      updateCattle(id as string, values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cattle"],
      });

      queryClient.invalidateQueries({
        queryKey: ["cattle", id],
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Edit Cattle</h2>
      <CattleForm
        defaultValues={data}
        onSubmit={(values) => mutation.mutate(values)}
      />
    </>
  );
}
