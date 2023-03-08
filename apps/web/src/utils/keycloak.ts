import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
    url: import.meta.env.VITE_AUTH_URL,
    realm: import.meta.env.VITE_AUTH_REALM,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
});
