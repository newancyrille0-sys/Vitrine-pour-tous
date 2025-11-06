'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([])

  useEffect(() => {
    supabase.from('vitrine_requests').select('*').then(({ data }) => setRequests(data || []))
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Nom</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Catégorie</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td className="border px-2 py-1">{req.nom_entreprise}</td>
              <td className="border px-2 py-1">{req.email}</td>
              <td className="border px-2 py-1">{req.categorie}</td>
              <td className="border px-2 py-1">{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
    }
