"use client";
import { useEffect, useState } from "react";
import {
  MyInvitation,
  getMyInvitationsClient,
  acceptInvitationClient,
} from "./invitations.client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AcceptInvitationBanner({
  projectId,
}: {
  projectId: number;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      await acceptInvitationClient(invite.id);
      toast.success("초대 수락 완료");
      setInvite({ ...invite, status: "accepted" });
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 수락에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return null;
  }

  // 이 프로젝트에 pending 초대가 없으면 렌더 X
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
      <button
        onClick={onAccept}
        disabled={loading}
        style={{
          padding: "8px 12px",
          borderRadius: 10,
          background: "#2563eb",
          color: "white",
          fontWeight: 600,
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "처리 중…" : "수락하기"}
      </button>
    </div>
  );
}
