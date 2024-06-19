"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "@/app/_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDeleteReservation() {
    startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDeleteReservation}
      disabled={isPending}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-red-600 transition-colors hover:text-primary-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          {" "}
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-200 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
