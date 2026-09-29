import { useEffect, useState } from 'react'
import { supabase } from "../../supabase";
import { Award, Upload, Trash2, Plus } from 'lucide-react'

export default function Certificates() {
  const [certs, setCerts] = useState([])
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const fetchCerts = async () => {
    const { data } = await supabase.from('certificates').select('*').order('id', { ascending: false })
    setCerts(data || [])
  }

  useEffect(() => { fetchCerts() }, [])

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    const fileName = `cert-${Date.now()}-${file.name}`
    await supabase.storage.from('certificate-images').upload(fileName, file)
    const { data } = supabase.storage.from('certificate-images').getPublicUrl(fileName)
    await supabase.from('certificates').insert({ Img: data.publicUrl })
    setFile(null)
    setUploading(false)
    fetchCerts()
  }

  const handleDelete = async (id) => {
    if (confirm('Hapus sertifikat ini?')) {
      await supabase.from('certificates').delete().eq('id', id)
      fetchCerts()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Kelola Sertifikat</h1>
        <p className="text-gray-400 text-xs">Total: {certs.length} sertifikat</p>
      </div>

      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Plus className="w-4 h-4 text-indigo-400" /> Upload Sertifikat Baru
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-xs text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-600 file:text-white"
          />
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="px-6 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-700 text-sm font-medium whitespace-nowrap disabled:opacity-50"
          >
            {uploading ? 'Mengupload...' : 'Upload'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certs.map((cert) => (
          <div key={cert.id} className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <img src={cert.Img} alt="Certificate" className="w-full aspect-[16/11.5] object-cover" />
            <div className="p-2 flex justify-end">
              <button
                onClick={() => handleDelete(cert.id)}
                className="p-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 text-xs"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}