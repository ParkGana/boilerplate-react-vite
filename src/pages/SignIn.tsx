import { useAuth } from '@/providers/authProvider';

const SignInPage = () => {
  const { signIn } = useAuth();

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-fit cursor-pointer border-2 border-black p-3 hover:bg-neutral-300" onClick={signIn}>
        <p className="font-bold">로그인</p>
      </div>
    </div>
  );
};

export default SignInPage;
