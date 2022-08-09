import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    iconButton: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonNewPost: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#00a680',
        bottom: 30,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
    },
    Posts: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    deletePost: {
        justifyContent: 'center',
        paddingRight: 15,
    },
    postDescription: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 20,
        color: '#282b2db5',
    }

})

export default styles