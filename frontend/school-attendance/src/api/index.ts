const base = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(
    path: string,
    options: RequestInit = {}
): Promise<T> {
    const token = localStorage.getItem('token');
    const res = await fetch(`${base}${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers
        }
    });

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);
    return res.json();
}
