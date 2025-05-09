import { IconUser } from "@tabler/icons-react";


export default function Users() {
  return (
    <div id="container" className="flex h-[100vh] bg-white">
      <section id="Navigation" className="border-r-2 p-4">
        <div>
         <h1 className="text-4xl text-center text-black">Connect</h1>
          <div>
          <button className="mt-4 flex text-black text-center"> <IconUser></IconUser>User</button>
          <button className="flex text-black text-center">Hak User
            <IconKey className="text-black flex">Hak User</IconKey>
          </button>
          <button className="text-black text-center flex">Logout
            <IconLogout className="text-black flex"></IconLogout>
          </button>
         </div>
        </div>
      </section>

      <section id="Content">
        <input placeholder="Cari Users" className="placeholder-black m-8 w-255 flex text-black outline-black"></input>
        <div id="list-users">
          <div id="user-info">
            <h2 className="text-black">Rahmad Saudi Al Fathir</h2>
            <p className="text-black">rahmatsaudi@universitasmulia.ac.id</p>
          </div>
        </div>
      </section>
    </div>
  );
}

    