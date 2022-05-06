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

    const deletePost = async (id) => {
        await deleteDoc(doc(id))
    }

    const getPosts = async () => {
        const postsCollection = collection(database, 'Posts');
        const postSnapshot = await getDocs(postsCollection);
        const postList = postSnapshot.docs.map(doc => doc.data());
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
                    console.log(posts)
                    return (
                        <View style={styles.Posts}>
                            <TouchableOpacity
                                style={styles.deletePost}
                                onPress={() => deletePost(item.id)}
                            >
                                <FontAwesome name="trash" size={20} color="#00a680" />
                            </TouchableOpacity>

                            <Text
                                style={styles.postDescription}
                                onPress={() => navigation.navigate('Details', {
                                    id: item.id,
                                    description: item.description,
                                })}
                            >
                                {item.description}
                            </Text>
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