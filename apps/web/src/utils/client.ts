type Client = typeof fetch;

/**
 * A wrapper around fetch
 *
 * @see https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 */
export const client = (endpoint: string, { body, ...clientConfig }: any = {}) => {
    const headers = { "content-type": "application/json" };

    // if (token) {
    //     headers.Authorization = `Bearer ${token}`;
    // }

    const config: RequestInit = {
        method: body ? "POST" : "GET",
        ...clientConfig,
        headers: {
            ...headers,
            ...clientConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    return window.fetch(`api/${endpoint}`, config).then(async (response) => {
        // if (response.status === 401) {
        //     logout();
        //     window.location.assign(window.location);
        //     return;
        // }
        if (response.ok) {
            return await response.json();
        } else {
            const errorMessage = await response.text();
            return Promise.reject(new Error(errorMessage));
        }
    });
};
