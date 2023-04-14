import { useMutation } from "react-query";
import { api } from "./api";

export default function usePost(path: string) {
  const mutation = useMutation(
    (data) => {
      return api.post(path, data);
    },
    {
      onSuccess: (err) => {
        console.log("onSuccess", err);
      },
      onError: (err) => {
        console.log("onError", err);
      },
    }
  );
  return mutation;
}
