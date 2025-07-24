'use client';

import classNames from 'classnames/bind';
import Input from '@/shared/components/Input';
import BlankProfile from '@/public/assets/blank-profile.svg';
import { Comment } from '@/types/entities';
import CommentMoreMenu from './CommentMoreMenu';
import styles from './CommentList.module.css';
import { useActionState } from 'react';
import { createComment } from '../actions';
import { toast } from 'react-toastify';
import Image from 'next/image';

const cx = classNames.bind(styles);

const CommentItem = ({
  taskId,
  comment,
}: {
  taskId: number;
  comment: Comment;
}) => {
  const author = comment.author!;
  return (
    <div className={cx('comment')}>
      {author.profileImage ? (
        <Image
          className={cx('profileImage')}
          src={author.profileImage}
          alt="profile"
          width={50}
          height={50}
        />
      ) : (
        <BlankProfile className={cx('profileImage')} />
      )}
      <div className={cx('commentBody')}>
        <div className={cx('info')}>
          <span className={cx('author')}>{author.name}</span>
          <span className={cx('createdAt')}>
            {comment.createdAt.toLocaleString()}
          </span>
        </div>
        <div className={cx('commentContent')}>{comment.content}</div>
      </div>
      <CommentMoreMenu
        className={cx('moreMenu')}
        taskId={taskId}
        comment={comment}
      />
    </div>
  );
};

const CommentList = ({
  comments,
  taskId,
}: {
  comments: Comment[];
  taskId: number;
}) => {
  const [state, dispatch, isPending] = useActionState(
    async (prevState: { content: string }, nextState: FormData) => {
      const values = {
        content: nextState.get('content') as string,
      };
      const { error, success } = await createComment(taskId, values);
      if (error) {
        toast.error(error);
      }
      if (success) {
        toast.success(success);
        return { content: '' };
      }
      return values;
    },
    { content: '' }
  );
  return (
    <>
      <form action={dispatch}>
        <Input
          className={cx('commentInput')}
          name="content"
          defaultValue={state.content}
          placeholder="댓글 입력하기"
          disabled={isPending}
        />
      </form>
      <div className={cx('commentList')}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} taskId={taskId} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default CommentList;
