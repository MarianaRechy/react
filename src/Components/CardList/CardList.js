import React from "react";
import results from "../../Data/RickData.js";
import PostCard from "../PostCard/PostCard";
import styles from './CardList.module.scss'

const PostList = () => {
    console.log("results", results)
    return (
        <div className={styles.postListContainer}>
            <h1>Post List</h1>
            <div>
                {results.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            name={post.name}
                            status={post.status}
                            species={post.species}
                            image={post.image}
                            origin={post.origin.name} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;