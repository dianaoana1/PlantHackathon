import React from 'react';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MyButton({ text, navigateTo }) {
    const navigation = useNavigation();

    return (
        <Button
            title={text}
            onPress={() => navigation.navigate(navigateTo)}
        />
    );
}

export default MyButton;