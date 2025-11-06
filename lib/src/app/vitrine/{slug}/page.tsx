import { supabase } from '@/lib/supabase'

export default async function Vitrine({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { data, error } = await supabase
    .from('vitrines')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return <p>Vitrine non trouvée</p>

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-4">{data.nom_entreprise}</h1>
      <p className="mb-4">{data.description}</p>
      {data.logo_url && <img src={data.logo_url} alt="Logo" className="mb-4 w-32 h-32 object-contain" />}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.images?.map((img: string, i: number) => (
          <img key={i} src={img} alt={`Image ${i + 1}`} className="w-full h-48 object-cover rounded" />
        ))}
      </div>
    </div>
  )
    }
