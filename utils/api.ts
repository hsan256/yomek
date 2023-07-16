export const createURL = (path: string): string => {
    if (typeof path !== 'string') {
        throw new Error('Path must be a string');
    }
    return `${window.location.origin}${path}`;
}

export const createNewEntry = async (): Promise<any> => {
    try {
        const res = await fetch(
            new Request(createURL('/api/journal'), {
                method: 'POST',
            })
        );

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

export const updateEntry = async (id: string, content: string): Promise<any> => {
    try {
        const res = await fetch(
            new Request(createURL(`/api/journal/${id}`), {
                method: 'PATCH',
                body: JSON.stringify({ content }),
            })
        );

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}
