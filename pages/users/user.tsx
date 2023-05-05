import Layouts from "@/components/layouts";
import { useRouter } from "next/router";
import style from "../../styles/User.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <div>
      <Layouts pageTitle="USERS">
        <div className={style.container}>
          <h1 className={style.titleCardUser}>Data User</h1>
          {dataUsers.map((user) => {
            return (
              <>
                <div
                  key={user.id}
                  onClick={() => router.push(`/users/${user.id}`)}
                  className={style.userCard}
                >
                  <p className={style.itemCard}>Nama : {user.name}</p>
                  <p className={style.itemCard}>Email : {user.email}</p>
                </div>
              </>
            );
          })}
        </div>
      </Layouts>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
