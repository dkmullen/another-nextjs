// import NavBar from '../ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{/* <NavBar /> */}</div>
      <div>{children}</div>
    </div>
  );
}
