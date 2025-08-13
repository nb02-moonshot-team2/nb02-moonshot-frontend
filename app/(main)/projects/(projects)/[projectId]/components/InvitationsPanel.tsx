"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  getMyInvitationsClient,
  acceptInvitationClient,
  rejectInvitationClient,
  type MyInvitation,
} from "./invitations.client";

type LoadingState = { id: number; action: "accept" | "reject" } | null;

export default function InvitationsPanel() {
  const router = useRouter();
  const [items, setItems] = useState<MyInvitation[]>([]);
  const [loading, setLoading] = useState<LoadingState>(null);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    try {
      setError(null);
      const res = await getMyInvitationsClient({
        status: "pending",
        page: 1,
        limit: 20,
      });
      setItems(res.data);
    } catch (e: any) {
      console.error("[InvitationsPanel] error", e);
      setError(e?.message ?? "초대 목록을 불러오지 못했습니다.");
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!loaded)
    return <div style={{ margin: "12px 0" }}>초대 목록 불러오는 중…</div>;
  if (error)
    return (
      <div style={{ margin: "12px 0", color: "#b91c1c" }}>
        초대 조회 오류: {error}
      </div>
    );
  if (items.length === 0)
    return (
      <div style={{ margin: "12px 0", color: "#6b7280" }}>
        대기 중인 초대가 없습니다.
      </div>
    );

  const onAccept = async (id: number) => {
    try {
      setLoading({ id, action: "accept" });
      await acceptInvitationClient(id);
      toast.success("초대 수락 완료");
      await load();
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 수락에 실패했습니다.");
    } finally {
      setLoading(null);
    }
  };

  const onReject = async (id: number) => {
    try {
      // 간단 확인 모달 (원하면 제거 가능)
      const ok = window.confirm("이 초대를 거절하시겠어요?");
      if (!ok) return;

      setLoading({ id, action: "reject" });
      await rejectInvitationClient(id);
      toast.info("초대가 거절되었습니다.");
      await load();
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 거절에 실패했습니다.");
    } finally {
      setLoading(null);
    }
  };

  const isLoading = (id: number, action: "accept" | "reject") =>
    loading?.id === id && loading.action === action;

  return (
    <div
      style={{
        margin: "16px 0 24px",
        padding: "12px 16px",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        background: "#f8fafc",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 8 }}>초대함</div>
      <ul style={{ display: "grid", gap: 8 }}>
        {items.map((inv) => (
          <li
            key={inv.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderRadius: 10,
              background: "white",
              border: "1px solid #eee",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{inv.project.name}</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                초대일: {new Date(inv.invitedAt).toLocaleString()}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => onReject(inv.id)}
                disabled={isLoading(inv.id, "reject")}
                style={{
                  fontSize: 13,
                  padding: "6px 10px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  opacity: isLoading(inv.id, "reject") ? 0.6 : 1,
                }}
                aria-busy={isLoading(inv.id, "reject")}
              >
                {isLoading(inv.id, "reject") ? "처리 중…" : "거절하기"}
              </button>

              <button
                onClick={() => onAccept(inv.id)}
                disabled={isLoading(inv.id, "accept")}
                style={{
                  fontSize: 13,
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: "#2563eb",
                  color: "white",
                  opacity: isLoading(inv.id, "accept") ? 0.6 : 1,
                }}
                aria-busy={isLoading(inv.id, "accept")}
              >
                {isLoading(inv.id, "accept") ? "처리 중…" : "수락하기"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
