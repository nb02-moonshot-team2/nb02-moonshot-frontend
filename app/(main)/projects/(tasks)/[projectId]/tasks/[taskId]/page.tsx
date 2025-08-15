import classNames from "classnames/bind";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChevronRight from "@/public/assets/chevron-right.svg";
import SubTaskList from "./components/SubTaskList";
import CommentList from "./components/CommentList";
import MoreMenu from "./components/TaskMoreMenu";
import styles from "./page.module.css";
import {
  getCommentsByTaskId,
  getSubTasksByTaskId,
  getTaskById,
} from "./actions";
import { getProjectById } from "@/app/(main)/projects/actions";
import TaskDropdown from "./components/TaskDropdown";
import EditTaskAttachmentInput from "./components/EditTaskAttachmentInput";

// types/entities.ts 에 정의된 Comment 사용
import type { Comment } from "@/types/entities";

const cx = classNames.bind(styles);

/**
 * unknown 형태의 응답에서 Comment[]만 안전하게 뽑아내는 헬퍼
 * - 배열이면 그대로 반환
 * - 객체면 { comments | items | data } 중 배열을 찾아 반환
 * - 그 외는 빈 배열
 */
const toCommentsArray = (src: unknown): Comment[] => {
  if (Array.isArray(src)) return src as Comment[];
  if (src && typeof src === "object") {
    const obj = src as Record<string, unknown>;
    for (const k of ["comments", "items", "data"] as const) {
      const v = obj[k];
      if (Array.isArray(v)) return v as Comment[];
    }
  }
  return [];
};

const TaskPage = async ({
  params,
}: {
  params: Promise<{
    projectId: string;
    taskId: string;
  }>;
}) => {
  const { projectId: projectIdString, taskId: taskIdString } = await params;
  const projectId = Number(projectIdString);
  const taskId = Number(taskIdString);

  const { data: project, error: projectError } = await getProjectById(
    projectId
  );
  const { data: task, error: taskError } = await getTaskById(taskId);
  if (projectError || taskError || !project || !task) {
    return redirect("/projects");
  }

  const { data: subTasks } = await getSubTasksByTaskId(taskId);

  // 댓글 로드
  const commentsRes = await getCommentsByTaskId(taskId);
  // 여기서 data를 unknown으로 확장해서 TS의 'never' 추론 방지
  const rawComments: unknown = commentsRes.data;
  // 어떤 스펙이 와도 최종적으로 Comment[]만 넘기도록 표준화
  const comments: Comment[] = toCommentsArray(rawComments);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <Link className={cx("link")} href={`/projects/${projectId}`}>
          {project.name}
        </Link>
        <ChevronRight className={cx("chevron")} />
        <Link
          className={cx("link")}
          href={`/projects/${projectId}/tasks/${taskId}`}
        >
          {task.title}
        </Link>
      </div>

      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("title")}>
            <h1 className={cx("titleText")}>{task.title}</h1>
            <TaskDropdown taskId={taskId} taskStatus={task.status} />
          </div>

          <div className={cx("metadata")}>
            <div className={cx("date")}>
              <span className={cx("dateValue")}>
                {[task.startYear, task.startMonth, task.startDay].join(".")} ~{" "}
                {[task.endYear, task.endMonth, task.endDay].join(".")}
              </span>
            </div>
            <div className={cx("verticalDivider")} />
            <div className={cx("assignee")}>{task.assignee?.name}</div>
          </div>

          <MoreMenu
            className={cx("moreMenu")}
            projectId={projectId}
            task={task}
          />
        </div>

        <div className={cx("horizontalDivider")} />

        <div>
          <p className={cx("description")}>{task.description}</p>
          <div className={cx("tags")}>
            {task.tags.map((tag) => (
              <span className={cx("tag")} key={tag.id}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        <SubTaskList taskId={taskId} subTasks={subTasks ?? []} />

        <EditTaskAttachmentInput
          taskId={taskId}
          urls={task.attachments ?? []}
        />

        <div className={cx("horizontalDivider")} />

        {/* 항상 Comment[]만 넘김 */}
        <CommentList taskId={taskId} comments={comments} />
      </div>
    </div>
  );
};

export default TaskPage;
