import { Connection, SystemProgram, LAMPORTS_PER_SOL, PublicKey, TransactionMessage, VersionedTransaction } from "@solana/web3.js";

export async function createTransaction(userPublicKey: PublicKey) {
  try {
    const connection = new Connection(process.env.SOLANA_MAINNET_RPC_URL!);
    const lamportsToDeduct = 0.001 * LAMPORTS_PER_SOL;
    const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    const transferInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(userPublicKey), 
        toPubkey: new PublicKey(userPublicKey),   
        lamports: lamportsToDeduct,               
      });
    const msg = new TransactionMessage({
        payerKey: userPublicKey,
        recentBlockhash: recentBlockhash,
        instructions: [transferInstruction]
      }).compileToV0Message();

    return new VersionedTransaction(msg);

  } catch (error) {
    console.error("Error creating signed transaction:", error);
    throw error;
  }
}