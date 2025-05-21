export default function Usercard() {
  return (
    <div className="border border-gray-300 p-4 rounded flex justify-between items-center">
      <div>
        <p className="font-bold">Rahmat saudi al fathir as</p>
        <p className="font-bold">rahmatsaudi@universitasmulia.ac.id</p>
        <div className="flex gap-2 mt-1">
          <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
            admin
          </span>
        </div>
      </div>
      <span className="font-bold">aktif</span>
    </div>
  );
}
