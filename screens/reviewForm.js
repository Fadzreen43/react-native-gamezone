import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik'; // npm istall formik
import * as yup from 'yup'; // npm install yup

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),

    body: yup.string().required().min(8),

    rating: yup.string().required()
          .test('is-num-1-5','Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
          })
});

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                validationSchema = {ReviewSchema}
                onSubmit={(values, actions) =>{
                    actions.resetForm();
                    addReview(values);
                    console.log(values);
                }}
            >
               {(props) => (
                 <View>
                     <TextInput 
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                     />

                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                     />

                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                     />

                     <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                 </View>  
               )} 
            </Formik>
        </View>
    )
}