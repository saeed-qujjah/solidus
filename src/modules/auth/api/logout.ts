import { USER_LOCALSTORAGE_KEY, useAuthStore } from "@/modules/auth/auth-store";
import { useRouter } from "@/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useLogout = () => {
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        async mutationFn() {
            window.localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            setUser(undefined);
            router.push(`/`);
            toast.success("تم تسجيل الخروج بنجاح");
        },
    });
};
