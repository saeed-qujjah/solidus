import { httpClient } from "@/lib/http-client";
import { USER_LOCALSTORAGE_KEY, useAuthStore } from "@/modules/auth/auth-store";
import { useMutation } from "@tanstack/react-query";

export type LoginRequest = {
    email: string;
    password: string;
};

export type User = {
    _id: string;
    full_name: string;
    email: string;
    phone_number: string;
};

export type LoginResponse = {
    user: User;
    token: string;
};

export const useLogin = () => {
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        async mutationFn(params: LoginRequest) {
            const response = await httpClient.post<LoginResponse>("/auth/login", params);

            const userWithToken = {
                ...response.data.user,
                token: response.data.token,
            };
            setUser(userWithToken);
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userWithToken));
        },
    });
};
