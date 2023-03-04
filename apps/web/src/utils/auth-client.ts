import { client } from "./client";

// type Signup = {
//     username: string;
//     password: string;
// };

const signup = (user: any) => {
    return client("signup", { body: user });
};

export { signup };
