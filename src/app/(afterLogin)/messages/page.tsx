import dayjs from "dayjs";
import style from "./message.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
import Room from "./_component/Room";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Message({ children }: { children: React.ReactNode }) {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <div className={style.roomList}>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </main>
  );
}
