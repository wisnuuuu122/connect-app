import React from 'react';
import { User, Users2, LogOut, Plus } from 'lucide-react';
import Usercard from '@/components/ui/user-card';


export default function UserPage() {
  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6 bg-white">
        <div className="text-2xl font-bold mb-8">Connect</div>

        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 font-semibold bg-black text-white px-4 py-2 rounded">
            <User size={18} />
            User
          </button>
          <button className="flex items-center gap-2 font-semibold px-4 py-2">
            <Users2 size={18} />
            Hak Akses
          </button>
          <button className="flex items-center gap-2 font-semibold px-4 py-2">
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-white">
        <input
          type="text"
          placeholder="Cari user"
          className="w-full p-3 border border-gray-300 rounded mb-6"
        />

        <div className="space-y-4">
           <Usercard />
           <Usercard>
           </Usercard>
       
        </div>

        {/* Add button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded">
            <Plus size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}


