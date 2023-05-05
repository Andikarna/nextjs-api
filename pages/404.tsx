import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  },[]);

  return (
    <div className="custom404">
      <p>Nyari apa sihhh... <br></br>Gak ada apa apa disni bro</p>
    </div>
  );
}
