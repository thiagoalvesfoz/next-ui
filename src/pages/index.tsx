import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useUser = () => ({ user: null, loading: false });

export default function Page() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  return <p>Carregando...</p>;
}
