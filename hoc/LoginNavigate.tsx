import {useRouter} from "next/router";
import {PropsWithChildren} from "react";

const LoginNavigate = (props: PropsWithChildren) => {
    const {children} = props
    let isAuth = true //запрос за данными пользователя
    const router = useRouter()

    if (!isAuth) router.push('/characters')

    return <>{children}</>
};

export default LoginNavigate;