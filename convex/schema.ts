import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users:defineTable({
        username:v.string(),
        fullname:v.string(),
        email:v.string(),
        bio:v.optional(v.string()),
        image:v.string(),
        followers:v.number(),
        following:v.number(),
        posts:v.number(),
        clerkId:v.string(),
    }).index("by_clerkId", ["clerkId"]),

    likes:defineTable({
        userId:v.id("users"),
        postId:v.id("posts"),
    })
    .index("by_post",["postId"])
    .index("by_user_and_post",["userId","postId"]),

    posts:defineTable({
        userId:v.id("users"),   
        imageUrl:v.string(),
        storageId:v.id("_storage"),
        caption:v.optional(v.string()),
        likes:v.number(),
        comments:v.number(),
    }).index("by_userId", ["userId"]),

    follows:defineTable({
        followerId:v.id("users"),
        followingId:v.id("users"),
    })
    .index("by_followerId", ["followerId"])
    .index("by_followingId", ["followingId"])
    .index("by_follower_and_following", ["followerId","followingId"]),

    notifications:defineTable({
       receiverId:v.id("users"),
       senderId:v.id(" and if you want to add something, we'll be using the insert method and you'll like to inserted under the post table and we can add our fields to we're going to put the user ready so that we know who's the owner of the post then we can add the image URL ahead but we don't really have the image URL at the moment how can we get it well basically to say here as a constant image url erit context storage and we'll say get URL we're going to put this on Richard Storage storage ID this will give us an image URL you can just say if IMR is not existent you can't throw in there and then we can say the storage ID which is coming from the arguments we're going to put the caption and each post will have zero likes and zero comments when they first predicted so with this now our code is happy with us if we don't check l immature is not existed we can't throw an error and then we can say the storage ID which is coming from the arguments we can up the caption and each post will have zero likes and zero comments when they first created so with this now our code is happy with us if we don'tusers"),
       type:v.union(v.literal("like"),v.literal("comment"),v.literal("follow")),
       postId:v.optional(v.id("posts")),
       commentId:v.optional(v.id("comments")),
    }).index("by_receiverId", ["receiverId"])
})