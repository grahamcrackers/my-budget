import { keycloak } from "./keycloak";

type Client = typeof fetch;

/**
 * A wrapper around fetch
 *
 * @see https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 */
export const client: Client = (endpoint, { body, ...init } = {}) => {
    const headers: HeadersInit = { "content-type": "application/json" };

    if (keycloak.token) {
        headers.Authorization = `Bearer ${keycloak.token}`;
    }

    const config: RequestInit = {
        method: body ? "POST" : "GET",
        ...init,
        headers: {
            ...headers,
            ...init.headers,
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
