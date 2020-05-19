import { useState, useEffect } from 'react'
import axios from '../utils/axios'

const useList = (resource, criteria) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(`/${resource}`, {
        params: criteria
      })
      setData(response.data)
      setLoading(false)
    }

    fetchData()
  }, [criteria, resource])

  return [data, loading]
}

export default useList
