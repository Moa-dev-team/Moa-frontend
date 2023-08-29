import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, setUserProfile } from "../apis/profile";

export default function useProfile() {
  const queryClient = useQueryClient();

  const profileQuery = useQuery(["profile"], getUserProfile);

  const updateProfile = useMutation(
    (data) => setUserProfile({ skills: data }),
    {
      onSuccess: () => queryClient.invalidateQueries(["profile"]),
    }
  );

  return { profileQuery, updateProfile };
}
