import { Client, Account } from "appwrite";

let account: Account | null = null;

function getAccount() {
  if (!account) {
    const endpoint = process.env.NEXT_PUBLIC_NORI_APP_WRITE_ENDPOINT;
    const projectId = process.env.NEXT_PUBLIC_NORI_APP_WRITE_PROJECT_ID;
    if (!endpoint || !projectId) return null;
    const client = new Client().setEndpoint(endpoint).setProject(projectId);
    account = new Account(client);
  }
  return account;
}

const verifyEmail = async (userId: string, secret: string) => {
  try {
    const acct = getAccount();
    if (!acct) return null;
    const response = await acct.updateVerification(userId, secret);
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
