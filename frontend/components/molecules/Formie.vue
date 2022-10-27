<script setup>
import IconUpload from "@/assets/icons/icon-upload.svg"
import { Form, Field, ErrorMessage } from 'vee-validate'
const { isRequired, validateEmail } = useFieldValidation()

defineProps({
    form: {
        type: Object,
        default: () => { }
    },
})

const myForm = ref()
const sendingSubmission = ref(false)
const formSend = ref(false)

const fieldType = {
    'Field_Name': 'text',
    'Field_Email': 'email',
    'Field_Phone': 'phone',
    'Field_SingleLineText': 'text',
    'Field_FileUpload': 'file',
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

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}

const uploadImage = async (event) => {
    console.log('👉', 'upload image...')
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64)
}

const onSubmit = async (values) => {
    formSend.value = false
    sendingSubmission.value = true

    try {
        /* Save submission in craft cms */
        //const response = await GqlSaveApplicationSubmission(values)

        const base64 = await convertBase64(values.jobCv)

        console.log('👉 values', values)
        console.log(base64)

        /* Update values */
        formSend.value = true
        sendingSubmission.value = false
    } catch (err) {
        sendingSubmission.value = false
        throw new Error(err)
    }

    // Reset the form values
    // myForm.value.setValues({});


    /* Scroll to top */
    window.scrollTo(0, 0)
}
</script>

<template>
    <Form ref="myForm" class="formie" @invalid-submit="onInvalidSubmit" @submit="onSubmit">
        <div class="formie__row" v-for="({ rowFields }, index) in form.pages[0].rows" :key="index">
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
                        <Field v-if="fieldType[field.typeName] === 'file'" :type="fieldType[field.typeName]"
                            :id="field.handle" :name="field.handle"
                            :rules="getRules(field.required, fieldType[field.typeName])" />
                        <Field v-else :type="fieldType[field.typeName]" :id="field.handle" :name="field.handle"
                            :rules="getRules(field.required, fieldType[field.typeName])" />
                        <div class="icon-wrapper">
                            <IconUpload v-if="fieldType[field.typeName] === 'file'" />
                        </div>
                        <label :for="field.handle">{{ field.name }} :</label>
                    </div>
                    <ErrorMessage class="field__error" :name="field.handle" />
                </template>
            </div>
        </div>
        <div :class="['formie__button-wrapper', form.pages[0].settings.cssClasses]">
            <button class="button button--border button--primary">
                <div class="button__ball">
                    <span class="inner"></span>
                </div>
                {{ form.pages[0].settings.submitButtonLabel }}
            </button>
        </div>
    </Form>
</template>

