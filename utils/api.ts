/**
 * Creates a full URL given a path.
 * @param path - The path to append to the origin.
 * @returns The full URL.
 * @throws Will throw an error if the path is not a string.
 */
export const createURL = (path: string): string => {
    if (typeof path !== 'string') {
        throw new TypeError('Path must be a string');
    }
    return `${window.location.origin}${path}`;
}

/**
 * Creates a new journal entry.
 * @returns The data from the response.
 * @throws Will throw an error if the network response is not ok.
 */
export const createNewEntry = async (): Promise<any> => {
    try {
        const res = await fetch(createURL('/api/journal'), {
            method: 'POST',
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
        throw error;
    }
}

/**
 * Updates a journal entry.
 * @param id - The id of the entry to update.
 * @param content - The new content for the entry.
 * @returns The data from the response.
 * @throws Will throw an error if the network response is not ok.
 */
export const updateEntry = async (id: string, content: string): Promise<any> => {
    try {
        const res = await fetch(createURL(`/api/journal/${id}`), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
        throw error;
    }
}

export const askQuestion = async (question) => {
    try {
        const res = await fetch(
            new Request(createURL('/api/question'), {
                method: 'POST',
                body: JSON.stringify({ question })
            })
        )

        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
        throw error;
    }
}