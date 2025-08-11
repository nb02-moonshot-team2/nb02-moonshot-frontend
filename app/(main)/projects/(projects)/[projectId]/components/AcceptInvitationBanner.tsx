"use client";
import { useEffect, useState } from "react";
import {
  MyInvitation,
  getMyInvitationsClient,
  acceptInvitationClient,
  rejectInvitationClient,
} from "./invitations.client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AcceptInvitationBanner({
  projectId,
}: {
  projectId: number;
}) {
  const router = useRouter();
  const [accepting, setAccepting] = useState(false);
  const [rejecting, setRejecting] = useState(false);
  const [invite, setInvite] = useState<MyInvitation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setError(null);
      const res = await getMyInvitationsClient({
        status: "pending",
        page: 1,
        limit: 50,
      });
      const match = res.data.find((i) => i.projectId === projectId) ?? null;
      setInvite(match);
    } catch (e: any) {
      setError(e?.message ?? "초대 정보를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    load();
  }, [projectId]);

  const onAccept = async () => {
    if (!invite) return;
    try {
      setAccepting(true);
      await acceptInvitationClient(invite.id);
      toast.success("초대 수락 완료");
      setInvite({ ...invite, status: "accepted" });
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 수락에 실패했습니다.");
    } finally {
      setAccepting(false);
    }
  };

  if (error) {
    return null;
  }

  // 이 프로젝트에 pending 초대가 없으면 렌더 X
  if (!invite || invite.status !== "pending") return null;

  const onReject = async () => {
    if (!invite) return;
    if (!confirm("이 초대를 거절할까요?")) return;

    try {
      setRejecting(true);
      await rejectInvitationClient(invite.id);
      toast.success("초대를 거절했어요");
      setInvite(null); // or setInvite({ ...invite, status: "rejected" })
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 거절에 실패했습니다.");
    } finally {
      setRejecting(false);
    }
  };

  if (error) return null;
  if (!invite || invite.status !== "pending") return null;

  return (
    <div
      style={{
        marginTop: 12,
        marginBottom: 8,
        padding: "12px 16px",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <div style={{ fontSize: 14 }}>
        <b>{invite.project.name}</b> 프로젝트에 초대되었습니다. 수락하시겠어요?
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={onReject}
          disabled={rejecting || accepting}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            background: "white",
            border: "1px solid #e5e7eb",
            color: "#374151",
            fontWeight: 600,
            opacity: rejecting || accepting ? 0.6 : 1,
          }}
        >
          {rejecting ? "거절 중…" : "거절하기"}
        </button>
        <button
          type="button"
          onClick={onAccept}
          disabled={accepting || rejecting}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            opacity: accepting || rejecting ? 0.6 : 1,
          }}
        >
          {accepting ? "수락 중…" : "수락하기"}
        </button>
      </div>
    </div>
  );
}
