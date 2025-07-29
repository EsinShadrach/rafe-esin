// app/nori/verify/page.tsx
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_NORI_APP_WRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_NORI_APP_WRITE_PROJECT_ID!);

const account = new Account(client);

const verifyEmail = async (userId: string, secret: string) => {
  try {
    const response = await account.updateVerification(userId, secret);
    console.log("User verified");
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { userId: string; secret: string };
}) {
  const { userId, secret } = searchParams;

  const response = await verifyEmail(userId, secret);

  return (
    <main
      style={{ padding: "2rem", fontFamily: "sans-serif" }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1>{response ? "Email verified!" : "Verification failed."}</h1>
    </main>
  );
}
