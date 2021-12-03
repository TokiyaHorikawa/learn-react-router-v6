import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            const filter: string | undefined = e.target.value;
            setSearchParams(filter ? { filter } : {});
          }}
        />
        {invoices
          .filter((incoice) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = incoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "black",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
