/* eslint-disable @next/next/no-typos */
import Link from "next/link";
import Layouts from "../../components/layouts";
import style from "../../styles/UserDetail.module.css";

interface User {
  id: number;
  name: string;
  username: string;
  street: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}
export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layouts pageTitle="User Detail">
      <div className={style.container}>
        <div className={style.row}>
          <h1 className={style.title}>User {user.name} </h1>
          <div className={style.cardUser}>
            <h3>Name : {user.name}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Email : {user.email}</h3>
            <h3>Mobile Number : {user.phone}</h3>
            <h3>Website : {user.website}</h3>
          </div>
          <Link href="/users/user" className={style.button}>Kembali</Link>
        </div>
      </div>
    </Layouts>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
