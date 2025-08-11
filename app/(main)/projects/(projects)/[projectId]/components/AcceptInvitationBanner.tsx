"use client";
import { useEffect, useMemo, useState } from "react";
import {
  MyInvitation,
  getMyInvitationsClient,
  acceptInvitationClient,
  rejectInvitationClient,
} from "./invitations.client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Action = "accept" | "reject" | null;

export default function AcceptInvitationBanner({
  projectId,
  showReject = false, // 🔹 기본은 수락만 노출(패널에 거절 버튼이 있으므로)
}: {
  projectId: number;
  showReject?: boolean;
}) {
  const router = useRouter();
  const [invite, setInvite] = useState<MyInvitation | null>(null);
  const [loading, setLoading] = useState<Action>(null);
  const [error, setError] = useState<string | null>(null);
  const isPending = useMemo(
    () => invite?.status === "pending",
    [invite?.status]
  );

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
    // projectId가 변할 때마다 최신 초대 상태 동기화
  }, [projectId]);

  if (error) return null;
  if (!isPending) return null; // 이 프로젝트에 pending 초대 없으면 미표시

  const onAccept = async () => {
    if (!invite) return;
    try {
      setLoading("accept");
      await acceptInvitationClient(invite.id);
      toast.success("초대 수락 완료");
      setInvite({ ...invite, status: "accepted" });
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 수락에 실패했습니다.");
    } finally {
      setLoading(null);
    }
  };

  const onReject = async () => {
    if (!invite) return;
    if (!confirm("이 초대를 거절할까요?")) return;
    try {
      setLoading("reject");
      await rejectInvitationClient(invite.id);
      toast.info("초대를 거절했습니다.");
      setInvite(null); // 배너 숨김
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 거절에 실패했습니다.");
    } finally {
      setLoading(null);
    }
  };

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
      aria-busy={loading !== null}
    >
      <div style={{ fontSize: 14 }}>
        <b>{invite!.project.name}</b> 프로젝트에 초대되었습니다.
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {showReject && (
          <button
            type="button"
            onClick={onReject}
            disabled={loading !== null}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              background: "white",
              border: "1px solid #e5e7eb",
              color: "#374151",
              fontWeight: 600,
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading === "reject" ? "거절 중…" : "거절하기"}
          </button>
        )}
        <button
          type="button"
          onClick={onAccept}
          disabled={loading !== null}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading === "accept" ? "수락 중…" : "수락하기"}
        </button>
      </div>
    </div>
  );
}
