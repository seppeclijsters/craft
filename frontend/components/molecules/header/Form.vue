<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

const { currentPage } = usePageData()
const { isRequired, validateEmail } = useFieldValidation()

const myForm = ref()
const sendingSubmission = ref(false)
const formSend = ref(false)
const contactName = ref('')

const fieldType = {
    'Field_Name': 'text',
    'Field_Email': 'email',
    'Field_Phone': 'phone',
    'Field_SingleLineText': 'text'
}

function onInvalidSubmit({ errors }) {
    // Scroll to first el on the form with an error
    const fieldName = Object.keys(errors)[0]
    const el = document.querySelector(`label[for="${fieldName}"]`)
    el?.scrollIntoView()
}

const getRules = (isValueRequired, fieldType) => {
    if (isValueRequired) {
        if (fieldType === 'email') return validateEmail
        return isRequired
    }
}

const onSubmit = async (values) => {
    formSend.value = false
    sendingSubmission.value = true

    try {
        /* Save submission in craft cms */
        const response = await GqlSaveContactSubmission(values)
        console.log(response)

        /* Get contactname from submission response */
        contactName.value = response.save_contact_Submission.contactName

        /* Update values */
        formSend.value = true
        sendingSubmission.value = false
    } catch (err) {
        sendingSubmission.value = false
        throw new Error(err)
    }

    // Reset the form values
    myForm.value.setValues({});


    /* Scroll to top */
    window.scrollTo(0, 0)
}
</script>

<template>
    <h1 class="site-header__form-title">{{ currentPage.headerTitle }}</h1>
    <div class="site-header__form">
        <div v-if="currentPage.headerIntro" v-html="currentPage.headerIntro" class="intro"></div>
        <Form ref="myForm" class="form" @invalid-submit="onInvalidSubmit" @submit="onSubmit">
            <div v-if="sendingSubmission || formSend" class="form__succes-message">
                <p v-if="sendingSubmission">
                    Formulier verzenden...
                </p>
                <p v-else-if="formSend">
                    Uw formulier verzonden is verzonden. 👍<br />
                    Hey {{ contactName }}, Bedankt voor uw intresse in phanes! Wij
                    proberen uw bericht zo snel mogelijk te verwerken!
                </p>
            </div>
            <div class="form__row" v-for="({ rowFields }, index) in currentPage.headerForm[0].pages[0].rows"
                :key="index">
                <div v-for="(field, index) in rowFields" :key="index"
                    :class="['field', { 'field--textarea': field.typeName === 'Field_MultiLineText' }]">
                    <template v-if="field.typeName === 'Field_MultiLineText'">
                        <div class="field__inner-wrapper">
                            <Field as="textarea" :name="field.handle" id="" rows="3"
                                :rules="getRules(field.required, fieldType[field.typeName])" />
                            <label :for="field.handle">{{ field.name }} :</label>
                        </div>
                        <ErrorMessage class="field__error" :name="field.handle" />
                    </template>
                    <template v-else>
                        <div class="field__inner-wrapper">
                            <Field :type="fieldType[field.typeName]" :id="field.handle" :name="field.handle"
                                :rules="getRules(field.required, fieldType[field.typeName])" />
                            <label :for="field.handle">{{ field.name }} :</label>
                        </div>
                        <ErrorMessage class="field__error" :name="field.handle" />
                    </template>
                </div>
            </div>
            <div class="form__button-wrapper">
                <button class="button button--border button--primary">
                    <div class="button__ball">
                        <span class="inner"></span>
                    </div>
                    {{ currentPage.headerForm[0].pages[0].settings.submitButtonLabel }}
                </button>
            </div>
        </Form>
    </div>
</template>