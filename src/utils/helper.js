export const validateEmail = (email) => {
    // const re = /^[0-9a-zA-Z]{10}@mlrit\.ac\.in$/;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
    };
