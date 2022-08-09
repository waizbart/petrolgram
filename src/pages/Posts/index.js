import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'

import database from '../../config/firebaseConfig'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite'

export default function Posts({ navigation }) {

    const [posts, setPosts] = useState([])
    const [reload, setReload] = useState(false)

    const deletePost = async (id) => {
        await deleteDoc(doc(database, "Posts", id))
        getPosts()
    }

    const getPosts = async () => {
        const postsCollection = collection(database, "Posts");
        const postSnapshot = await getDocs(postsCollection);

        const postList = postSnapshot.docs.map(doc => ({...doc.data(), code: doc.id}));
        
        setPosts(postList)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={(item) => {
                    console.log(item)
                    return (
                        <View style={styles.Posts}>
                            <Text
                                style={styles.postDescription}
                                onPress={() => navigation.navigate('Details', {
                                    id: item.item.id,
                                    description: item.item.description,
                                })}
                            >
                                {item.item.description}
                            </Text>
                            <TouchableOpacity
                                style={styles.deletePost}
                                onPress={() => deletePost(item.item.code)}
                            >
                                <FontAwesome name="trash" size={20} color="red" />
                            </TouchableOpacity>

                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewPost}
                onPress={() => navigation.navigate('New Post')}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}