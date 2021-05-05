import { useLogin } from "../../contexts/loginContext"

export default function HomePage() {

    const {
        username,
        password,
        server,
    } = useLogin();

    return (
        <div>
            <p>{username}</p>
            <p>{password}</p>
            <p>{server}</p>
        </div>
    )
}