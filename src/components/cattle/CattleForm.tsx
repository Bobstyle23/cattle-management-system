"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cattleSchema, CattleFormValues } from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
  FieldContent,
  FieldDescription,
} from "@/components/ui/field";
import { statusOptions } from "@/entities/Status";
import { genderOptions } from "@/entities/Gender";
import { BREED_GROUPS } from "@/entities/Breed";

interface Props {
  defaultValues?: Partial<CattleFormValues>;
  onSubmit: (values: CattleFormValues) => void;
}

export default function CattleForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CattleFormValues>({
    resolver: zodResolver(cattleSchema),

    defaultValues: {
      tagNumber: "",
      breed: "",
      gender: "MALE",
      status: "HEALTHY",
      dateOfBirth: "",
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FieldGroup className="grid grid-cols-2 gap-6">
        <Field>
          <FieldLabel htmlFor="tagNumber">Tag Number</FieldLabel>

          <FieldContent className="gap-2">
            <Input
              id="tagNumber"
              placeholder="COW-001"
              {...register("tagNumber")}
            />
            <FieldDescription>
              Unique identifier placed on the animal.
            </FieldDescription>

            <FieldError errors={[errors.tagNumber]} />
          </FieldContent>
        </Field>

        <Controller
          control={control}
          name="breed"
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor="breed">Breed</FieldLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a breed of the cattle" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(BREED_GROUPS).map(([group, breeds]) => (
                    <SelectGroup key={group}>
                      <SelectLabel>{group}</SelectLabel>
                      {breeds.map((breed) => (
                        <SelectItem key={breed} value={breed}>
                          {breed}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                  <FieldDescription>
                    Select the breed of the cattle from the list
                  </FieldDescription>
                </SelectContent>
              </Select>
            </Field>
          )}
        />

        <Field className="col-span-2">
          <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
          <FieldContent className="gap-2">
            <Input type="date" {...register("dateOfBirth")} />

            <FieldError errors={[errors.dateOfBirth]} />
          </FieldContent>
        </Field>

        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor="gender">Gender</FieldLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {genderOptions.map((gender) => (
                    <SelectItem key={gender.value} value={gender.value}>
                      {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FieldError errors={[errors.gender]} />
            </Field>
          )}
        />

        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Field>
              <FieldLabel>Status</FieldLabel>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FieldError errors={[errors.status]} />
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" disabled={isSubmitting}>
        Save Cattle
      </Button>
    </form>
  );
}
