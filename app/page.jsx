import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        ab cd ef gh ij kl mn op qr st uv wx yz ab cd ef gh ij kl mn op qr st uv
        wx yz ab cd ef gh ij kl mn op qr st uv wx yz ab cd ef gh ij kl mn op qr
        st uv wx yz
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          abc def ghi jkl mno pqr stu vwx yz abc def ghi jkl mno pqr stu vwx yz
          abc def ghi jkl mno pqr stu vwx yz abc def ghi jkl mno pqr stu vwx yz
          abc def ghi jkl mno pqr stu vwx yz
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          abcd efgh ijkl mnop qrst uvwx yz abcd efgh ijkl mnop qrst uvwx yz abcd
          efgh ijkl mnop qrst uvwx yz abcd efgh ijkl mnop qrst uvwx yz abcd efgh
          ijkl mnop qrst uvwx yz
        </p>
      </div>
    </main>
  );
}
