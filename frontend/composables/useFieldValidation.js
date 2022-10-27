export default function useFieldValidation() {
    const isRequiredString = 'Dit veld is verplicht'
    const emailNotValid = 'Geeft een geldig email op'

    function isRequired(value) {
        if (value && value.trim()) return true
        return isRequiredString
    }

    function validateEmail(value) {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (!value) return isRequiredString
        if (!regex.test(value)) return emailNotValid
        return true
    }

    return {
        isRequired,
        validateEmail,
    }
}