interface LoginResponse {
    success: boolean;
    message?: string;
    data: string // jwt token
    errors?: Record<string, string>;
}

export default LoginResponse;
