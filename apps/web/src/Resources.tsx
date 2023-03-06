import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

const config = {
    url: import.meta.env.VITE_AUTH_URL,
    realm: import.meta.env.VITE_AUTH_REALM,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
};

export const Resources = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [keycloak, setKeycloak] = useState<Keycloak | null>(null)!;
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const keycloak = new Keycloak(config);
        keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
            setKeycloak(keycloak);
            setAuthenticated(authenticated);
        });
    }, []);

    if (keycloak) {
        if (authenticated) {
            console.log(keycloak);
            return (
                <div className="grid my-12 place-items-center">
                    <p> You are logged in.</p>
                    <div>
                        <img src="https://random.imagecdn.app/500/250" />
                    </div>
                </div>
            );
        } else return <div className="my-12">Unable to initiate auth!</div>;
    }

    return (
        <>
            <div className="my-12">Keycloak initializing in a moment...</div>
        </>
    );
};
