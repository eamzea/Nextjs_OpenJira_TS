import db from "@/database";

export const handleConnection = async (fn: () => Promise<any>) => {
  await db.connect();
  const result = await fn()
  await db.disconnect();

  return result
};
