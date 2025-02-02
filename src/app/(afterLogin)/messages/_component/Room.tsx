"use client";

import { useRouter } from "next/navigation";
import style from "../message.module.css";

export default function Room() {
  const router = useRouter();

  const user = {
    id: "nelljw",
    nickname: "김종완",
    Messages: [
      { roomId: 1, content: "안녕하세요", createdAt: new Date() },
      { roomId: 2, content: "안녕하세요", createdAt: new Date() },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.roomUserImage}>
        <img src="/nelljw_1.jpg" alt="" />
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>&nbsp;
        </div>
        <div className={style.roomLastChat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
