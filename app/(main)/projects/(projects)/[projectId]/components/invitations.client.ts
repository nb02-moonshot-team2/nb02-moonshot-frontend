"use client";

import { axiosClient } from "@/shared/axios.client";

export type MyInvitation = {
  id: number;
  status: "pending" | "accepted" | "rejected";
  projectId: number;
  invitedAt: string;
  project: { id: number; name: string; description: string | null };
};

export async function getMyInvitationsClient(params?: {
  status?: "pending" | "accepted" | "rejected" | "all";
  page?: number;
  limit?: number;
}): Promise<{ data: MyInvitation[]; total: number }> {
  const res = await axiosClient.get("/invitations/me", {
    params: {
      status: params?.status ?? "pending",
      page: params?.page ?? 1,
      limit: params?.limit ?? 50,
    },
  });
  console.log("[getMyInvitationsClient] fetched", res);
  return res.data;
}

export async function acceptInvitationClient(invitationId: number) {
  await axiosClient.post(`/invitations/${invitationId}/accept`);
}

export async function rejectInvitationClient(invitationId: number) {
  await axiosClient.delete(`/invitations/${invitationId}/reject`);
}
