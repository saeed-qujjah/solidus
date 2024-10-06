import { httpClient } from "@/lib/http-client";
import { USER_LOCALSTORAGE_KEY, useAuthStore } from "@/modules/auth/auth-store";
import { useMutation } from "@tanstack/react-query";

export type RegisterRequest = {
    full_name: string;
    phone_number: string;
    password: string;
    email: string;
    otp: string;
};

export type User = {
    _id: string;
    full_name: string;
    email: string;
    phone_number: string;
};

export type RegisterResponse = {
    user: User;
    token: string;
};

export const useRegister = () => {
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        async mutationFn(params: RegisterRequest) {
            const response = await httpClient.post<RegisterResponse>("/auth/signup", params);

            const userWithToken = {
                ...response.data.user,
                token: response.data.token,
            };
            setUser(userWithToken);
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userWithToken));
        },
    });
};
