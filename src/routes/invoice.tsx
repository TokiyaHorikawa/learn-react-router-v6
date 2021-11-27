import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  const { invoiceId } = useParams<"invoiceId">();
  const invoice = getInvoice(Number(invoiceId));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Invoice: {invoiceId}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Data: {invoice?.due}</p>
    </main>
  );
}
