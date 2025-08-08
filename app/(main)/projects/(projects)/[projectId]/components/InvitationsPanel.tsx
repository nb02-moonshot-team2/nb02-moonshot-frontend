"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  getMyInvitationsClient,
  acceptInvitationClient,
  type MyInvitation,
} from "./invitations.client";

export default function InvitationsPanel() {
  const router = useRouter();
  const [items, setItems] = useState<MyInvitation[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);
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
      console.log("[InvitationsPanel] fetched", res);
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

  const onAccept = async (id: number, projectId: number) => {
    try {
      setLoadingId(id);
      await acceptInvitationClient(id);
      toast.success("초대 수락 완료");
      await load();
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message ?? "초대 수락에 실패했습니다.");
    } finally {
      setLoadingId(null);
    }
  };

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
              <a
                href={`/projects/${inv.projectId}`}
                style={{
                  fontSize: 13,
                  padding: "6px 10px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              >
                상세 보기
              </a>
              <button
                onClick={() => onAccept(inv.id, inv.projectId)}
                disabled={loadingId === inv.id}
                style={{
                  fontSize: 13,
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: "#2563eb",
                  color: "white",
                  opacity: loadingId === inv.id ? 0.6 : 1,
                }}
              >
                {loadingId === inv.id ? "처리 중…" : "수락하기"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
