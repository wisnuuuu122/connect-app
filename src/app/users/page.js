import React from 'react';
import { User, Users2, LogOut, Plus } from 'lucide-react';

const users = [
  {
    name: 'Rahmat Saudi Al Fathir As',
    email: 'rahmatsaudi@universitasmulia.ac.id',
    roles: ['Admin', 'Employee'],
    status: 'Aktif',
  },
  {
    name: 'Lintang',
    email: 'lintang@universitasmulia.ac.id',
    roles: ['Employee'],
    status: 'Aktif',
  },
  {
    name: 'Shafira',
    email: 'shafira@universitasmulia.ac.id',
    roles: ['Employee'],
    status: 'Aktif',
  },
  {
    name: 'Lebah Ganteng',
    email: 'lebahganteng@universitasmulia.ac.id',
    roles: ['Employee'],
    status: 'Suspended',
  },
];

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
          {users.map((user, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <div className="flex gap-2 mt-1">
                  {user.roles.map((role, i) => (
                    <span
                      key={i}
                      className="bg-black text-white text-xs px-2 py-0.5 rounded"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`font-bold ${
                  user.status === 'Suspended' ? 'text-gray-500' : ''
                }`}
              >
                {user.status}
              </span>
            </div>
          ))}
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


