import { useEffect, useState } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';

export default function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('pending');
    setData(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus('success');
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
        setData(null);
      });
  }, [asyncFunction]);

  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
}
