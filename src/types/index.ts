 export interface TransactionData {
  id: string; // Transaction ID
  amount: number; // Amount of the transaction
  unique_code: number; // Unique transaction code
  status: "SUCCESS" | "PENDING"; // Status of the transaction
  sender_bank: string; // Bank sending the transaction
  account_number: string; // Sender's account number
  beneficiary_name: string; // Recipient's name
  beneficiary_bank: string; // Recipient's bank
  remark: string; // Additional remarks for the transaction
  created_at: string; // Timestamp when the transaction was created
  completed_at: string; // Timestamp when the transaction was completed
  fee: number; // Fee for the transaction
}
