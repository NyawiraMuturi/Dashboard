import {Box, Button, TextField} from '@mui/material'
import {Formik} from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",
}

const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegex, "Phone number is not valid")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required")

})


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }
  return (
    <Box m="20px">
        <Header title="NEW USER DETAILS" subtitle="Create a New User Profile"/>
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({errors, values, handleBlur, handleSubmit, touched, handleChange})=>(
                <form>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}
                        }}
                    >
                        I am a form
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default Form