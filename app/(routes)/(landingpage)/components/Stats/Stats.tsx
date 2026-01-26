'use client'
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import { useEffect, useState } from 'react'

export default function Stats() {
  // Solución y explicación:
  // El problema es que la función pasada a setPerro no retorna un valor,
  // pero React espera que retorne el nuevo estado (number).
  // Si solo incrementás prev (prev++), eso devuelve el nuevo número, pero el return era implícito (faltaba el return explícito).
  // Además, hay que frenar el intervalo al llegar a 5000 para que no siga corriendo innecesariamente.

  const [perro, setPerro] = useState<number>(0)
  const [años, setAños] = useState<number>(0)
  const [porcentaje, setPorcentaje] = useState<number>(0)

  useEffect(() => {
    const intervaloPerro = setInterval(() => {
      setPerro((prev) => {
        if (prev < 5000) {
          return prev + 5
        } else {
          clearInterval(intervaloPerro)
          return prev
        }
      })
    }, 12)
    // Limpieza del intervalo si el componente se desmonta antes de llegar a 5000
    return () => clearInterval(intervaloPerro)
  }, [])
  useEffect(() => {
    const intervaloAños = setInterval(() => {
      setAños((prev2) => {
        if (prev2 < 12) {
          return prev2 + 1
        } else {
          clearInterval(intervaloAños)
          return prev2
        }
      })
    }, 1000)
  }, [])
  useEffect(() => {
    const intervaloAños = setInterval(() => {
      setPorcentaje((prev3) => {
        if (prev3 < 100) {
          return prev3 + 1
        } else {
          clearInterval(intervaloAños)
          return prev3
        }
      })
    }, 120)
  }, [])

  return (
    <MaxWidthWrapper>
      <section className="px-4 py-8 mb-10 md:mb-28">
        <div className="flex flex-wrap gap-6 justify-between items-center bg-white  dark:bg-background-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-800">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-blue-400 text-3xl font-bold">{perro}+</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Perros Felices
            </p>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden md:block" />
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-blue-400 text-3xl font-bold">{años}</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Años de Experiencia
            </p>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden md:block" />
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-blue-400 text-3xl font-bold">{porcentaje}%</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Productos Orgánicos
            </p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
