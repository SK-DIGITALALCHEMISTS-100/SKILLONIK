const API_URL = "http://127.0.0.1:8000";


// =====================================================
// SIGNUP - SEND OTP
// =====================================================

export async function signupSendOtp(data) {

    const response = await fetch(
        `${API_URL}/api/auth/signup/send-otp`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    if (!response.ok) {

        throw new Error(
            result.detail || "Unable to send OTP"
        );
    }

    return result;
}


// =====================================================
// SIGNUP - VERIFY OTP
// =====================================================

export async function signupVerifyOtp({
    name,
    email,
    password,
    otp,
    track,
    experience
}) {

    const response = await fetch(
        `${API_URL}/api/auth/signup/verify`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email: (email || "").trim().toLowerCase(),
                password,
                otp: String(otp).trim(),
                track,
                experience
            })
        }
    );

    const result = await response.json();

    if (!response.ok) {

        let message = "Signup verification failed";

        if (Array.isArray(result.detail)) {
            message = result.detail
                .map(error => error.msg || error)
                .join(", ");
        } else if (typeof result.detail === "string") {
            message = result.detail;
        } else if (result.message) {
            message = result.message;
        }

        throw new Error(message);
    }

    return result;
}

// =====================================================
// LOGIN
// =====================================================

export async function loginUser({ email, password }) {

    console.log("LOGIN REQUEST:", {
        email,
        password: "********"
    });

    const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: (email || "").trim().toLowerCase(),
                password: password
            })
        }
    );

    const result = await response.json();

    console.log("LOGIN RESPONSE:", result);

    if (!response.ok) {

        let message = "Login failed";

        if (Array.isArray(result.detail)) {

            message = result.detail
                .map(error => {
                    if (typeof error === "string") {
                        return error;
                    }

                    return error.msg || "Invalid request";
                })
                .join(", ");

        } else if (typeof result.detail === "string") {

            message = result.detail;

        } else if (result.message) {

            message = result.message;
        }

        throw new Error(message);
    }

    return result;
}


// =====================================================
// FORGOT PASSWORD - SEND OTP
// =====================================================

export async function forgotSendOtp(dataOrEmail) {

    const email = (typeof dataOrEmail === "object" && dataOrEmail !== null)
        ? dataOrEmail.email
        : dataOrEmail;

    const response = await fetch(
        `${API_URL}/api/auth/forgot-password/send-otp`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: (email || "").trim().toLowerCase()
            })
        }
    );

    const result = await response.json();

    if (!response.ok) {

        let message = "Unable to send OTP";

        if (Array.isArray(result.detail)) {
            message = result.detail
                .map(error => error.msg || error)
                .join(", ");
        } else if (typeof result.detail === "string") {
            message = result.detail;
        } else if (result.message) {
            message = result.message;
        }

        throw new Error(message);
    }

    return result;
}


// =====================================================
// FORGOT PASSWORD - VERIFY OTP
// =====================================================

export async function forgotVerifyOtp(emailOrData, maybeOtp) {

    let email = "";
    let otp = "";

    if (typeof emailOrData === "object" && emailOrData !== null) {
        email = emailOrData.email || "";
        otp = emailOrData.otp || "";
    } else {
        email = emailOrData || "";
        otp = maybeOtp || "";
    }

    const response = await fetch(
        `${API_URL}/api/auth/forgot-password/verify-otp`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email.trim().toLowerCase(),
                otp: String(otp).trim()
            })
        }
    );

    const result = await response.json();

    if (!response.ok) {

        let message = "Invalid OTP";

        if (Array.isArray(result.detail)) {
            message = result.detail
                .map(error => error.msg || error)
                .join(", ");
        } else if (typeof result.detail === "string") {
            message = result.detail;
        } else if (result.message) {
            message = result.message;
        }

        throw new Error(message);
    }

    return result;
}


// =====================================================
// RESET PASSWORD
// =====================================================

export async function resetPassword(data) {

    const email = (data?.email || "").trim().toLowerCase();
    const otp = String(data?.otp || "").trim();
    const new_password = data?.new_password || data?.newPassword || "";

    const response = await fetch(
        `${API_URL}/api/auth/forgot-password/reset-password`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                otp,
                new_password
            })
        }
    );

    const result = await response.json();

    console.log("RESET PASSWORD RESPONSE:", result);

    if (!response.ok) {

        let message = "Password reset failed";

        if (Array.isArray(result.detail)) {

            message = result.detail
                .map(error => error.msg || error)
                .join(", ");

        } else if (typeof result.detail === "string") {

            message = result.detail;

        } else if (result.message) {

            message = result.message;
        }

        throw new Error(message);
    }

    return result;
}